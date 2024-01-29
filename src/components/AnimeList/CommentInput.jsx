'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState('');

  const router = useRouter();
  const handleInput = (event) => {
    setComment(event.target.value);
    setIsError('');
  };

  const handlePost = async (event) => {
    event.preventDefault();

    if (comment.length < 3) {
      setIsError('Comment must be at least 3 characters');
      return;
    }

    const data = {
      anime_mal_id,
      user_email,
      username,
      comment,
      anime_title,
    };

    const response = await fetch('/api/v1/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.isCreated) {
      setIsCreated(true);
      setComment('');
      setIsError('');
      router.refresh();
      setTimeout(() => {
        setIsCreated(false);
      }, 3000);
    }
    return;
  };

  return (
    <div className="flex flex-col gap-2">
      <textarea onChange={handleInput} value={comment} className="w-full h-32 text-md p-4 rounded border border-color-accent" placeholder="Comment here" />
      {isError && <p className="text-color-accent bg-color-primary rounded py-2 px-3">{isError}</p>}
      {isCreated && <p className="text-color-secondary">Comment posted</p>}
      <button onClick={handlePost} className="py-2 px-3 text-md hover:bg-color-primary bg-color-secondary rounded w-36 mt-2">
        Post Comment
      </button>
    </div>
  );
};

export default CommentInput;
