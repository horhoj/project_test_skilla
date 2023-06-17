import { FC } from 'react';
import styles from './KnowledgeBasePage.module.scss';

interface KnowledgeBasePageProps {}

export const KnowledgeBasePage: FC<KnowledgeBasePageProps> = () => {
  return <div className={styles.wrap}>KnowledgeBasePage</div>;
};
