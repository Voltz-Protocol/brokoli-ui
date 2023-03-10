import { css, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import styled from '@emotion/styled';

import { primaryBodyMediumBoldCSSObject } from '../Typography/Typography.css';
import { primaryButtonCSS, secondaryButtonCSS } from './Button.css';

export type ButtonVariant = 'primary' | 'secondary';
const ButtonVariantMap: Record<ButtonVariant, Interpolation<Theme>> = {
  primary: primaryButtonCSS,
  secondary: secondaryButtonCSS,
};
export const ButtonStyled = styled('button', {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{
  variant: ButtonVariant;
}>`
  ${({ variant }) => ButtonVariantMap[variant]};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  gap: 10px;
  ${css(primaryBodyMediumBoldCSSObject)};
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export const ButtonBox = styled('div')`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  gap: 8px;
`;
