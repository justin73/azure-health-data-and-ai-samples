import React, { useState } from 'react';
import Image from 'next/image';
import { ModelInferenceType, ModelInferenceItem } from '@/app/page';

export const ImageReviewer = ({
  modelInference,
  onMouseEnter,
  onMouseLeave,
  activeLabel,
}: {
  modelInference: ModelInferenceType;
  onMouseEnter: (arg: string) => void;
  onMouseLeave: () => void;
  activeLabel: string | null;
}) => {
  // Calculate the dimensions and position of the square
  const imageWidth = 500; // Example width of the image
  const imageHeight = 300; // Example height of the image

  return (
    <>
      <div className="w-500 h-500 relative">
        <Image
          src="https://static.sciencelearn.org.nz/images/images/000/001/098/embed/Neck-X-ray20160518-20305-d802q3.jpg?1674165476" // Example image URL
          alt="Example Image"
          width={imageWidth}
          height={imageHeight}
        />
        {modelInference.map((item: ModelInferenceItem, index: number) => (
          <div
            key={index}
            style={{
              width: (item.x_max - item.x_min) * imageWidth,
              height: (item.y_max - item.y_min) * imageHeight,
              left: item.x_min * imageWidth,
              top: item.y_min * imageHeight,
            }}
            onMouseEnter={() => onMouseEnter(item.label)}
            onMouseLeave={onMouseLeave}
            className={`square ${activeLabel === item.label ? 'active' : ''}`}
          >
            {item.label}
          </div>
        ))}
      </div>
    </>
  );
};
