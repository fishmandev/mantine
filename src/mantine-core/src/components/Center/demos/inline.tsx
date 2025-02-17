import React from 'react';
import { ArrowLeftIcon } from '@modulz/radix-icons';
import { Center } from '../Center';
import { Anchor } from '../../Anchor/Anchor';

const code = `
<Anchor href="https://mantine.dev" target="_blank">
  <Center inline>
    <ArrowLeftIcon style={{ marginRight: 5 }} />
    <span>Back to Mantine website</span>
  </Center>
</Anchor>
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <ArrowLeftIcon style={{ marginRight: 5 }} />
        <span>Back to Mantine website</span>
      </Center>
    </Anchor>
  );
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
