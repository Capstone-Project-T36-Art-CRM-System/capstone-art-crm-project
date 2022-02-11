import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import colorPaletteFill from '@iconify/icons-eva/color-palette-fill';
import homeFill from '@iconify/icons-eva/home-fill';
import listFill from '@iconify/icons-eva/list-fill';
import trendingUpFill from '@iconify/icons-eva/trending-up-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import briefcaseFill from '@iconify/icons-eva/briefcase-fill';
import checkmarkSquare2Fill from '@iconify/icons-eva/checkmark-square-2-fill';
import calendarFill from '@iconify/icons-eva/calendar-fill';
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'clients',
    path: '/dashboard/clients',
    icon: getIcon(peopleFill)
  },
  {
    title: 'classes',
    path: '/dashboard/classes',
    icon: getIcon(listFill)
  },
  {
    title: 'schedule',
    path: '/dashboard/schedule',
    icon: getIcon(calendarFill)
  },
  {
    title: 'tasks',
    path: '/dashboard/tasks',
    icon: getIcon(checkmarkSquare2Fill)
  },
  {
    title: 'company',
    path: '/dashboard/company',
    icon: getIcon(homeFill)
  },
  {
    title: 'salaries',
    path: '/dashboard/salaries',
    icon: getIcon(briefcaseFill)
  },
  {
    title: 'finances',
    path: '/dashboard/finances',
    icon: getIcon(trendingUpFill)
  },
  {
    title: 'warehouse',
    path: '/dashboard/warehouse',
    icon: getIcon(colorPaletteFill)
  }
];

export default sidebarConfig;