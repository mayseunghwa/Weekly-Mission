import { useEffect, useState } from "react";

import { getLinks } from "@/utils/api";
import { Folder } from "@/utils/api/types";

const useFolderLinksCount = (folders: Folder[], userId: number) => {
  const [linkNums, setLinkNums] = useState<number[]>([]);

  useEffect(() => {
    const countLinksNum = async () => {
      const folderIds = folders.map((folder) => folder.id);
      const responses = await Promise.all(
        folderIds.map((folderId) => getLinks(userId, folderId)),
      );
      const linkCounts = responses.map((links) => links.length);
      setLinkNums(linkCounts);
    };

    countLinksNum();
  }, [folders, userId]);

  return linkNums;
};

export default useFolderLinksCount;
