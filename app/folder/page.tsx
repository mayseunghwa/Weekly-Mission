import styles from "@folder/Folder.module.css";
import AddLinkBar from "@components/AddLinkBar";
import AddPage from "@components/AddPage";
import SearchBar from "@components/SearchBar";
import CardContainer from "@components/CardContainer";
import UpdateLink from "@components/UpdateLink";

const Folder = () => {
  return (
    <>
      <AddLinkBar />
      <div className={styles["main-container"]}>
        <SearchBar />
        <AddPage />
        <UpdateLink />
      </div>
      <CardContainer />
    </>
  );
};

export default Folder;
