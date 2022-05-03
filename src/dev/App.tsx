import React, { useState } from 'react';

import { RatingInput } from '../lib/RatingInput';

import { ItemStyle } from '../lib/types';

import '../lib/index.css';

const Face = (
  <>
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z" />
    <circle cx="8.5" cy="12.5" r="1.5" />
    <circle cx="15.5" cy="12.5" r="1.5" />
  </>
);

const Star = <polygon points="100,10 40,198 190,78 10,78 160,198" />;

const SmilingFace = (
  <path
    d="M3.445,6.322c0-3.423,2.777-6.201,6.201-6.201c3.423,0,6.2,2.777,6.2,6.201c0,3.426-2.777,6.203-6.2,6.203
  C6.222,12.524,3.445,9.748,3.445,6.322z M31.562,6.322c0-3.423,2.78-6.201,6.203-6.201s6.201,2.777,6.201,6.201
  c0,3.426-2.777,6.203-6.201,6.203C34.343,12.524,31.562,9.748,31.562,6.322z M46.223,31.72
  C42.38,40.607,33.38,46.349,23.294,46.349c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.53,0.089-3.286,1.62-3.922
  c0.376-0.155,0.766-0.229,1.15-0.229c1.176,0,2.292,0.696,2.771,1.851c2.777,6.685,9.655,11.004,17.523,11.004
  c7.69,0,14.528-4.322,17.421-11.012c0.658-1.521,2.424-2.222,3.943-1.562C46.181,28.433,46.881,30.199,46.223,31.72z"
  />
);

const Heart = (
  <path
    d="M433.5,67c-25.3-25.3-59-39.3-94.8-39.3s-69.6,14-94.9,39.4l-7.3,7.3l-7.5-7.5
  c-25.4-25.4-59.1-39.4-95-39.4c-35.8,0-69.4,13.9-94.7,39.3C13.9,92.2,0,125.9,0,161.7s14,69.5,39.4,94.8l182.7,182.7
  c3.8,3.8,9,6,14.5,6c5.4,0,10.6-2.2,14.5-6l182.2-182.4c25.4-25.4,39.3-59.1,39.4-94.9S458.8,92.4,433.5,67z M132.5,117.2
  c-23.9,0-43.4,19.5-43.4,43.4c0,11-8.9,19.9-19.9,19.9s-19.9-8.9-19.9-19.9c0-45.8,37.3-83.1,83.1-83.1c11,0,19.9,8.9,19.9,19.9
  C152.4,108.4,143.5,117.2,132.5,117.2z"
  />
);

const Mail = (
  <path d="M935.9 359.9c-5.2999999999999545-55.299999999999955-19.5-102.5-42.299999999999955-141.59999999999997-22.899999999999977-39-51.89999999999998-70.5-87-94.4s-75-40.400000000000006-119.70000000000005-49.400000000000006-91.5-11.200000000000003-140.39999999999998-6.5c-91.39999999999998 8.799999999999997-168.89999999999998 31.299999999999997-232.7 67.6-63.70000000000002 36.30000000000001-114.9 80.20000000000002-153.5 131.6-38.60000000000001 51.400000000000034-65.50000000000001 107.5-80.80000000000001 168-15.299999999999997 60.60000000000002-20.200000000000003 119.50000000000006-14.700000000000003 176.8 5.900000000000006 61.200000000000045 20.60000000000001 113 44.2 155.5 23.599999999999994 42.60000000000002 53.5 76.89999999999998 89.80000000000001 102.89999999999998 36.29999999999998 26.100000000000023 77.30000000000001 44.10000000000002 123.09999999999997 54 45.80000000000001 9.899999999999977 93.40000000000003 12.5 143 7.7000000000000455 20.600000000000023-2 41.30000000000001-4.800000000000068 62-8.399999999999977 20.700000000000045-3.6000000000000227 40.30000000000007-7.800000000000068 58.700000000000045-12.5 18.399999999999977-4.7000000000000455 35.39999999999998-10.200000000000045 51-16.600000000000023 15.600000000000023-6.399999999999977 29-13 40-19.899999999999977-5.300000000000068-14.400000000000091-11.200000000000045-29-17.800000000000068-43.60000000000002-6.599999999999909-14.600000000000023-13.5-28.800000000000068-20.59999999999991-42.39999999999998-22.300000000000068 11.199999999999932-47.40000000000009 20.299999999999955-75.30000000000007 27.199999999999932-27.899999999999977 6.899999999999977-58.599999999999966 12-92.09999999999997 15.200000000000045-36 3.5-70.40000000000003 1.8999999999999773-103.19999999999999-4.7000000000000455s-62.10000000000002-19.199999999999932-87.90000000000003-37.799999999999955c-25.799999999999983-18.600000000000023-47.19999999999999-43.700000000000045-64.19999999999999-75.20000000000005s-27.69999999999999-70.39999999999998-32.19999999999999-116.69999999999993c-5.100000000000023-50.700000000000045-1-100.70000000000005 12.199999999999989-149.70000000000005 13.199999999999989-49 34.900000000000006-93.30000000000001 65.19999999999999-132.89999999999998 30.30000000000001-39.60000000000002 69-72.50000000000003 116.19999999999999-98.80000000000001 47.200000000000045-26.30000000000001 102.30000000000001-42.5 165.39999999999998-48.5 81.70000000000005-7.800000000000011 147 5.699999999999989 195.80000000000007 40.599999999999994 48.799999999999955 34.900000000000006 76.79999999999995 89.4 83.89999999999998 163.4 2.5 26.399999999999977 1.8999999999999773 53.599999999999966-1.8999999999999773 81.5-3.800000000000068 28-10.899999999999977 53.80000000000001-21.300000000000068 77.49999999999994-10.399999999999977 23.700000000000045-24.299999999999955 43.60000000000002-41.5 59.5-17.299999999999955 16-37.89999999999998 25.100000000000023-61.69999999999993 27.40000000000009-14.800000000000068 1.3999999999999773-25.700000000000045-0.10000000000002274-32.60000000000002-4.7000000000000455l30.399999999999977-333.2c-25.299999999999955-6.699999999999989-52.19999999999993-10.699999999999989-80.60000000000002-12.199999999999989-28.399999999999977-1.5-57.09999999999991-0.9000000000000341-86 1.8999999999999773-37.99999999999994 3.6000000000000227-72.79999999999995 14.5-104.49999999999994 32.39999999999998-31.80000000000001 18-58.900000000000034 41.400000000000034-81.40000000000003 70.20000000000005-22.599999999999966 28.799999999999955-39.39999999999998 62.099999999999966-50.299999999999955 99.79999999999995-11 37.80000000000001-14.400000000000034 78.5-10.200000000000045 122.30000000000007 2.7000000000000455 27.699999999999932 9 51.09999999999991 18.900000000000034 70.29999999999995 9.899999999999977 19.200000000000045 22.30000000000001 34.700000000000045 37.099999999999966 46.60000000000002 14.800000000000011 11.899999999999977 31.5 20 50.10000000000002 24.399999999999977 18.600000000000023 4.399999999999977 38.19999999999999 5.600000000000023 58.80000000000001 3.6000000000000227 32.19999999999999-3.1000000000000227 58.599999999999966-9.300000000000068 79.09999999999997-18.800000000000068 20.5-9.399999999999977 40-19.899999999999977 58.39999999999998-31.399999999999977 26.800000000000068 22.100000000000023 63.700000000000045 30.899999999999977 110.70000000000005 26.399999999999977 41.10000000000002-4.599999999999909 77.70000000000005-18.199999999999932 109.60000000000002-40.69999999999993 31.899999999999977-22.600000000000023 58.299999999999955-50.39999999999998 79.19999999999993-83.60000000000002 20.800000000000068-33.200000000000045 36-69.89999999999998 45.5-110.10000000000002 9-40 11.900000000000091-80.09999999999997 8.100000000000023-120z m-390.4 257.6c-10.600000000000023 4.2999999999999545-20.5 7.7999999999999545-29.700000000000045 10.600000000000023-9.099999999999966 2.7999999999999545-20.199999999999932 4.899999999999977-32.99999999999994 6.100000000000023-20.600000000000023 2-37.80000000000001-2.900000000000091-51.60000000000002-14.5-13.800000000000011-11.700000000000045-22.099999999999966-32-24.899999999999977-60.90000000000009-2.1999999999999886-22.5-1.1999999999999886-44.5 2.8999999999999773-65.99999999999994s11.199999999999989-40.69999999999999 21.30000000000001-57.60000000000002c10.100000000000023-16.899999999999977 22.899999999999977-30.899999999999977 38.30000000000001-42.19999999999999 15.5-11.199999999999989 33.89999999999998-17.899999999999977 55.099999999999966-19.899999999999977 7.100000000000023-0.7000000000000455 13.700000000000045-1 19.899999999999977-0.9000000000000341 6.2000000000000455 0.10000000000002274 12.900000000000091 0.6999999999999886 20.200000000000045 2l-18.5 243.3z" />
);
const values = ['1', '2', '3', '4']; // Ensure only strings are allowed,

const testStyles: ItemStyle = {
  svgChildNodes: Star,
  itemStrokeWidth: 0,
  itemStrokeStyle: 'round',
  activeItemColor: 'white',
  activeItemStrokeColor: '#22C55E',
  activeBoxColor: '#22C55E',
  activeBoxBorderColor: 'red',

  inactiveItemColor: '#DCFCE7', // Has no effect on box half
  inactiveItemStrokeColor: 'fuchsia', // Has no effect

  inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  inactiveBoxBorderColor: '#FFFFFF', // Has no effect
};

const testStylesArr: ItemStyle[] = [
  {
    svgChildNodes: Star,
    activeItemColor: 'white',
    activeItemStrokeColor: 'tomato',
    activeBoxColor: 'tomato',
    inactiveItemColor: '#DCFCE7', // Has no effect on box half
    inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  },
  {
    svgChildNodes: Star,
    activeItemColor: 'white',
    activeItemStrokeColor: 'orange',
    activeBoxColor: 'orange',
    inactiveItemColor: '#DCFCE7', // Has no effect on box half
    inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  },
  {
    svgChildNodes: Star,
    activeItemColor: 'white',
    activeItemStrokeColor: 'gold',
    activeBoxColor: 'gold',
    inactiveItemColor: '#DCFCE7', // Has no effect on box half
    inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  },
  {
    svgChildNodes: Star,
    activeItemColor: 'white',
    activeItemStrokeColor: '#9ACD32',
    activeBoxColor: '#9ACD32',
    inactiveItemColor: '#DCFCE7', // Has no effect on box half
    inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  },
  /*   {
    svgChildNodes: Star,
    activeItemColor: 'white',
    activeItemStrokeColor: '#22C55E',
    activeBoxColor: '#22C55E',
    inactiveItemColor: '#DCFCE7', // Has no effect on box half
    inactiveBoxColor: '#D4D4D4', // Has no effect on svg half
  }, */
];

function App() {
  const [value, setValue] = useState(values[2]);

  return (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          backgroundColor: '#DCFCE7',
          border: '2px solid #4ADE80',
          borderRadius: '10px',
          padding: '20px',
        }}
      >
        <RatingInput
          ratingValue={value}
          ratingValues={values}
          itemStyles={testStylesArr}
          // ariaLabelledBy="id"
          // highlightOnlySelected
          direction="horizontal"
          readOnlyPrecisionFillMode="box"
          containerGap={20}
          boxRadius={0}
          boxBorderWidth={0}
          boxPadding={20}
          breakpoints={{
            230: {
              containerGap: 20,
              boxRadius: 20,
              boxPadding: 20,
            },
            120: {
              containerGap: 20,
              boxRadius: 10,
              boxPadding: 10,
            },
          }}
          onChange={(currentValue: string): void => setValue(currentValue)}
        />
      </div>
    </div>
  );
}

export default App;
