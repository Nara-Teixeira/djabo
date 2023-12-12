import "../styles/Container.sass"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carrossel from "./Carrossel";
import iconvenda from "../assets/images/iconvenda.png"
import iconcaixa from "../assets/images/iconcaixa.png"
import iconsaude from "../assets/images/iconsaude.png"
import Produtos from "./Produtos";

function Container() {

  return (
    <div>
      <div className="Container">
        <div className="divPropaganda">
          <div className="icon"><img className="imgicon" src={iconsaude} alt="icone saude" /></div>
          
          <p className="p">E os planos de saúde?</p>
          <h6 className="agaseis">Uma vida mais longa para o seu pet</h6>
        </div>

        <div className="divPropaganda">
          <div className="icon"> <img className="imgicon"  src={iconcaixa} alt="icone de caixa" /> </div>
          <p className="p">Fashion Week Canina!</p>
          <h6 className="agaseis">Deixe seu pet mais estiloso</h6>
        </div>

        <div className="divPropaganda">
          <div className="icon"> <img className="imgicon"  src={iconvenda} alt="icone e venda" /> </div>
          <p className="p">Buffet de petiscos</p>
          <h6 className="agaseis">As melhores rações com molho do chef</h6>
        </div>
      </div>
      <div className="divcarrossel">
        <Carrossel/>
      </div>

      <div>
        <h2 className="agaum" >Seu pet tambem pode gostar</h2>
      </div>

       <div className="divDosProduto">
        <Produtos/>
       </div>


    </div>

  )
}

export default Container