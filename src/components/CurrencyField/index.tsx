import React from 'react';
import { formatValue } from 'react-currency-input-field';

import { CurrencyInputStyled } from './CurrencyField.styled';

type CurrencyFieldProps = {
  onChange?: (value: string | undefined) => void;
  decimalsLimit?: number;
  maxLength?: number;
  value?: string;
  defaultValue?: number | string;
  disabled?: boolean;
  error?: boolean;
  suffix?: string;
  allowNegativeValue?: boolean;
};

export const CurrencyField: React.FunctionComponent<CurrencyFieldProps> = ({
  onChange,
  decimalsLimit = 2,
  maxLength = 18,
  value,
  defaultValue,
  disabled,
  error,
  suffix,
  allowNegativeValue,
}) => {
  const handleOnChange = (newValue: string | undefined) => {
    if (newValue === value) {
      return;
    }
    onChange && onChange(newValue);
  };

  return (
    <CurrencyInputStyled
      allowNegativeValue={allowNegativeValue}
      decimalsLimit={decimalsLimit}
      defaultValue={
        defaultValue ||
        formatValue({
          value: '0',
          intlConfig: { locale: navigator.language },
        })
      }
      disabled={disabled}
      error={error}
      intlConfig={{ locale: navigator.language }}
      maxLength={maxLength}
      suffix={suffix}
      value={value}
      onValueChange={handleOnChange}
    />
  );
};
