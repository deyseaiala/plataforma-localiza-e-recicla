import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UsuariosContext } from "../context/UsuariosContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CadastroLocaisColeta() {

  const navigate = useNavigate();
  const {register, handleSubmit, getValues, setValue, formState: {errors}} = useForm();
  const {enviarLocalApi} = useContext(UsuariosContext);
  //const {getUsuarios} = useContext(UsuariosContext);


  useEffect(() => {
    let idUsuario = JSON.parse(localStorage.getItem("id"))
    
    if(!!idUsuario){
        setValue('idUsuario', idUsuario)}

  }, [])
  
   

   async function criarNovoLocal(dados){
    enviarLocalApi(dados);
    navigate("/lista-locais-geral");
  }
 
  const buscarCep = () => {
    let cep = getValues('cep');

    if(!!cep && cep.length == 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then(dados => {
        setValue('bairro', dados.bairro)
        setValue('logradouro', dados.logradouro)
        setValue('estado', dados.uf)
        setValue('cidade', dados.localidade)
      })
      .catch(error => console.log(error))
    }
  }



    return ( 
      <div>
        <h1>Cadastre um novo local de coleta</h1>
        <p>Para que outras pessoas também passem a conhecê-lo.</p>

        <form onSubmit = {handleSubmit(criarNovoLocal)} >
          
            <label htmlFor="nomeLocal"> Nome do local de coleta:</label>
            <input type="text" name='nomeLocal'{...register("nomeLocal", {
              required: "Campo obrigatório"})} />
            {errors?.nomeLocal && <p>{errors.nomeLocal?.message}</p>}

            <label htmlFor="descricao"> Descrição:</label>
            <input type="text" name='descricao'{...register("descricao", {
              maxLength: {value: 200, message: "Máximo de 200 caracteres neste campo."}
            })} />
            {errors?.descricao && <p>{errors.descricao?.message}</p>}

            <label htmlFor="idUsuario"> Identificador de usuário:</label>
            <input type="text" name='idUsuario'{...register("idUsuario", {
              required: "Campo obrigatório"}
            )} />
            {errors?.id && <p>{errors.id?.message}</p>}

            <label htmlFor="cep"> CEP:</label>
            <input type="text" name='cep'{...register("cep", {
              required: "Campo obrigatório",
              onBlur: () => buscarCep()
            })} />
            {errors?.cep && <p>{errors.cep?.message}</p>}

            <label htmlFor="logradouro"> Logradouro:</label>
            <input type="text" name='logradouro'{...register("logradouro")} />
            {errors?.logradouro && <p>{errors.logradouro?.message}</p>}

            <label htmlFor="numero"> Número:</label>
            <input type="text" name='numero'{...register("numero")} />
            {errors?.numero && <p>{errors.numero?.message}</p>}

            <label htmlFor="complemento"> Complemento:</label>
            <input type="text" name='complemento'{...register("complemento")} />
            {errors?.complemento && <p>{errors.complemento?.message}</p>}

            <label htmlFor="bairro"> Bairro:</label>
            <input type="text" name='bairro'{...register("bairro")} />
            {errors?.bairro && <p>{errors.bairro?.message}</p>}

            <label htmlFor="estado"> UF:</label>
            <input type="text" name='estado'{...register("estado")} />
            {errors?.estado && <p>{errors.estado?.message}</p>}

            <label htmlFor="cidade"> Cidade:</label>
            <input type="text" name='cidade'{...register("cidade")} />
            {errors?.cidade && <p>{errors.cidade?.message}</p>}

            <label htmlFor="longitude"> Longitude:</label>
            <input type="text" name='longitude'{...register("longitude")} />
            {errors?.longitude && <p>{errors.longitude?.message}</p>}

            <label htmlFor="latitude"> Latitude:</label>
            <input type="text" name='latitude'{...register("latitude")} />
            {errors?.latitude && <p>{errors.latitude?.message}</p>}

            <div>
            <span>Selecione os resíduos aceitos neste local de coleta:</span>
            <label htmlFor="vidro"> Vidro</label>
            <input type="checkbox" name='vidro' placeholder="Vidro" {...register("vidro")} />

            <label htmlFor="metal"> Metal</label>
            <input type="checkbox" name='metal'{...register("metal")} />

            <label htmlFor="papel"> Papel</label>
            <input type="checkbox" name='papel'{...register("papel")} />

            <label htmlFor="plastico"> Plastico</label>
            <input type="checkbox" name='plastico'{...register("plastico")} />

            <label htmlFor="organico"> Organico</label>
            <input type="checkbox" name='organico'{...register("organico")} />

            <label htmlFor="baterias"> Baterias</label>
            <input type="checkbox" name='baterias'{...register("baterias")} />

            <label htmlFor="outros"> Outros</label>
            <input type="checkbox" name='outros'{...register("outros")} />


            </div>

            <button type="submit">Enviar</button>


        </form>    
      </div>
);
  
}
  
  export default CadastroLocaisColeta;