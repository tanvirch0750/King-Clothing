import styled from 'styled-components';
import { BaseButton, GoogleSignInButton } from '../button/Button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }

  /* ${BaseButton},
  ${GoogleSignInButton}{
    margin-top: auto
  } */
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;

  // style specipicly child component of cart dropdown container
  /* ${CartDropdownContainer}{
      position: relative;
    } */
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
