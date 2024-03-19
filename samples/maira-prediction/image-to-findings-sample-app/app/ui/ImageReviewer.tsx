import React, { useState } from 'react';
import Image from 'next/image';
import { ModelInferenceType, ModelInferenceItem } from '@/app/page';

type REAL_INFERENCES = {
  boxes: ModelInferenceItem[];
  text: string;
};

export type REPORT = {
  imageId: string;
  inference: {
    result: REAL_INFERENCES[];
  };
  indication: string;
};

export const ImageReviewer = ({
  report,
  onMouseEnter,
  onMouseLeave,
  activeLabel,
}: {
  report: REPORT | null;
  onMouseEnter: (arg: string) => void;
  onMouseLeave: () => void;
  activeLabel: string | null;
}) => {
  // Calculate the dimensions and position of the square
  const imageWidth = 500; // Example width of the image
  const imageHeight = 500; // Example height of the image

  return (
    <>
      <div className="w-500 h-500 relative">
        <Image
          src="https://static.sciencelearn.org.nz/images/images/000/001/098/embed/Neck-X-ray20160518-20305-d802q3.jpg?1674165476" // Example image URL
          alt="Example Image"
          width={imageWidth}
          height={imageHeight}
        />
        {report?.inference.result.map(
          (item: REAL_INFERENCES, index: number) => {
            console.log('item', item);
            const { boxes, text } = item;
            console.log('boxes', boxes);
            const { x_max, x_min, y_max, y_min } = boxes[0];
            return (
              <div
                key={index}
                style={{
                  left: `${x_min * 100}%`,
                  top: `${y_min * 100}%`,
                }}
                onMouseEnter={() => onMouseEnter(text)}
                onMouseLeave={onMouseLeave}
                className={`absolute cursor-pointer ${activeLabel === text ? 'active' : ''}`}
              >
                <div
                  className="rounded-md border border-gray-400
                  bg-zinc-700
                  p-1
                  text-white "
                >
                  {index + 1}
                </div>
                {activeLabel === text && (
                  <div
                    className="square relative bg-transparent p-2 text-white"
                    style={{
                      width: (x_max - x_min) * imageWidth,
                      height: (y_max - y_min) * imageHeight,
                    }}
                  />
                )}
              </div>
            );
          },
        )}
      </div>
    </>
  );
};
