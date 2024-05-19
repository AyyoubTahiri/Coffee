import { memo, SVGProps } from 'react';
import React from 'react';

const SvgIcon5 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_53_858)'>
      <path
        d='M6 14H12C13.6562 14 15 12.6562 15 11H16C18.2062 11 20 9.20625 20 7C20 4.79375 18.2062 3 16 3H3.75C3.33438 3 3 3.33437 3 3.75V11C3 12.6562 4.34375 14 6 14ZM16 5C17.1031 5 18 5.89688 18 7C18 8.10312 17.1031 9 16 9H15V5H16ZM17.4906 17H1.50938C0.0218753 17 -0.396875 15 0.384375 15H18.6125C19.3937 15 18.9813 17 17.4906 17Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_53_858'>
        <rect width={20} height={20} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(SvgIcon5);
export { Memo as SvgIcon5 };
