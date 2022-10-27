import styled from "styled-components";
import Theme from "../../util/theme";

export const CommonInput = styled.input`
  padding: 5px 12px 5px 12px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    outline: 1px solid black;
  }
`;

export const CommonButton = styled.button`
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const CommonLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-bottom: 3px;
`;
