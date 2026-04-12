import SearchIcon from '@mui/icons-material/Search';
import styles from "../navbar.module.css"
export default function SearchBar(){
    return(
        <div className={styles.searchWrapper}>
            <div className={styles.searchIconWrapper}>
              <SearchIcon />
            </div>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="What do you want to play?"
            />
            <hr className={styles["horizontal-line"]}/>
            <img className={styles["browse-img"]} src="/folder.svg" alt="browse" />
        </div>
    )
}