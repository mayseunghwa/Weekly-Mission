import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserProvider';
import styles from './Gnb.module.css';

export default function Gnb() {
  const { user = '' } = useContext(UserContext);
  const { profileImageSource: profileSrc = '', email = '' } = user?.data || {};

  return (
    <header className={styles.gnbContainer}>
      <nav className={styles.gnbWrap}>
        <Link href="/">
            <Image className={styles.logo} alt="logo" src="/assets/images/Linkbrary.svg" width={133} height={24}/>
        </Link>
        {user ? (
          <div className={styles.profile}>
            {profileSrc && (
              <Image
                className={styles.profileIcon}
                src={profileSrc}
                alt="Profile Icon"
                width={28}
                height={28}
              />
            )}
            {email && <p className={styles.userEmail}>{email}</p>}
          </div>
        ) : (
          <Link href="/signin" className={styles.login}>로그인</Link>
        )}
      </nav>
    </header>
  );
}
