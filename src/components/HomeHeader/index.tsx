import Image from 'next/image'
import ButtonLink from '@/components/ButtonLink'
import * as styles from './HomeHeader.css'

const HomeHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.emphasis}>세상의 모든 정보</span>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </h1>
      <ButtonLink className={styles.styledButtonLink} href="/folder">링크 추가하기</ButtonLink>
      <div className={styles.image}>
        <Image
          fill
          src="/homepage-header-image.png"
          alt="Header Image"
          priority
        />
      </div>
    </header>
  )
}

export default HomeHeader
