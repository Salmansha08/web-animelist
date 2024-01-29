'use client';

import React, { useState } from 'react';

const CollectionButton = ({ text, anime_mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();
    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    };
    const response = await fetch('/api/v1/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.isCreated) setIsCreated(true);
    return;
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-secondary text-md font-bold px-2 py-1">Added to Collection</p>
      ) : (
        <button onClick={handleCollection} className=" bg-color-secondary hover:bg-color-primary rounded text-color-dark text-md font-bold px-2 py-1">
          {text}
        </button>
      )}
    </>
  );
};

export default CollectionButton;
