import "../styles/Container.sass"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carrossel from "./Carrossel";

function Container() {

  return (
    <div>
      <div className="Container">
        <div className="divPropaganda">
          <div className="icon"></div>
          <p className="p">E os planos de saúde?</p>
          <h6>Uma vida mais longa para o seu pet</h6>
        </div>
        <div className="divPropaganda">
          <div className="icon"></div>
          <p className="p">Fashion Week Canina!</p>
          <h6>Deixe seu pet mais estiloso</h6>
        </div>
        <div className="divPropaganda">
          <div className="icon"></div>
          <p className="p">Buffet de petiscos</p>
          <h6>As melhores rações com molho do chef</h6>
        </div>
      </div>
      <div>
        <Carrossel/>
      </div>


    </div>

  )
}

export default Container