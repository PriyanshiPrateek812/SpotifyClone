import SearchIcon from '@mui/icons-material/Search';
import '../styles.css';
export default function SearchBar(){
    return(
        <div className="searchWrapper">
            <div className="searchIconWrapper">
              <SearchIcon />
            </div>
            <input
                type="text"
                className="searchInput"
                placeholder="What do you want to play?"
            />
            <hr className="horizontal-line"/>
            <img className="browse-img" src="/folder.svg" alt="browse" />
        </div>
    )
}