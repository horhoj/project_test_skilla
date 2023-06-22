import { FC } from 'react';
import { ReactSVG, Props as ReactSVGProps } from 'react-svg';

interface SvgProps {
  src: string;
  className?: string;
}

export const Svg: FC<SvgProps> = (props) => {
  const propertyList: Omit<ReactSVGProps, 'src' | 'ref'> = {};

  if (props.className) {
    propertyList.className = props.className;
  }

  return <ReactSVG {...propertyList} src={props.src} />;
};
