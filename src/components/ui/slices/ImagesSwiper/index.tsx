import {
  ActionIcon,
  Box,
  BoxProps,
  Flex,
  Image,
  Skeleton,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React from 'react';
// import required modules
import { Controller, FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { useStyles } from './ImagesSwiper.styles';

export type DapobudImage = {
  url?: string;
  alt?: string;
};

type Props = BoxProps & {
  images?: DapobudImage[];
  loading?: boolean;
};

export function ImagesSwiper(props: Props) {
  const { images, loading, ...rest } = props;

  const [swiper, setSwiper] = React.useState<null | any>(null);
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
    null
  );
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const { classes } = useStyles();

  if (loading) {
    return <Skeleton width="75%" sx={{ aspectRatio: '1 / 1' }} radius="md" />;
  }

  return (
    <Box {...rest}>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={0}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        // controller={{ control: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className={classes.swiper}
        onSlideChange={(swiper) => {
          if (swiper.isBeginning) {
            setIsBeginning(true);
            return;
          }
          if (swiper.isEnd) {
            setIsEnd(true);
            return;
          }
          setIsBeginning(false);
          setIsEnd(false);
        }}
      >
        {images && images.length > 0 ? (
          images.map((v, i: number) => (
            <SwiperSlide key={i}>
              <Image
                src={v.url ?? '/images/illustrations/dapobud-image-empty.svg'}
                alt={v.alt ?? `Ilustrasi Dapobud ${i}`}
                radius="md"
                styles={{
                  image: {
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                  },
                }}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <Image
              src="/images/illustrations/dapobud-image-empty.svg"
              alt="gambar data kosong"
              radius={8}
              styles={{
                image: {
                  width: '50%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  backgroundPosition: 'center',
                },
              }}
            />
          </SwiperSlide>
        )}
      </Swiper>

      <Flex
        gap={4}
        wrap="nowrap"
        align="center"
        justify="center"
        sx={{
          height: '10%',
          width: '100%',
        }}
      >
        <ActionIcon
          variant="light"
          radius="xl"
          size="lg"
          disabled={isBeginning}
          onClick={() => {
            swiper.slidePrev();
          }}
          sx={{
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          <IconChevronLeft />
        </ActionIcon>

        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={8}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className={classes.thumbsContainer}
        >
          {images && images.length > 0 ? (
            images.map((v, i) => (
              <SwiperSlide key={i} style={{}}>
                <Image
                  src={
                    v.url ??
                    '/images/illustrations/dapobud-image-empty-thumb.svg'
                  }
                  alt={v.alt ?? `Thumb swiper ${i}`}
                  radius={8}
                  styles={{
                    image: {
                      width: '100%',
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      backgroundPosition: 'center',
                    },
                  }}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <Image
                src="/images/illustrations/dapobud-image-empty-thumb.svg"
                alt="gambar data kosong"
                radius={8}
                styles={{
                  image: {
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                  },
                }}
              />
            </SwiperSlide>
          )}
        </Swiper>

        <ActionIcon
          variant="light"
          radius="xl"
          size="lg"
          disabled={isEnd}
          onClick={() => {
            swiper.slideNext();
          }}
          sx={{
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          <IconChevronRight size={24} />
        </ActionIcon>
      </Flex>
    </Box>
  );
}
