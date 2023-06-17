import { FC } from 'react';
import { Page404 } from '~/pages/Error404Page';
import { ResultsPage } from '~/pages/ResultsPage';
import { OrdersPage } from '~/pages/OrdersPage';
import { CounterpartiesPage } from '~/pages/CounterpartiesPage';
import { CallsPage } from '~/pages/CallsPage';
import { MessagesPage } from '~/pages/MessagesPage';
import { DocumentsPage } from '~/pages/DocumentsPage';
import { ExecutorsPage } from '~/pages/ExecutorsPage';
import { ReportsPage } from '~/pages/ReportsPage';
import { OptionsPage } from '~/pages/OptionsPage';
import { KnowledgeBasePage } from '~/pages/KnowledgeBasePage';

interface RouteItem {
  path: string;
  component: FC;
}

export const routeNameList = [
  'resultsPage',
  'ordersPage',
  'counterpartiesPage',
  'messagesPage',
  'callsPage',
  'documentsPage',
  'executorPage',
  'reportsPage',
  'optionsPage',
  'knowledgeBasePage',
  'error404',
] as const;

export type RouteNameList = (typeof routeNameList)[number];

export const routeList: Record<RouteNameList, RouteItem> = {
  resultsPage: {
    path: '/results',
    component: ResultsPage,
  },

  ordersPage: {
    path: '/orders',
    component: OrdersPage,
  },

  messagesPage: { path: '/messages', component: MessagesPage },

  callsPage: {
    path: 'calls',
    component: CallsPage,
  },

  counterpartiesPage: {
    path: '/counterparties',
    component: CounterpartiesPage,
  },

  documentsPage: {
    path: '/documents',
    component: DocumentsPage,
  },

  executorPage: {
    path: '/executors',
    component: ExecutorsPage,
  },

  reportsPage: {
    path: '/reports',
    component: ReportsPage,
  },

  optionsPage: {
    path: '/options',
    component: OptionsPage,
  },

  knowledgeBasePage: {
    path: '/knowledge-base',
    component: KnowledgeBasePage,
  },

  error404: {
    path: '*',
    component: Page404,
  },
};
