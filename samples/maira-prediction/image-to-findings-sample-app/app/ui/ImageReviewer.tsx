import React, { useState } from 'react';
import Image from 'next/image';

export const ImageReviewer = ({ modelInference }) => {
  // Calculate the dimensions and position of the square
  const imageWidth = 500; // Example width of the image
  const imageHeight = 300; // Example height of the image

  const [activeLabel, setActiveLabel] = useState(null); // State to track active label

  const handleMouseEnter = (label) => {
    console.log('enter ---->', label);
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setActiveLabel(null);
    console.log('leave ---->');
  };
  const handleLabelHover = (label) => {
    setActiveLabel(label);
  };

  return (
    <>
      <div className="image-container">
        <Image
          src="https://static.sciencelearn.org.nz/images/images/000/001/098/embed/Neck-X-ray20160518-20305-d802q3.jpg?1674165476" // Example image URL
          alt="Example Image"
          width={imageWidth}
          height={imageHeight}
        />
        {modelInference.map((item, index) => (
          <div
            key={index}
            style={{
              width: (item.x_max - item.x_min) * imageWidth,
              height: (item.y_max - item.y_min) * imageHeight,
              left: item.x_min * imageWidth,
              top: item.y_min * imageHeight,
            }}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
            className={`square ${activeLabel === item.label ? 'active' : ''}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <ul>
        {modelInference.map((item, index) => (
          <li
            key={index}
            className={`list-item ${activeLabel === item.label ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          >
            <p>{item.label}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
