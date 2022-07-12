import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
