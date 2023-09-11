import { Box, Button, Center, Image, Stack, Text } from '@mantine/core';
import React from 'react';

export interface TEmptyPageStateProps {
  title?: string;
  message?: string;
  disableGoHome?: boolean;
}
export function EmptyPageState(props: TEmptyPageStateProps) {
  return (
    <Center h="100%">
      <Stack align="center" spacing="lg" p="sm" w="100%">
        <Box
          pos="relative"
          sx={{
            borderRadius: '8px',
            overflow: 'hidden',
            width: '80%',
            maxWidth: 340,
          }}
        >
          <Image
            src="/images/illustrations/laptop-man.svg"
            alt="Ilustrasi halaman kosong"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>

        <Stack align="center" spacing={6}>
          <Text
            className="heading3"
            sx={(theme) => ({ color: theme.colors.dark[4] })}
          >
            {props.title ?? 'Maaf, halaman yang Anda cari tidak ditemukan'}
          </Text>
          <Text className="bodyMd">{props.message}</Text>
          {!props.disableGoHome && (
            <Button radius="md" component="a" href="/">
              Kembali ke beranda
            </Button>
          )}
        </Stack>
      </Stack>
    </Center>
  );
}
