import { Icon } from '@iconify/react';
import { Box, Divider, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import useFooterStyle from './Footer.styles';

import TutWuriLogo from '~/images/logos/logo-tut-wuri.png';

export function Footer() {
  const { classes } = useFooterStyle();

  return (
    <footer className={classes.footerConatiner}>
      <Box className={classes.footer}>
        {/* Footer Non Copyright */}
        <Box className={classes.footerNonCopyrightContainer}>
          {/* Footer Left Content or First Content */}
          <Box className={classes.firstContent}>
            <Box className={classes.footerLogoContent}>
              <Box pos="relative" className={classes.tutWuriLogo}>
                <Image
                  src={TutWuriLogo}
                  alt="Logo Tut Wuri"
                  quality={100}
                  priority
                  placeholder="blur"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
              <Box>
                <Text className="bodyMd">
                  Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
                </Text>
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              className={classes.firstContentDivider}
            />
            <Box className={classes.footerAddressContent}>
              <Box w={{ base: '100%', xs: '90%' }}>
                <Text className="bodyMd" fw={300} color="dark.4" w="100%">
                  Sekretariat Direktorat Jenderal Kebudayaan
                  <br />
                  Direktorat Jenderal Kebudayaan
                  <br />
                  Komplek Kemendikbudristek Gedung E Lt.4
                  <br />
                  Jl. Jenderal Sudirman Senayan Jakarta 10270
                </Text>
              </Box>
            </Box>
          </Box>

          {/* Footer Right Content or Second Content */}
          <Stack className={classes.secondContent}>
            <Stack className={classes.ikutiMediaSosialContainer}>
              <Text className="bodySm" color="#fff !important">
                Ikuti sosial media kami untuk berita terbaru
              </Text>
              <Group spacing="xs">
                <Link
                  href="https://www.youtube.com/c/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:youtube" width="24" color="#fff" />
                </Link>
                <Link
                  href="https://twitter.com/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="mdi:twitter" width="24" color="#fff" />
                </Link>
                <Link
                  href="https://www.instagram.com/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>
                    <Icon icon="mdi:instagram" width="24" color="#fff" />
                  </Text>
                </Link>
                <Link
                  href="https://www.facebook.com/budayasaya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="ic:round-facebook" width="24" color="#fff" />
                </Link>
              </Group>
            </Stack>
            <Stack className={classes.ikutiMediaSosialContainer}>
              <Group spacing="xs">
                <Icon icon="ic:outline-mail" width="24" color="#fff" />
                <Link href="mailto:dapobud@kemdikbud.go.id">
                  <Text className="bodySm" color="#fff !important">
                    dapobud@kemdikbud.go.id
                  </Text>
                </Link>
              </Group>

              <Group spacing="xs">
                <Icon icon="ph:phone-call" width="24" color="#fff" />
                <Link href="tel:0215731063">
                  <Text className="bodySm" color="#fff !important">
                    (021) 573 1063
                  </Text>
                </Link>
              </Group>
            </Stack>
          </Stack>
        </Box>
        <Box className={classes.copyright}>
          <Text
            className="bodySm"
            fw={500}
            color="dark.4"
            component="span"
            align="center"
          >
            © Hak Cipta 2023 - Kementerian Pendidikan, Kebudayaan, Riset, dan
            Teknologi
          </Text>
        </Box>
      </Box>
    </footer>
  );
}
