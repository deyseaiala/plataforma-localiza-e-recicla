import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";



function EditarLista() {

    const {register, handleSubmit, setValue, formState: {errors}} =useForm();
    const {id} = useParams();
    
    
    useEffect((id)=>{
        fetch("http://localhost:3000/locaisColeta" + id)
        .then(response => response.json())
        .then(dados => {
            setValue('id', dados.id)
            setValue('nomeLocal', dados.nomeLocal)
            setValue('descricao', dados.descricao)
            setValue('cep', dados.cep)
            setValue('logradouro', dados.logradouro) 
            setValue('numero', dados.numero)
            setValue('complemento', dados.complemento)
            setValue('bairro', dados.bairro)
            setValue('estado', dados.uf)
            setValue('cidade', dados.localidade)
            setValue('longitude', dados.longitude)
            setValue('latitude', dados.latitude)
            setValue('vidro', dados.vidro)
            setValue('metal', dados.metal)
            setValue('papel', dados.papel)
            setValue('plastico', dados.plastico)
            setValue('organico', dados.organico)
            setValue('baterias', dados.baterias)
            setValue('outros', dados.outros)
          })
        .catch(erro => console.log(erro))

    },[])

    function salvarEdicao(){
      fetch("http://localhost:3000/usuarios/" + id, {
      method: "PUT",
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => { 
      alert("Alterações salvas!")
      getUsuarios()
    })
    .catch(() => alert("Erro ao salvar alterações!"))
  }

    

    return(

        <div>
        <h1>Editar lista {id}</h1>

        <form onSubmit = {handleSubmit(salvarEdicao)} >
          
          <label htmlFor="nomeLocal"> Nome do local de coleta:</label>
          <input type="text" name='nomeLocal'{...register("nomeLocal", {
            required: "Campo obrigatório"})} />
          {errors?.nomeLocal && <p>{errors.nomeLocal?.message}</p>}

          <label htmlFor="descricao"> Descrição:</label>
          <input type="text" name='descricao'{...register("descricao", {
            maxLength: {value: 200, message: "Máximo de 200 caracteres neste campo."}
          })} />
          {errors?.descricao && <p>{errors.descricao?.message}</p>}

          <label htmlFor="id"> Identificador de usuário:</label>
          <input type="text" name='id'{...register("id", {
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
          </form>


        <button type="submit">Salvar</button>
        <button >Excluir</button>
        
        </div>
    )
}

export default EditarLista;