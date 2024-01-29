import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={index}>
            <input type="radio" name="rating" value={value} onClick={() => handleStarClick(value)} />
            <FaStar className="star" color={value <= rating ? '#ffc107' : '#e4e5e9'} size={32} />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
