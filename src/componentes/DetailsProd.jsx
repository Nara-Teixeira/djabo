import "../styles/DetailsProd.sass"
import Navbar from "./Navbar"
import produto from "../assets/images/coleiraAbacate.jpeg"
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";



const DetailsProd = () => {

    return (

        <div className='body'>
            <Navbar />

            <div className="imagensMini">
                <img src={produto} alt="produto" />
                <img src={produto} alt="produto" />
                <img src={produto} alt="produto" />
                <img src={produto} alt="produto" />
            </div>
            <div className="ImagemDoProduto">
                <img src="" alt="" />
            </div>

            <div className="DescProduto">
                <div className="Avaliaçao">
                    <div className="BackgroundCoraçao" >
                        <div className="iconcoraçao"><FaRegHeart /></div>
                    </div>

                    <button className="botaoavaliaçao">
                        <span className="média_avaliaçãoo">
                            <div className="iconestrela"><FaStar /></div>
                            4.8
                        </span>
                        <span
                            className="nmravaliaçao">18</span>
                    </button>
                </div>

                <div className="NomePreço">
                    <div className="nomeproduto">
                        <h2> Coleira </h2>
                    </div>

                    <div className="preçoproduto">
                        <h5>R$19,99</h5>
                    </div>
                </div>

                <div className="Detalhes">
                    <h2 className="agadoisDetalhes">Detalhes</h2>

                    <div className="Categorias">
                        <h6 className="agaCategoria">Dúravel</h6>
                        <h6 className="agaCategoria">Algodão</h6>
                        <h6 className="agaCategoria">Cruelty-free</h6>
                    </div>


                    <button className="botaoCarrinho">
                        <div className="iconcarrinho"><BsCart3 /></div>
                        <h2 className="agaAddCarrinho">Adicionar ao carrinho</h2>
                    </button>

                </div>

            </div>


           
        </div>

    )
}

// return (

//     <main>
//         <div className="row"> {loading ? <Loading /> : <ShowProduct />}
//         </div>
//     </main>
// )


export default DetailsProd