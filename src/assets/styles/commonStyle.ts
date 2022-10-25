import styled from "styled-components";

export const CommonInput = styled.input`
  padding: 5px 12px 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;

export const CommonButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
