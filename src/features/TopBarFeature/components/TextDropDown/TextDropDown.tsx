import { FC } from 'react';
import styles from './TextDropDown.module.scss';
import { DropWrap } from '~/ui/DropWrap';

interface TextDropDownProps {}

export const TextDropDown: FC<TextDropDownProps> = () => {
  const titleRenderFn = () => 'ИП Сидорова Александра Михайловна';

  return (
    <DropWrap titleRenderFn={titleRenderFn}>
      <div className={styles.content}>
        <div>Не понятно что здесь должно быть, поэтому пока рыба</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores
          aut consequatur cupiditate doloremque earum eos, fugiat illo in minus
          molestiae nisi nobis non officiis pariatur, perferendis praesentium
          reiciendis rerum suscipit voluptas? Alias assumenda excepturi fugit
          molestiae rerum sint tenetur voluptate. Accusantium ad amet aperiam
          architecto beatae consequatur consequuntur culpa cumque eos est ex
          expedita harum iure, laborum, modi nisi nulla perferendis quisquam,
          quo repellat. Dolorem fugiat id illum numquam quae? Culpa delectus
          distinctio doloribus est et ipsa, iure laudantium nihil nobis nostrum
          officia omnis pariatur quisquam rerum suscipit tempora unde voluptate.
          Aliquid, architecto eos explicabo impedit nostrum possimus rerum!
        </div>
      </div>
    </DropWrap>
  );
};
