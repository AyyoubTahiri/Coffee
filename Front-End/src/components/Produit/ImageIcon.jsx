import React from 'react';
import { memo, SVGProps } from 'react';

const ImageIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.5 4.25L6 8.75L10.5 4.25'
      stroke='#343A40'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
