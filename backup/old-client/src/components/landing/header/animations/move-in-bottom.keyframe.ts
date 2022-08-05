import { keyframes } from '@emotion/react';

export const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
