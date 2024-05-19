import { memo, SVGProps } from 'react';
import React from 'react';
const BeforeIcon5 = (props) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M10.6135 2.73504C11.4239 2.73504 12.1076 3.01868 12.6648 3.58595C13.2928 3.46439 13.8803 3.2466 14.4274 2.93257C14.2146 3.58088 13.8094 4.07724 13.2118 4.42165C13.7689 4.36087 14.3007 4.21906 14.8072 3.9962C14.6857 4.17854 14.5514 4.35328 14.4046 4.52042C14.2577 4.68756 14.1007 4.84457 13.9335 4.99145C13.7664 5.13834 13.5916 5.27762 13.4093 5.40931C13.4194 5.53086 13.4245 5.64736 13.4245 5.75878C13.4245 6.35644 13.346 6.95916 13.189 7.56695C13.032 8.17474 12.8041 8.76733 12.5052 9.34473C12.2064 9.92213 11.8265 10.459 11.3656 10.9554C10.9047 11.4517 10.3881 11.8873 9.81576 12.2621C9.24343 12.6369 8.585 12.9307 7.84046 13.1434C7.09592 13.3561 6.30833 13.4625 5.47768 13.4625C3.92783 13.4625 2.49953 13.0573 1.19278 12.2469C1.30421 12.257 1.41311 12.2672 1.51947 12.2773C1.62583 12.2874 1.73979 12.2925 1.86135 12.2925C3.15796 12.2925 4.31276 11.9025 5.32574 11.1225C4.71795 11.1124 4.17601 10.9326 3.69991 10.5831C3.22381 10.2336 2.89459 9.78538 2.71225 9.23837C2.77303 9.2485 2.83128 9.25863 2.88699 9.26876C2.9427 9.27889 3.00095 9.28648 3.06173 9.29155C3.12251 9.29661 3.18329 9.29915 3.24406 9.29915C3.49731 9.29915 3.74042 9.26369 3.97341 9.19278C3.33523 9.07123 2.80342 8.76227 2.37797 8.26591C1.95252 7.76955 1.73979 7.19215 1.73979 6.53371V6.50332C2.13485 6.71605 2.55524 6.82748 3.00095 6.83761C2.74771 6.67553 2.52991 6.48053 2.34758 6.25261C2.16524 6.02469 2.02089 5.76638 1.91453 5.47768C1.80817 5.18898 1.75499 4.89269 1.75499 4.58879C1.75499 4.34568 1.78791 4.10763 1.85375 3.87464C1.91959 3.64166 2.0133 3.42387 2.13485 3.22127C2.83381 4.06205 3.68218 4.73061 4.67996 5.22697C5.67775 5.72333 6.74897 6.0019 7.89364 6.06268C7.84299 5.86008 7.81766 5.65242 7.81766 5.4397C7.81766 4.69009 8.09117 4.05192 8.63818 3.52517C9.18519 2.99842 9.84362 2.73504 10.6135 2.73504ZM10.6135 1.76258C9.67142 1.76258 8.84584 2.06901 8.13675 2.68186C7.42767 3.29471 7.01235 4.05192 6.89079 4.95347C5.25989 4.62931 3.92276 3.84425 2.87939 2.59829C2.68693 2.36531 2.43875 2.24881 2.13485 2.24881L2.05888 2.26401C1.7246 2.28427 1.47135 2.43621 1.29915 2.71985C0.954733 3.29725 0.782526 3.92023 0.782526 4.58879C0.782526 5.02438 0.8585 5.44476 1.01045 5.84995C0.84837 6.04242 0.767332 6.26021 0.767332 6.50332V6.53371C0.767332 7.49604 1.10161 8.33175 1.77018 9.04084C1.74992 9.12187 1.74232 9.20545 1.74739 9.29155C1.75245 9.37765 1.76512 9.46122 1.78538 9.54226C2.00823 10.2007 2.38303 10.7528 2.90978 11.1985C2.73758 11.239 2.56284 11.2694 2.38557 11.2896C2.20829 11.3099 2.03356 11.32 1.86135 11.32C1.65875 11.32 1.47135 11.3099 1.29915 11.2896L1.19278 11.2745C0.980057 11.2745 0.790124 11.3352 0.622982 11.4568C0.455841 11.5783 0.336816 11.7354 0.265907 11.9278C0.194999 12.1406 0.197531 12.3558 0.273504 12.5736C0.349478 12.7914 0.483698 12.956 0.676164 13.0674C2.13485 13.9791 3.73536 14.4349 5.47768 14.4349C6.55144 14.4349 7.56442 14.2754 8.51662 13.9563C9.46882 13.6372 10.2944 13.1991 10.9934 12.642C11.6923 12.0848 12.2976 11.4441 12.8091 10.7198C13.3207 9.99557 13.7107 9.22064 13.9791 8.39506C14.2475 7.56948 14.3868 6.73124 14.397 5.88034C14.8528 5.50554 15.2479 5.07502 15.5821 4.58879C15.6531 4.50776 15.7037 4.41659 15.7341 4.31529C15.7645 4.21399 15.7797 4.10763 15.7797 3.9962C15.7797 3.66192 15.6429 3.39854 15.3694 3.20608C15.3998 3.07439 15.4099 2.94777 15.3998 2.82621C15.3897 2.70465 15.3542 2.58563 15.2934 2.46914C15.2327 2.35264 15.1516 2.25388 15.0503 2.17284C14.868 2.03102 14.6603 1.96011 14.4274 1.96011C14.3868 1.96011 14.3463 1.96265 14.3058 1.96771C14.2653 1.97278 14.2248 1.98037 14.1842 1.9905C14.1437 2.00063 14.1032 2.0133 14.0627 2.02849C14.0222 2.04369 13.9816 2.06141 13.9411 2.08167C13.6271 2.27414 13.2877 2.42102 12.9231 2.52232C12.2343 2.01583 11.4644 1.76258 10.6135 1.76258Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(BeforeIcon5);
export { Memo as BeforeIcon5 };