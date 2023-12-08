import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/images/djabo1.webp"
import img2 from "../assets/images/djabo2.gif"
import img3 from "../assets/images/djabo3.webp"
import img4 from "../assets/images/djabo4.gif"

function Carrossel() {

    return(
        <Carousel>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <img src={img2}/>
        </div>
        <div>
          <img src={img3}/>
        </div>
        <div>
          <img src={img4}/>
        </div>
      </Carousel>
    )

}

export default Carrossel