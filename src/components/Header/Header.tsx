import { HeaderProps } from "../../models";
import NavMenu from "./NavMenu";
import night from "../../assets/image/night.png"
import day from "../../assets/image/day.png"



const Header = ({ changeThemeApp, isLight} : HeaderProps) => {


    return <header className="header">
                    <NavMenu />
                    {isLight ?  <button onClick={changeThemeApp} className="themes"><img src={day} alt={day}/></button> 
                    : <button onClick={changeThemeApp} className="themes"><img src={night} alt={night}/></button>}
           </header>
}


export default Header;