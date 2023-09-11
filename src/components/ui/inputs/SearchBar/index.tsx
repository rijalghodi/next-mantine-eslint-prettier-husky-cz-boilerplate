import { Button, Center, TextInput, TextInputProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

export type TSearchBarProps = TextInputProps & {
  onSearch?: () => void;
};

export function SearchBar(props: TSearchBarProps) {
  const { onSearch, styles, value, ...rest } = props;
  const xSmallScreen = useMediaQuery('(max-width: 576px)');
  return (
    <TextInput
      radius="xl"
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onSearch) {
          onSearch();
        }
      }}
      styles={(theme) => ({
        input: {
          color: theme.colors.dark[5],
        },
        ...styles,
      })}
      iconWidth={xSmallScreen ? 36 : 48}
      icon={
        <Center mx="auto">
          <IconSearch size={xSmallScreen ? 14 : 18} />
        </Center>
      }
      rightSection={
        <Button
          onClick={onSearch}
          size={props.size}
          sx={{
            borderRadius: '0px 100px 100px 0px',
            position: 'absolute',
            right: 0,
          }}
        >
          Cari
        </Button>
      }
      value={value}
      {...rest}
    />
  );
}
