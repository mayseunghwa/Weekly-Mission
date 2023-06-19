// "use client";

import Folder from "@/components/Folder/Folder";
import styles from "./FolderList.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default async function FolderList({ currentIdParam, folderList }) {
  return (
    <ul className={cx("folder-list")}>
      <li className={cx("folder")}>
        <Folder name={"전체"} href={`/folder`} selected={!currentIdParam} />
      </li>
      {folderList?.map((folder) => {
        return (
          <li key={folder._id} className={cx("folder")}>
            <Folder
              name={folder.name}
              href={`/folder/${folder._id}`}
              selected={folder._id.equals(currentIdParam)}
            />
          </li>
        );
      })}
    </ul>
  );
}