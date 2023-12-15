import "../styles/PetPronto.sass"
import pet from "../assets/images/gatoPet.jpg"

function PetPronto () {

    return(
        <div className='petPronto' >
          <div className='addPetImgPronto' >
            <img src={pet} alt="" />
          </div>
          <div className='detalhesPet' >
            <p className="nomePet">Xiquinho</p>
            <h6 className="localPetPronto">Xique Xique-BA</h6>
          </div>

        </div>
    )

}

export default PetPronto