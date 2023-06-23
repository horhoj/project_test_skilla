import { getUUID } from '~/utils/getUUID';

type ColorType = 'green' | 'yellow' | 'red';

interface IndicatorItemConfig {
  id: string;
  text: string;
  colorText: string;
  colorType: ColorType;
  progress: number;
}

export const indicatorListConfig: IndicatorItemConfig[] = [
  {
    id: getUUID(),
    text: 'Новые звонки',
    colorText: '20 из 30 шт',
    colorType: 'green',
    progress: 66.66,
  },
  {
    id: getUUID(),
    text: 'Качество разговоров',
    colorText: '40%',
    colorType: 'yellow',
    progress: 40,
  },
  {
    id: getUUID(),
    text: 'Конверсия в заказ',
    colorText: '67%',
    colorType: 'red',
    progress: 67,
  },
];
