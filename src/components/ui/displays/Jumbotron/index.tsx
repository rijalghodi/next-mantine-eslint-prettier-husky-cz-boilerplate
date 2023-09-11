import { Center, Text, Title, TitleOrder } from '@mantine/core';
import React from 'react';

import { useStyles } from './Jumbotron.styles';
import { ResponsiveContainer } from '../../wrappers';

type TProps = {
  text: string | React.ReactNode;
  notTitle?: boolean;
  order?: TitleOrder;
};

export function Jumbotron(props: TProps) {
  const { classes } = useStyles();
  return (
    <Center
      sx={(theme) => ({
        height: 320,
        [theme.fn.largerThan('sm')]: {
          height: 400,
        },
      })}
    >
      <ResponsiveContainer>
        {props.notTitle ? (
          <Text className={classes.jumbotronText}>{props.text}</Text>
        ) : (
          <Title order={props.order ?? 1} className={classes.jumbotronText}>
            {props.text}
          </Title>
        )}
      </ResponsiveContainer>
    </Center>
  );
}
