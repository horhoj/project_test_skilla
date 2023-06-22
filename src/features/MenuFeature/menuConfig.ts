import { getRoutePath } from '~/router';
import { getUUID } from '~/utils/getUUID';
import iconResults from '~/assets/img/menu-feature__icon-results.svg';
import iconOrders from '~/assets/img/menu-feature__icon-orders.svg';
import iconCounterparties from '~/assets/img/menu_featurs__icon-counterparties.svg';
import iconCalls from '~/assets/img/menu_featurs__icon-calls.svg';
import iconMessages from '~/assets/img/menu_featurs__icon-messages.svg';
import iconDocuments from '~/assets/img/menu_featurs__icon-documents.svg';
import iconExecutors from '~/assets/img/menu_featurs__icon-executors.svg';
import iconReports from '~/assets/img/menu_featurs__icon-reports.svg';
import iconKnowledgeBase from '~/assets/img/menu_featurs__icon-knowledge-base.svg';
import iconOptions from '~/assets/img/menu_featurs__icon-options.svg';

interface MenuItemConfig {
  id: string;
  icon: string;
  title: string;
  to: string;
  alt: string;
}

export const menuConfig: MenuItemConfig[] = [
  {
    id: getUUID(),
    title: 'Итоги',
    alt: 'Итоги',
    icon: iconResults,
    to: getRoutePath('resultsPage'),
  },
  {
    id: getUUID(),
    title: 'Заказы',
    alt: 'Заказы',
    icon: iconOrders,
    to: getRoutePath('ordersPage'),
  },
  {
    id: getUUID(),
    title: 'Сообщения',
    alt: 'Сообщения',
    icon: iconMessages,
    to: getRoutePath('messagesPage'),
  },
  {
    id: getUUID(),
    title: 'Звонки',
    alt: 'Звонки',
    icon: iconCalls,
    to: getRoutePath('callsPage'),
  },
  {
    id: getUUID(),
    title: 'Контрагенты',
    alt: 'Контрагенты',
    icon: iconCounterparties,
    to: getRoutePath('counterpartiesPage'),
  },
  {
    id: getUUID(),
    title: 'Документы',
    alt: 'Документы',
    icon: iconDocuments,
    to: getRoutePath('documentsPage'),
  },
  {
    id: getUUID(),
    title: 'Исполнители',
    alt: 'Исполнители',
    icon: iconExecutors,
    to: getRoutePath('executorPage'),
  },
  {
    id: getUUID(),
    title: 'Отчеты',
    alt: 'Отчеты',
    icon: iconReports,
    to: getRoutePath('reportsPage'),
  },
  {
    id: getUUID(),
    title: 'База знаний',
    alt: 'База знаний',
    icon: iconKnowledgeBase,
    to: getRoutePath('knowledgeBasePage'),
  },
  {
    id: getUUID(),
    title: 'Настройки',
    alt: 'Настройки',
    icon: iconOptions,
    to: getRoutePath('optionsPage'),
  },
];
