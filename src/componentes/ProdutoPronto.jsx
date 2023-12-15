import coleiraAbacate from "../assets/images/coleiraAbacate.jpeg"
import estrela from "../assets/images/star.png"

function ProdutoPronto () {

    return(
        <div className='produto' >
          <div className='addProdutoPronto' >
            <img src={coleiraAbacate} alt="" />
          </div>
          <div className="detalheDoProd">
            <p className="nomeDoProd">Coleira de abacate </p>
            <h6 className="preco">R$ 29,99</h6>
            <h6 className="avaliacao"> <img src={estrela} alt="" /> 4.98</h6>
            <div className='cadastrarProdutoPronto' >
              <button className='addCarrinhoPronto' >Adicionar</button>
            </div>
          </div>
        </div>
    )

}

export default ProdutoPronto