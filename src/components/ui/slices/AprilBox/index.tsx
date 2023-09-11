import { Accordion, Box, ScrollArea, Text, Title } from '@mantine/core';
import React from 'react';

import {
  DefaultTable,
  IDefaultTableProps,
  KeyValue,
  KeyValuePairs,
} from '../../displays';
type Props<T> = {
  value: string;
  controlLabel?: string;
  panelMaxHeight?: number;
  hideIcon?: boolean;
  alwaysOpen?: boolean;
  type: 'text' | 'key-value-pairs' | 'table' | 'custom';
} & (
  | {
      type: 'text';
      text?: string;
    }
  | {
      type: 'key-value-pairs';
      keyValueData: KeyValue[];
    }
  | {
      type: 'table';
      tableProps: IDefaultTableProps<T>;
    }
  | {
      type: 'custom';
      children: React.ReactNode;
    }
);

export function AprilBox<T>(props: Props<T>) {
  return (
    <Accordion
      variant="contained"
      chevronSize="md"
      radius="md"
      value={props.alwaysOpen ? props.value : undefined}
      classNames={{
        control: 'bodySm',
        panel: 'bodySm',
      }}
      styles={(theme) => ({
        chevron: {
          display: props.hideIcon ? 'none' : 'block',
        },
        label: {
          padding: '0px !important',
        },
        item: {
          borderRadius: 16,
        },

        control: {
          padding: 12,
          paddingLeft: 16,
          paddingRight: 16,
          cursor: props.alwaysOpen ? 'auto' : 'pointer',
        },

        panel: {
          borderTop: `0.8px solid ${theme.colors.gray[4]}`,
        },
        content: {
          padding: 16,
        },
      })}
    >
      <Accordion.Item value={props.value}>
        <Accordion.Control>
          <Title order={2} className="heading6">
            {props.controlLabel}
          </Title>
        </Accordion.Control>
        <Accordion.Panel>
          <Box>
            {props.type === 'custom' && props.children}
            {props.type === 'table' && (
              <div>
                <DefaultTable {...props.tableProps} skeletonRowNumber={3} />
              </div>
            )}
            {props.type !== 'table' && (
              <ScrollArea.Autosize mah={props.panelMaxHeight}>
                {props.type === 'key-value-pairs' && (
                  <KeyValuePairs
                    data={props.keyValueData}
                    keySpan={6}
                    horizontalSpacing={1}
                    verticalSpacing={8}
                    valueTextProps={{ c: '#2C2E33 !important' }}
                  />
                )}

                {props.type === 'text' && <Text>{props.text ?? '-'}</Text>}
              </ScrollArea.Autosize>
            )}
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
