import styled from '@emotion/styled';
export const FeedbackWrap = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  min-width: 148px;
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px;
  justify-content: center;
  background-color: rgb(230, 193, 154);
  font-size: 24px;
  border-radius: 4px;
  color: inherit;
  outline: none;
  border-bottom-right: 10px solid rgb(51, 58, 184)
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  &:hover {
    color: white;
    background-color: rgb(100, 75, 48);
  }
  &:active {
    
    border-top-left: 10px solid rgb(51, 58, 184)
  }
`;
