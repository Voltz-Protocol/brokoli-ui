import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { colors } from '../../../foundation/Colors';
import { LAYER_INDEXES } from '../../../foundation/LayerIndexes';
import { primaryBodyMediumRegularCSSObject } from '../../Typography/Typography.css';

export const NavLinkButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive' && prop !== 'isPopoverOpen',
})<{
  isPopoverOpen: boolean;
  isActive: boolean;
}>`
  ${css(primaryBodyMediumRegularCSSObject)};
  padding: 6px 12px;
  color: ${({ isPopoverOpen, isActive }) =>
    isPopoverOpen || isActive ? colors.lavenderWeb : colors.lavenderWeb3};
  text-decoration: none;
  text-transform: none;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;

  transition: color 200ms ease-in;

  &:hover {
    color: ${colors.lavenderWeb};
  }
`;

export const NAV_LINK_POPOVER_CONTAINER_CLASS_NAME = 'react-tiny-popover-container';
export const globalReactTinyPopoverContainerCSS = css`
  .${NAV_LINK_POPOVER_CONTAINER_CLASS_NAME} {
    background: ${colors.liberty7};

    border: 1px solid ${colors.lavenderWeb7};
    box-shadow: 0px 0px 20px rgba(225, 221, 247, 0.1);
    border-radius: 4px;
    min-width: 160px;
    z-index: ${LAYER_INDEXES.POPOVER};
  }
`;
