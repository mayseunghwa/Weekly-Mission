"use client";

import { useState } from "react";

import classNames from "classnames/bind";

import AddToFolderModal from "@/components/Modal/AddToFolderModal/AddToFolderModal";
import DeleteModal from "@/components/Modal/DeleteModal/DeleteModal";
import { Link } from "@/utils/api/types";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

interface MyCardMenuProps {
  link: Link;
  onDelete: (id: number) => void;
  onAddLink: (url: string, userId: number, folderId: number | null) => void;
  currentFolderId: number | null;
}

export default function MyCardMenu({
  link,
  onDelete,
  onAddLink,
  currentFolderId,
}: MyCardMenuProps) {
  const [shownDeleteModal, setShownDeleteModal] = useState(false);
  const [shownAddToFolderModal, setShownAddToFolderModal] = useState(false);

  const openDeleteModal = () => {
    setShownDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShownDeleteModal(false);
  };

  const openAddToFolderModal = () => {
    setShownAddToFolderModal(true);
  };

  const closeAddToFolderModal = () => {
    setShownAddToFolderModal(false);
  };

  return (
    <>
      <div className={cx("selectMenu")}>
        <div className={cx("menu")} onClick={openDeleteModal}>
          삭제하기
        </div>
        <div className={cx("menu")} onClick={openAddToFolderModal}>
          폴더에 추가
        </div>
      </div>
      {shownDeleteModal && (
        <DeleteModal
          item={{ title: "링크 삭제", id: link.id, content: link.url }}
          onClose={closeDeleteModal}
          onDelete={onDelete}
        />
      )}
      {shownAddToFolderModal && (
        <AddToFolderModal
          url={link.url}
          onClose={closeAddToFolderModal}
          onAddLink={onAddLink}
          currentFolderId={currentFolderId}
        />
      )}
    </>
  );
}