import Playlists from "./features/Playlists/organisms/index";
import NavBar from "./features/NavBar/organisms/index";
import Middle from "./features/Middle/organisms/index";
import "./index.css"
export default function Home(){
    return(
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>

            <div className="left">
                <Playlists />
            </div>

            <div className="middle">
                <Middle />
            </div>

            <div className="right">
                {/* Optional right panel */}
            </div>
        </div>
    )
}