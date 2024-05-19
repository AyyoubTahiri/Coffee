import { memo, SVGProps } from 'react';
import React from 'react';

const ImageIcon = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_53_878)'>
      <path d='M18 7H11V0H7V7H0V11H7V18H11V11H18V7Z' fill='#666666' />
    </g>
    <defs>
      <clipPath id='clip0_53_878'>
        <rect width={18} height={18} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
