import React from 'react';
import './RatingBlock.css';
import { FaStar } from 'react-icons/fa';

function RatingBlock() {
  const ratings = [
    { resource: 'Video', rating: 4.5 },
    { resource: 'Audio', rating: 4.0 },
    { resource: 'AI/ML Chat', rating: 4.8 },
    { resource: 'Assignment 1', rating: 4.2 },
    { resource: 'Assignment 2', rating: 3.9 },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} color="#FFD700" />
        ))}
        {halfStar && <FaStar color="#FFD700" style={{ opacity: 0.5 }} />}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <FaStar key={i + fullStars + 1} color="#ddd" />
        ))}
      </>
    );
  };

  return (
    <div className="rating-block">
      <h2>Resource Ratings</h2>

      <div className="rating-list">
        {ratings.map((item, index) => (
          <div className="rating-item" key={index}>
            <div className="resource-name">{item.resource}</div>
            <div className="stars">{renderStars(item.rating)}</div>
            <div className="rating-value">{item.rating.toFixed(1)}/5</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RatingBlock;
