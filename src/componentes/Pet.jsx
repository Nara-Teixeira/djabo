import adicionar from "../assets/images/adicionar.png"


function Pet () {

return(
    <div className='pet' >
          <div className='addPetImg' >
            <img src={adicionar} alt="" />
          </div>
          <div className='cadastrarPet' >
            <button className='addPet' >Adicionar pet</button>
          </div>

        </div>
)

}

export default Pet