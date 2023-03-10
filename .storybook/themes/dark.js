import { create } from '@storybook/theming';
import { colors } from '../../src/foundation/Colors/colors';

export default create({
  base: 'dark',
  colorPrimary: colors.wildStrawberry,
  colorSecondary: colors.wildStrawberry2,

  // UI
  appBg: colors.liberty6,
  appContentBg: colors.liberty7,
  appBorderColor: colors.lavenderWeb6,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: colors.lavenderWeb,
  textInverseColor: colors.lavenderWeb8,

  // Toolbar default and active colors
  barTextColor: colors.lavenderWeb,
  barSelectedColor: colors.wildStrawberry,
  barBg: colors.liberty6,

  // Form colors
  inputBg: colors.liberty5,
  inputBorder: colors.lavenderWeb6,
  inputTextColor: colors.lavenderWeb,
  inputBorderRadius: 4,

  brandTitle: 'brokoli-ui',
  brandUrl: 'https://github.com/Voltz-Protocol/brokoli-ui',
  brandImage: 'https://cdn.discordapp.com/emojis/938848589499732058.webp?size=128&quality=lossless',
  brandTarget: '_self',
});
