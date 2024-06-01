import React from 'react';
import { memo, SVGProps } from 'react';

const ImageIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_53_915)'>
      <path
        d='M4.20001 0.5L0.200012 4.5H8.20001L4.20001 0.5ZM4.20001 10.5L0.200012 6.5H8.20001L4.20001 10.5Z'
        fill='#343A40'
      />
    </g>
    <defs>
      <clipPath id='clip0_53_915'>
        <rect width={8} height={10} fill='white' transform='translate(0.200012 0.5)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
