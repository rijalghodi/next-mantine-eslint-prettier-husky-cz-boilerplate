import {
  Box,
  Burger,
  Button,
  Group,
  Header as MantineHeader,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import * as React from 'react';

import useStyles from './Header.styles';
import { Menu } from './Menu';

import DapobudLogo from '~/images/logos/dapobud-logo.png';

export const Header = () => {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <MantineHeader height={80} className={classes.header} zIndex={10}>
      {/* Logo Dapobud */}
      <Box h="55px" w="90px" sx={{ position: 'relative' }}>
        <Image
          src={DapobudLogo}
          alt="Logo Dapobud"
          quality={100}
          priority
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            backgroundPosition: 'center',
          }}
        />
      </Box>

      <Box className={classes.desktopMenuContainer}>
        <Menu />
        <Group spacing="xs">
          <Button
            component="a"
            href={process.env.NEXT_PUBLIC_DAPOBUD_DASHBOARD_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            radius="md"
            variant="light"
            fz={14}
            fw={400}
            color="teal.6"
          >
            Masuk
          </Button>
          <Button
            component="a"
            href={process.env.NEXT_PUBLIC_DAPOBUD_DASHBOARD_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            radius="md"
            variant="filled"
            color="teal.6"
            fz={14}
            fw={400}
          >
            Daftar
          </Button>
        </Group>
      </Box>

      <Box className={classes.mobileMenuContainer}>
        <Burger opened={opened} onClick={toggle} size="sm" />
        <Transition
          mounted={opened}
          transition="pop-top-right"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <Paper style={styles} className={classes.mobileMenuDropdown}>
              <Menu />
            </Paper>
          )}
        </Transition>
      </Box>
    </MantineHeader>
  );
};
