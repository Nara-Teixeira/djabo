import "../styles/Produtos.sass"
import adicionar from "../assets/images/adicionar.png"


function Produtos() {

    return (
        <div>
                    <div className='produto' >
                        <div className='addProduto' >
                                <img src={adicionar} alt="" />
                        </div>
                        <div className='cadastrarProduto' >
                            <button className='addCarrinho' >Adicionar produto</button>
                        </div>
                        
                    </div>
        </div>
    )

}

export default Produtos