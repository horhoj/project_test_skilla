import {
  FC,
  ReactNode,
  useRef,
  useState,
  KeyboardEvent,
  useEffect,
  CSSProperties,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';
import FocusLock from 'react-focus-lock';
import styles from './DropWrap.module.scss';
import { useOutsideClick } from '~/hooks/useOutsideClick';
import openIcon from '~/assets/img/drop_down__open-icon.svg';

interface DropWrapProps {
  titleRenderFn: () => ReactNode;
  children?: ReactNode;
  childrenMarginTop?: number;
}

export const DropWrap: FC<DropWrapProps> = (props) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLLabelElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick([childrenRef, titleRef, openBtnRef], () => {
    setIsOpen(false);
  });

  const onOpenBtnClk = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChildKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (childrenRef.current && isOpen) {
        childrenRef.current.focus();
      }
    }, 100);

    if (!isOpen && childrenRef.current) {
      childrenRef.current.blur();
    }
  }, [isOpen]);

  const childrenStyle: CSSProperties = {};
  if (props.childrenMarginTop !== undefined) {
    childrenStyle.marginTop = `${props.childrenMarginTop}px`;
  }

  return (
    <div className={styles.wrap}>
      <label ref={titleRef} className={styles.titleWrap}>
        <span>{props.titleRenderFn()}</span>
        <button
          onClick={onOpenBtnClk}
          className={styles.openBtn}
          ref={openBtnRef}
        >
          <ReactSVG src={openIcon} />
        </button>
      </label>
      <CSSTransition
        in={isOpen}
        nodeRef={childrenRef}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <FocusLock>
          <div
            ref={childrenRef}
            className={styles.childrenWrap}
            tabIndex={0}
            autoFocus={true}
            onKeyDown={handleChildKeydown}
            style={childrenStyle}
          >
            {props.children}
          </div>
        </FocusLock>
      </CSSTransition>
    </div>
  );
};
