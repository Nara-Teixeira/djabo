import "./Botao.sass"

function Botao(props) {

    return (
        <div>
            <label className="lembre"> {props.lembre}
                <input
                    value={props.value}
                    value2={props.value2}
                    type={props.type}
                    checked={props.lembrar}
                    onChange={props.onChange}
                />
                <h4 className="agaquatro">Lembre-se de mim</h4>
            </label>


        </div>
    )

}

export default Botao;