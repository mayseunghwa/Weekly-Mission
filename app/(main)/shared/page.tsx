import classNames from "classnames/bind";
import { redirect } from "next/navigation";

import { META_SHARED } from "@/app/_meta";
import Card from "@/components/Card/Card";
import OtherCardMenu from "@/components/Card/OtherCardMenu";
import FolderInfo from "@/components/FolderInfo";
import SearchBar from "@/components/SearchBar";
import { getFolder, getLinks, getUser } from "@/utils/api";
import { SelectedFolder } from "@/utils/api/types";
import convertParamToNum from "@/utils/convertParamToNum";

import styles from "./page.module.scss";

const cx = classNames.bind(styles);

export const metadata = META_SHARED;

export default async function Shared({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { user: strUserParam, folder: strFolderParam } = searchParams;
  const sharedUserId = convertParamToNum(strUserParam);
  const folderId = convertParamToNum(strFolderParam);

  if (!sharedUserId) redirect("/");
  if (folderId === null) redirect(`/shared?user=${sharedUserId}&folder=0`);

  const [sharedUser, folder, links] = await Promise.all([
    getUser(sharedUserId),
    getFolder(sharedUserId, folderId),
    getLinks(sharedUserId, folderId),
  ]);

  let currentFolder: SelectedFolder;
  if (folderId === 0) currentFolder = { id: 0, name: "전체" };
  else {
    if (!folder) redirect(`/shared?user=${sharedUserId}&folder=0`);
    currentFolder = { id: folder.id, name: folder.name };
  }

  return (
    <>
      <FolderInfo folder={currentFolder} owner={sharedUser} />
      <main>
        <section className={cx("searchBarContainer")}>
          <SearchBar />
        </section>
        {links.length === 0 && (
          <div className={cx("notExistLink")}>저장된 링크가 없습니다.</div>
        )}
        <section className={cx("cardContainer")}>
          {links.map((link) => (
            <Card
              key={link.id}
              link={link}
              menuComponent={<OtherCardMenu url={link.url} />}
            />
          ))}
        </section>
      </main>
    </>
  );
}