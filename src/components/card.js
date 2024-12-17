import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="card-container">
      {data
        .filter((curItem) => curItem.urlToImage && curItem.url && curItem.title) // Filter out articles without image, title, or URL
        .map((curItem, index) => (
          <div className="card" key={index}>
            <img src={curItem.urlToImage || 'default-image.jpg'} alt="News" />
            <div className="cardContent">
              <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title}
              </a>
              <p>{curItem.description || "No description available."}</p>
              <button onClick={() => readMore(curItem.url)}>Read more</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
