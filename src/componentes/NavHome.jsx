import "../styles/NavHome.sass"
import logo from "../assets/images/logo.png"
import SearchBar from "./BarraDePesquisa"
import { SlArrowDown } from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";


function NavHome() {

    return (

        <div className="NavHome" >
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="BarraDePesquisa">
                <SearchBar />
            </div>
            <div className="EntrarCdt">
                <button> Entrar|Cadastrar  <div className="iconsetinha"> <SlArrowDown /> </div> </button>
                <div className="carrinhohome">
                   <div className="iconcarrinhohome"> <BsCart3 /> </div>
                </div>
            </div>



        </div>

    )

}

export default NavHome