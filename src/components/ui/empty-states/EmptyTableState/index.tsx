import { Button, ButtonProps, Stack, Text } from '@mantine/core';
import React from 'react';

import LaptopMan from '~/images/illustrations/laptop-man.svg';

interface IResetButtonProps extends ButtonProps {
  label?: string;
  onClick?: () => void;
}

export interface IEmptyTableStateProps {
  title?: string;
  message?: string;
  resetButtonProps?: IResetButtonProps;
}
export function EmptyTableState(props: IEmptyTableStateProps) {
  return (
    <Stack align="center" spacing="lg" p="sm" pt="0px" pb="lg">
      <LaptopMan />
      <Stack align="center" spacing={6}>
        <Text
          align="center"
          className="heading4"
          sx={(theme) => ({ color: theme.colors.dark[4] })}
        >
          {props.title ?? 'Tidak ada data'}
        </Text>
        <Text className="bodyMd">{props.message}</Text>
        {props.resetButtonProps && (
          <Button radius="md" {...props.resetButtonProps}>
            {props.resetButtonProps.label ?? 'Atur ulang filter'}
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
