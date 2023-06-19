import styles from "./page.module.css";
import classNames from "classnames/bind";
import { getFolderList, getCardList } from "@/api/instance";
import FolderList from "@/components/FolderList/FolderList";
import CardList from "@/components/CardList/CardList";
import SearchBar from "@/components/SearchBar/SearchBar";

const cx = classNames.bind(styles);
const userId = "1";

export default async function Page({ params }) {
  const currentIdParam = params?.id && +params?.id[0];

  const folderList = await getFolderList(userId);
  const cardList = await getCardList(userId, currentIdParam);

  const currentFolder = folderList.find((item) => item.id === currentIdParam);
  const currentFolderName = currentFolder ? currentFolder.name : "전체";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-bar")}>
        <SearchBar />
      </div>
      <FolderList folderList={folderList} currentIdParam={currentIdParam} />
      <CardList cardList={cardList} currentFolderName={currentFolderName} />
    </div>
  );
}