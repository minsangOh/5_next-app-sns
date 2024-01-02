import { ReactNode } from "react";
import styles from '@/app/page.module.css'


type Props = { children: ReactNode; modal: ReactNode };

export default async function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      비포 로그인 로그아웃
      {children}
      {modal}
    </div>
  );
}
