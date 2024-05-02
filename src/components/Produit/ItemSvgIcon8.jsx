import React from 'react';
import { memo, SVGProps } from 'react';

const ItemSvgIcon8 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 1.16667L8.8025 4.81833L12.8333 5.4075L9.91667 8.24833L10.605 12.2617L7 10.3658L3.395 12.2617L4.08333 8.24833L1.16667 5.4075L5.1975 4.81833L7 1.16667Z'
      fill='#FFB321'
      stroke='#FFB321'
      strokeWidth={1.16667}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ItemSvgIcon8);
export { Memo as ItemSvgIcon8 };
