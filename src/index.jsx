import Playlists from "./features/LeftSideBar/organisms/index";
import NavBar from "./features/NavBar/organisms/index";
import Middle from "./features/Middle/organisms/index";
import Music from "./features/RightSideBar/organisms";
import "./index.css"
export default function Home(){
    return(
        <div className="layout">
            <div className="navbar">
                <NavBar />
            </div>

            <div className="main">
                <Playlists />
                <div className="middle">
                <Middle/>
                </div>
                <Music />
            </div>

            <div className="right">
                {/* Optional right panel */}
            </div>
        </div>
    )
}