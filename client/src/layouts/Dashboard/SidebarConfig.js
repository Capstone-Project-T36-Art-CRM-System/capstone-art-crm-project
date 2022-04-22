// Iconify
import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import colorPaletteFill from '@iconify/icons-eva/color-palette-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import listFill from '@iconify/icons-eva/list-fill';
import checkmarkSquare2Fill from '@iconify/icons-eva/checkmark-square-2-fill';
import calendarFill from '@iconify/icons-eva/calendar-fill';

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'customers',
    path: '/dashboard/customer/list',
    icon: getIcon(peopleFill)
  },
  {
    title: 'events',
    path: '/dashboard/event/list',
    icon: getIcon(listFill),
  },
  {
    title: 'calendar',
    path: '/dashboard/calendar',
    icon: getIcon(calendarFill)
  },
  // {
  //   title: 'tasks',
  //   path: '/dashboard/tasks',
  //   icon: getIcon(checkmarkSquare2Fill),
  //   disabled: true
  // },
  {
    title: 'company',
    path: '/dashboard/company',
    icon: getIcon(homeFill),
  },
  {
    title: 'artworks',
    path: '/dashboard/artwork/list',
    icon: getIcon(colorPaletteFill)
  }
];

export default sidebarConfig;