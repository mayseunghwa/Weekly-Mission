"use client";

import React, { useState, useEffect } from "react";
import AddLink from "./components/AddLink/AddLink";
import styles from "./page.module.scss";
import SearchBar from "@/components/SearchBar/SearchBar";
import FolderChip from "./components/FolderChip/FolderChip";
import Image from "next/image";
import Option from "./components/Option/Option";
import LinkCardList from "@/components/LinkCardList/LinkCardList";
import { getFolderRequest } from "@/lib/api/folderApi";

const FOLDER_CHIP_LIST = [
  {
    href: "https://codeit.kr",
    label: "전체",
    selected: true,
  },
  {
    href: "https://codeit.kr",
    label: "⭐️ 즐겨찾기",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "코딩 팁",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "채용 사이트",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "유용한 글",
    selected: false,
  },
  {
    href: "https://codeit.kr",
    label: "나만의 장소",
    selected: false,
  },
];

const Page = () => {
  const [cardListProps, setCardListProps] = useState([]);
  const getCardListProps = (dataList: any) => {
    return dataList.map((data: any) => {
      return {
        id: data.id,
        href: data.url,
        thumbnailSrc: data.imageSource,
        description: data.description,
        createdDate: data.createdAt,
      };
    });
  };

  useEffect(() => {
    getFolderRequest()
      .then((res) => res.data)
      .then((res) => {
        setCardListProps(getCardListProps(res.folder.links));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.addLinkContainer}>
          <AddLink />
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.contentsContainer}>
          <div className={styles.searchBarContainer}>
            <SearchBar
              placeholder="제목을 검색해 보세요"
              action="/search?q=null"
            />
          </div>
          <div className={styles.mainContentContainer}>
            <div className={styles.chipListRow}>
              <ul className={styles.chipListContainer}>
                {FOLDER_CHIP_LIST.map((chip, idx) => {
                  return (
                    <li key={idx}>
                      <FolderChip
                        href={chip.href}
                        label={chip.label}
                        selected={chip.selected}
                      />
                    </li>
                  );
                })}
              </ul>
              <button type="button" className={styles.addFolderButton}>
                <span>폴더 추가</span>
                <div className={styles.addIconBox}>
                  <Image src="/addIcon.svg" alt="add icon" fill />
                  <Image src="/addIcon-white.svg" alt="add icon" fill />
                </div>
              </button>
            </div>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>전체</h2>
              <ul className={styles.optionListContainer}>
                <li>
                  <Option
                    imgSrc="/shareIcon.svg"
                    label="공유"
                    onClick={() => {}}
                  ></Option>
                </li>
                <li>
                  <Option
                    imgSrc="/pencilIcon.svg"
                    label="이름 변경"
                    onClick={() => {}}
                  ></Option>
                </li>
                <li>
                  <Option
                    imgSrc="/deleteIcon.svg"
                    label="삭제"
                    onClick={() => {}}
                  ></Option>
                </li>
              </ul>
            </div>
            <article className={styles.cardList}>
              <LinkCardList cardDataList={cardListProps} />
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
