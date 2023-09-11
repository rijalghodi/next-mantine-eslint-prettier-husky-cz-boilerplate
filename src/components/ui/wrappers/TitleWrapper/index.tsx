import {
  Box,
  BoxProps,
  MantineSize,
  Title,
  TitleOrder,
  TitleProps,
} from '@mantine/core';
import React from 'react';

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
  titleOrder: TitleOrder;
  titleAlign?: 'center' | 'left' | 'right';
  titleMb?: MantineSize;
  titleProps?: TitleProps;
  rootProps?: BoxProps;
};

export function TitleWrapper(props: Props) {
  return (
    <Box {...props.rootProps}>
      <Title
        order={props.titleOrder}
        mb={props.titleMb ?? 'sm'}
        className={`heading${props.titleOrder + 2}`}
        {...props.titleProps}
        align={props.titleAlign ?? 'center'}
      >
        {props.title}
      </Title>
      {props.children}
    </Box>
  );
}
