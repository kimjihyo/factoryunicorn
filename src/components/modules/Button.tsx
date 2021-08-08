import styled from "styled-components";
import * as colors from "../../constants/colors";

type ButtonProps = {
  backgroundColor?: string;
  textColor?: string;
  paddingVertical?: number;
  paddingHorizonal?: number;
  boxShadow?: boolean;
  fontSize?: number;
  fontFamily?: string;
};

const Button = styled.a<ButtonProps>`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "Medium")};
  text-decoration: none;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : "18px")};
  border-radius: 5px;
  letter-spacing: 0px;
  padding-left: ${(props) =>
    props.paddingHorizonal ? `${props.paddingHorizonal}em` : "2em"};
  padding-right: ${(props) =>
    props.paddingHorizonal ? `${props.paddingHorizonal}em` : "2em"};
  padding-top: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}em` : "0.8em"};
  padding-bottom: ${(props) =>
    props.paddingVertical ? `${props.paddingVertical}em` : "0.8em"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.PRIMIARY};
  color: ${(props) => (props.textColor ? props.textColor : colors.WHITE)};
  box-shadow: ${(props) =>
    props.boxShadow ? "rgb(0 0 0 / 20%) 0px 2px 5px 1px;" : null};
`;

export default Button;
