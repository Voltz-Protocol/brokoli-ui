import React from 'react';

import { BaseColorTokens, ColorTokens } from '../../foundation/Colors';
import { TokenTypography } from '../TokenTypography';
import { Typography, TypographyToken } from '../Typography';
import { TypographyWithTooltip } from '../TypographyWithTooltip';
import { LabelTokenTypographyBox } from './LabelTokenTypography.styled';

export type LabelTokenTypographyProps = {
  colorToken: BaseColorTokens;
  value: string | number;
  typographyToken: TypographyToken;
  token: string;
  label: string;
  labelColorToken: ColorTokens;
  labelTypographyToken: TypographyToken;
  tooltip?: string;
  tooltipColorToken?: ColorTokens;
  differenceValue?: number;
};

export const LabelTokenTypography: React.FunctionComponent<LabelTokenTypographyProps> = ({
  label,
  labelTypographyToken,
  labelColorToken,
  token,
  typographyToken,
  value,
  colorToken,
  tooltip,
  tooltipColorToken,
  differenceValue,
}) => (
  <LabelTokenTypographyBox>
    {!tooltip ? (
      <Typography colorToken={labelColorToken} typographyToken={labelTypographyToken}>
        {label}
      </Typography>
    ) : (
      <TypographyWithTooltip
        colorToken={labelColorToken}
        tooltip={tooltip}
        tooltipColorToken={tooltipColorToken}
        typographyToken={labelTypographyToken}
      >
        {label}
      </TypographyWithTooltip>
    )}

    <TokenTypography
      colorToken={colorToken}
      differenceValue={differenceValue}
      token={token}
      typographyToken={typographyToken}
      value={value}
    />
  </LabelTokenTypographyBox>
);
