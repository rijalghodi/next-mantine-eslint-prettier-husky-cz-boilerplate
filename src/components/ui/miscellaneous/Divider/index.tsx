import { Divider as MantineDivider, DividerProps } from '@mantine/core';
import React from 'react';

type Props = DividerProps;

export function Divider(props: Props) {
  return (
    <MantineDivider color="brand.5" w="50%" mx="auto" my="sm" {...props} />
  );
}
