import { memo, SVGProps } from 'react';
import React from 'react';

const SvgIcon2 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.3333 2.125H14.875V5.66667'
      stroke='#777777'
      strokeWidth={1.41667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.83333 14.1667L14.875 2.125'
      stroke='#777777'
      strokeWidth={1.41667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.875 11.3333V14.875H11.3333'
      stroke='#777777'
      strokeWidth={1.41667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.625 10.625L14.875 14.875'
      stroke='#777777'
      strokeWidth={1.41667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.83333 2.83333L6.375 6.375'
      stroke='#777777'
      strokeWidth={1.41667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SvgIcon2);
export { Memo as SvgIcon2 };
