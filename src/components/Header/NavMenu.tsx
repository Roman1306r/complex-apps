import { NavLink } from "react-router-dom";


const NavMenu = () => {


         return (<nav>
                        <NavLink className="header__link" to={'/todolist'} >TodoList</NavLink>
                        <NavLink className="header__link" to={'/password'} end>Password</NavLink>
                        <NavLink className="header__link" to={'/products'} >Product</NavLink>
                        <NavLink className="header__link" to={'/bmi'} >BMI</NavLink>
                        <NavLink className="header__link" to={'/timer'} >Timer</NavLink>
                        <NavLink className="header__link" to={'/calculator'} >Calculator</NavLink>
                        <NavLink className="header__link" to={'/tictac'} >Tic-Tac-Toe</NavLink>
                </nav>)
  
}

export default NavMenu;