'use client';
import { useState } from 'react';
import { Button, Card, Input } from '@fluentui/react-components';
import { ImageReviewer } from '@/app/ui/ImageReviewer';
import { usePageLayoutStyles } from '@/app/ui/payLayoutStyle';
import { RESPONSE_PAYLOAD } from '@/app/mockData/data';
import { REPORT } from '@/app/ui/ImageReviewer';

export default function Page() {
  const pageLayoutStyles = usePageLayoutStyles();

  const [activeLabel, setActiveLabel] = useState<string | null>(null); // State to track active label
  const [report, setReport] = useState<REPORT | null>(null); // State to store the generated reports

  const handleMouseEnter = (label: string) => {
    console.log('enter ---->', label);
    setActiveLabel(label);
  };

  const handleMouseLeave = () => {
    setActiveLabel(null);
    console.log('leave ---->');
  };

  const handleFetchData = () => {
    setReport(RESPONSE_PAYLOAD);
  };

  return (
    <Card className={pageLayoutStyles.card}>
      <h1>Generate Report</h1>
      <div className="flex flex-row">
        <div className="flex flex-1 flex-col">
          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <ImageReviewer
              report={report}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              activeLabel={activeLabel}
            />
          </div>
          <Input
            placeholder="Enter your model endpoint"
            defaultValue="https://localhost:3000/api/generateReport"
          />
          <Button onClick={handleFetchData}>Click to generate report</Button>
        </div>
        <div className="flex-1">
          Predictions
          <ul>
            {report?.inference.result.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`list-item ${activeLabel === item.text ? 'active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(item.text)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="flex items-center">
                    <span className="text-grey-800 mr-2 flex h-[18px] w-[18px] items-center rounded-md border border-gray-400 p-1">
                      {index + 1}
                    </span>
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Card>
  );
}
