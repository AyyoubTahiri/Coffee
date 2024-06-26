import { memo, SVGProps } from 'react';
import React from 'react';

const SvgIcon3 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43656 4.6967 3.03003C6.10322 1.62351 8.01088 0.833334 10 0.833334C11.9891 0.833334 13.8968 1.62351 15.3033 3.03003C16.7098 4.43656 17.5 6.34421 17.5 8.33333Z'
      stroke='#0DA487'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z'
      stroke='#0DA487'
      strokeWidth={1.66667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(SvgIcon3);
export { Memo as SvgIcon3 };
