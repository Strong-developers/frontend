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

export const CommonButtonStyle = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: ${Theme.fontWeight.bold};
`;

export const DarkBlackButton = styled(CommonButtonStyle)`
  border: 1px solid ${Theme.colors.darkBlack};
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.darkBlack};
  transition: 0.5s;
  &:hover {
    background-color: ${Theme.colors.white};
    color: ${Theme.colors.darkBlack};
  }
`;

export const BorderDarkBlackButton = styled(CommonButtonStyle)`
  border: 1px solid ${Theme.colors.darkBlack};
  color: ${Theme.colors.darkBlack};
  background-color: ${Theme.colors.white};
  transition: 0.5s;
  &:hover {
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
  }
`;

export const ThemeBorderButton = styled(CommonButtonStyle)`
  border: 1px solid ${Theme.colors.theme};
  color: ${Theme.colors.theme};
  background-color: ${Theme.colors.white};
  transition: 0.5s;
  &:hover {
    background-color: ${Theme.colors.theme};
    color: ${Theme.colors.white};
  }
`;

export const ThemeButton = styled(CommonButtonStyle)`
  border: 1px solid ${Theme.colors.theme};
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.theme};
  transition: 0.5s;
  &:hover {
    background-color: ${Theme.colors.white};
    color: ${Theme.colors.theme};
  }
`;

export const CommonLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-bottom: 3px;
`;

export const GridContainer = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
`;

export const CalendarGridCell = styled.div`
  max-width: 100%;
  display: grid;
  place-items: center;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  color: ${Theme.colors.silverGray};
  font-size: ${Theme.fontSize.default};
`;

export const CommonTextBox = styled.div`
  width: 100%;
  margin: 25px 0;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${Theme.colors.silverGray};
  white-space: pre-wrap;
  overflow: auto;
  text-align: left;
  box-sizing: border-box;
`;

export const CommonTitle = styled.div`
  font-size: ${Theme.fontSize.moreBig};
  font-weight: ${Theme.fontWeight.bold};
`;

export const CommonSubTitle = styled.div`
  font-size: ${Theme.fontSize.littleMoreBig};
  color: ${Theme.colors.silverGray};
`;

export const ChatHeader = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 ${Theme.spacing.default};
  box-sizing: border-box;
  border-bottom: 1px solid ${Theme.colors.littleGray};
  flex-shrink: 0;
`;

export const FormErrorMessage = styled.p`
  color: red;
  width: 100%;
  font-size: ${Theme.fontSize.smaller};
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
