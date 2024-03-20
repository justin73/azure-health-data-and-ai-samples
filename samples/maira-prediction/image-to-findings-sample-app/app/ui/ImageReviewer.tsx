import React from 'react';
import {useState, ChangeEvent} from 'react'
import { ModelInferenceItem } from '@/app/page';

import CornerstoneElement from './imageViewer/imageViewer';

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

  const stack = {
    imageIds: [
      'https://cs3d-jpg-example.s3.us-east-2.amazonaws.com/a_vm1460.png',
    ],
    currentImageIdIndex: 0,
  };

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [imageId, setImageId] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImageId(fileReader.result as string);
        console.log('fileReader.result ---->', fileReader.result)
      };
      fileReader.readAsDataURL(file);


    }
  };

  return (
    <>
      <div className="relative h-[500px] w-[500px]">
        {/* <input type="file" accept=".png,.jpg" onChange={handleFileChange} /> */}
        {/* {uploadedFile && imageId && (
          <CornerstoneElement stack={{...stack, imageIds: [imageId]}}  imageId={imageId}/>
        )} */}
        <CornerstoneElement stack={{ ...stack}}  />

        {/* <Image
          src="https://static.sciencelearn.org.nz/images/images/000/001/098/embed/Neck-X-ray20160518-20305-d802q3.jpg?1674165476" // Example image URL
          alt="Example Image"
          width={imageWidth}
          height={imageHeight}
          className="h-full w-full object-cover"
        /> */}
        {report?.inference.result.map(
          ({ boxes, text }: REAL_INFERENCES, index: number) => {
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
                className={`absolute cursor-pointer ${activeLabel === text ? 'active' : ''} `}
              >
                <div
                  className="flex h-[18px] w-[18px]
                  items-center
                  rounded-md
                  border border-gray-400 bg-zinc-700 p-1 text-white"
                >
                  <span>{index + 1}</span>
                </div>
                {activeLabel === text && (
                  <div
                    className="absolute border-2 border-indigo-300 bg-transparent p-2 text-white"
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

        {/* <input type="file" accept=".png,.jpg" onChange={handleFileChange} />
        {imageSrc && (
          <div>
            <h2>Uploaded Image</h2>
            <img src={imageSrc} alt="Uploaded" onLoad={handleImageLoad} />
            <div id="imageViewer" style={{ width: '100%', height: '500px' }} />
          </div>
        )} */}
      </div>
    </>
  );
};
