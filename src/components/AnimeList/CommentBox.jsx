import React from 'react';
import prisma from '@/libs/prisma-libs';
const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="text-color-dark py-2 px-3 bg-color-accent rounded">
            <p className="font-bold text-md">{comment.username}</p>
            <p className="text-sm italic">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
