import React, { FunctionComponent, useEffect, useState } from 'react';

import { RainbowLoader } from '../RainbowLoader';
import { TypographyToken } from '../Typography';
import {
  AddressTypography,
  AvatarAddressBox,
  AvatarAddressImg,
  RainbowLoaderBox,
} from './AvatarAddress.styled';
import { formatEthereumAddress } from './helpers/formatEthereumAddress';
import { getENSDetails } from './helpers/getENSDetails';
import { MetaMaskAvatar } from './MetaMaskAvatar/MetaMaskAvatar';

export const AvatarAddress: FunctionComponent<{
  address?: string | null;
  avatarSize: 'small' | 'medium';
  typographyToken: TypographyToken;
}> = ({ typographyToken, avatarSize, address }) => {
  const [name, setName] = useState(address);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const fetchENSDetails = async (addr: string) => {
    setLoading(true);
    const details = await getENSDetails(addr);
    setName(details?.name || addr);
    setAvatarUrl(details?.avatarUrl || '');
    setLoading(false);
  };

  useEffect(() => {
    if (!address) {
      setLoading(false);
      return;
    }
    void fetchENSDetails(address);
  }, [address]);

  if (!name) {
    return null;
  }
  const formattedName = formatEthereumAddress(name);

  return (
    <AvatarAddressBox data-testid="AvatarAddress">
      {loading ? (
        <RainbowLoaderBox>
          <RainbowLoader height={3} />
        </RainbowLoaderBox>
      ) : (
        <>
          {!avatarUrl ? (
            <MetaMaskAvatar address={address || ''} variant={avatarSize} />
          ) : (
            <AvatarAddressImg
              alt="avatar"
              size={avatarSize === 'medium' ? 24 : 16}
              src={avatarUrl}
            />
          )}
          <AddressTypography
            colorToken="lavenderWeb"
            data-testid="AvatarAddress-AddressTypography"
            typographyToken={typographyToken}
          >
            {formattedName}
          </AddressTypography>
        </>
      )}
    </AvatarAddressBox>
  );
};
