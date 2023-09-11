import {
  ColSpan,
  Grid,
  MantineNumberSize,
  Stack,
  Text,
  TextProps,
} from '@mantine/core';
import React from 'react';

import { KeyValuePairsSkeleton } from '@/components/ui';

import { capitalizeFirstLetter } from '@/utils';

export type TKeyValue = {
  key: string;
  value?: string | number | JSX.Element;
  valueTextTransform?:
    | 'uppercase'
    | 'capitalize'
    | 'lowercase'
    | 'capitalize-first';
};

type TProps = {
  fetching?: boolean;
  keySpan?: ColSpan | undefined;
  horizontalSpacing?: MantineNumberSize;
  verticalSpacing?: MantineNumberSize;
  justify?: 'each-left' | 'tight' | 'apart' | 'each-left' | 'each-right';
  data: TKeyValue[];
  keyTextProps?: TextProps;
  valueTextProps?: TextProps;
};
export function KeyValuePairs(props: TProps) {
  if (props.fetching) {
    return <KeyValuePairsSkeleton />;
  }

  const Value = ({ value, valueTextTransform }) => {
    return (
      <Text
        className="bodySm"
        c="dark.6"
        {...props.valueTextProps}
        align={props.justify === 'each-right' ? 'right' : 'left'}
        tt={
          valueTextTransform === 'capitalize-first'
            ? 'initial'
            : valueTextTransform
        }
      >
        {valueTextTransform === 'capitalize-first' && typeof value === 'string'
          ? capitalizeFirstLetter(value ? value : '-')
          : value
          ? value
          : '-'}
      </Text>
    );
  };

  return (
    <Stack spacing={props.verticalSpacing ?? 6}>
      {props.data.map((v, index) => {
        if (props.justify === 'tight') {
          return (
            <Text key={index} className="bodySm">
              <Text span fw={300} c="dark.4" {...props.keyTextProps}>
                {v.key}
              </Text>{' '}
              :{' '}
              <Value
                value={v.value}
                valueTextTransform={v.valueTextTransform}
              />
            </Text>
          );
        }
        return (
          <Grid gutter={props.horizontalSpacing} key={index} w="100%">
            <Grid.Col span={props.keySpan ?? 4}>
              <Text
                className="bodySm"
                fw={300}
                c="dark.4"
                {...props.keyTextProps}
                align={
                  props.justify === 'each-right' || props.justify === 'apart'
                    ? 'right'
                    : 'left'
                }
              >
                {v.key}
              </Text>
            </Grid.Col>
            <Grid.Col span="auto">
              <Value
                value={v.value}
                valueTextTransform={v.valueTextTransform}
              />
            </Grid.Col>
          </Grid>
        );
      })}
    </Stack>
  );
}
