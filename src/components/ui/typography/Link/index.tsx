import { Text, TextProps } from '@mantine/core';
import React from 'react';

type Props = TextProps & {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export function Link(props: Props) {
  const { href, target, ...rest } = props;
  return (
    <Text
      component="a"
      span
      href={href}
      target={target}
      color="brand.5"
      sx={(theme) => ({
        '&:hover': {
          color: theme.colors.brand[6],
          textDecoration: 'underline',
        },
      })}
      {...rest}
    >
      {props.children}
    </Text>
  );
}
