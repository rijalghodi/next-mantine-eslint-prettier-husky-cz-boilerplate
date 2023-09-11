import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  swiper: {
    width: '100%',
    height: '87%',
    borderRadius: 16,
    marginBottom: 16,
    '.swiper-slide': {
      textAlign: 'center',
      fontSize: 18,
      background: '#fff',

      /* Center slide text vertically */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  thumbsContainer: {
    height: '10%',
    marginLeft: '0px !important',
    marginRight: '0px !important',
    display: 'flex',
    width: '60%',
    '.swiper-slide': {
      width: '10%',
      minWidth: 16,
      height: '100%',
      opacity: 0.6,
      cursor: 'pointer',
    },
    '.swiper-slide-thumb-active': {
      opacity: 1,
    },
  },
}));
