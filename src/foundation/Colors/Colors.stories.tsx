import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { colors } from './colors';

const ColorTile: React.FunctionComponent<{ name: string; value: string }> = ({ name, value }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      color: colors.lavenderWeb
    }}
  >
    <div style={{ width: 55, height: 55, backgroundColor: value, borderRadius: '50%' }} />
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 8,
      gap: 8,
      color: colors.lavenderWeb
    }}>
      <span>{`${name[0].toUpperCase()}${name.substring(1)}`}</span>
      <span>{value.toUpperCase()}</span>
    </div>
  </div>
);

export default {
  title: 'Foundation/Colors',
  component: ColorTile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ColorTile>;

const AllColorsTemplate: ComponentStory<typeof React.Fragment> = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: Array.from({ length: 9 })
        .map((_) => '1fr')
        .join(' '),
      gridAutoFlow: 'column',
      gap: 16,
      zIndex: 1,
    }}
  >
    {Object.keys(colors)
      .sort()
      .map((c) => (
        <ColorTile key={c} name={c} value={colors[c]} />
      ))}
  </div>
);

export const Colors = AllColorsTemplate.bind({});
Colors.args = {};
