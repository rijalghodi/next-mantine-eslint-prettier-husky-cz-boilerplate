import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { menus } from '@/data';

import useMenuStyle from './Menu.styles';

import { TMenu } from '@/types/menus';

export function Menu() {
  const router = useRouter();
  const { classes, cx } = useMenuStyle();
  const activeLink = React.useMemo(() => {
    const pathArray = router.pathname.split('/');
    const cleanedPath = `/${pathArray[1]}`;
    const link = menus.find((menu) => menu.link === cleanedPath);
    return link;
  }, [router.pathname]);

  return (
    <nav className={classes.menu}>
      {menus.map((menu: TMenu, i: number) => {
        return (
          <Link
            key={i}
            href={menu.link}
            className={cx(classes.link, {
              [classes.activeLink]: activeLink?.link === menu.link,
            })}
          >
            {menu.title}
          </Link>
        );
      })}
    </nav>
  );
}
