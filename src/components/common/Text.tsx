import React from "react";
import styled, {css} from 'styled-components';
import {colors, ColorType} from "@/consts/colors";
import {fontLineHeight, fontSizes, SizeType} from "@/consts/sizes";
import {weights, WeightType} from "@/consts/weights";

export interface TextProps {
  color?: ColorType;
  weight?: WeightType;
  size?: SizeType;
  decoration?: 'none' | 'overline' | 'underline' | 'line-through ';
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
}

const TextStyle = css<TextProps>`
  margin: 0;
  font-family: Montserrat, sans-serif;
  color: ${({ color }) => colors[color || 'blue-4']};
  font-weight: ${({ weight }) => weights[weight || 'normal']};
  font-size: ${({ size }) => fontSizes[size || 'base']};
  line-height: ${({ size }) => fontLineHeight[size || 'base']};
  text-transform: ${({ transform }) => transform || 'none'};
  text-decoration: ${({ decoration }) => decoration || 'none'};
`;
const H1 = styled.h1`${TextStyle}`;
const H2 = styled.h2`${TextStyle}`;
const H3 = styled.h3`${TextStyle}`;
const H4 = styled.h4`${TextStyle}`;
const H5 = styled.h5`${TextStyle}`;
const H6 = styled.h6`${TextStyle}`;
const P = styled.p`${TextStyle}`;
const componentDictionary = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
}
export const Text: React.FC<TextProps> = ({
  component = 'p',
  children,
  ...rest
}) => {
  const Component = componentDictionary[component];

  return (
    <Component {...rest}>
      {children}
    </Component>
  );
}
