import {useForm} from 'react-hook-form'
import { useNavigate, Link } from "react-router-dom";
import { useContext} from "react";
import { UsuariosContext } from "../context/UsuariosContext";
import styles from "./cadastroNovoUsuario.module.css"

function CadastroNovoUsuario() {

  const {enviarParaApi} = useContext(UsuariosContext);
  const navigate = useNavigate();
  const {register, handleSubmit, setValue, getValues, formState: {errors}} = useForm({defaultValues: {
      nome: "",
      email: "",
    }})

  async function consultarCpfUnico(){
    let cpf = getValues('cpf');

    try {
      const response = await fetch("http://localhost:3000/usuariosCadastrados");
      const dados = await response.json();
    
      dados.map(usuario => {
        if(usuario.cpf == cpf){
          alert("Já existe um usuário cadastrado com este mesmo CPF. Por favor, insira outro CPF.");
          setValue('cpf', "");
      }
    })
   } catch {erro => console.log(erro)}
  }


    const criarNovoUsuario = async (dados) => {
      console.log(dados)
      enviarParaApi(dados);
      navigate("/login");
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
      <div className={styles.conteiner}>
        <div className={styles.imagem}>
    
      </div>


      <div className={styles.cadastroForm}>

    <div className={styles.logo}>
          <img width="50" height="50" src="src\assets\reciclagemAzul.png" alt="marker--v1"></img>
            <h1>RECICLA FLORIPA</h1>
            </div>
        
        <form onSubmit = {handleSubmit(criarNovoUsuario)} >
        <div className={styles.formulario}>    
            <label htmlFor="nome"> Nome:</label>
            <input type="text" name='nome'{...register("nome", {
              required: "Campo obrigatório",
              maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
            })} />
            {errors?.nome && <p>{errors.nome?.message}</p>}

            <label htmlFor="sexo">Sexo</label>
              <select name='sexo' {...register("sexo")}>
              <option value="Feminino"> Feminino </option>
              <option value="Masculino"> Masculino </option>
              </select>
            {errors?.sexo && <p>{errors.sexo?.message}</p>}
            

            
            <label htmlFor="cpf"> CPF:</label>
            <input type="text" name='cpf'{...register("cpf", {
              required: "Campo obrigatório",
              maxLength: {value: 11, message: "Máximo de 11 caracteres neste campo."},
              onBlur: () => consultarCpfUnico()
            })} />
            {errors?.cpf && <p>{errors.cpf?.message}</p>}

            <label htmlFor="dataNascimento"> Data de nascimento:</label>
            <input type="date" name='dataNascimento'{...register("cdataNascimento", {
              required: "Campo obrigatório"
            })} />
            {errors?.dataNascimento && <p>{errors.dataNascimento?.message}</p>}
            
            
            
            <label htmlFor="email"> Email:</label>
            <input type="email" name='email'{...register("email", {
              required: "Campo obrigatório",
              maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
            })} />
            {errors?.email && <p>{errors.email?.message}</p>}

            <label htmlFor="senha"> Senha:</label>
            <input type="password" name='senha'{...register("senha", {
              required: "Campo obrigatório",
              maxLength: {value: 60, message: "Máximo de 60 caracteres neste campo."}
            })} />
            {errors?.senha && <p>{errors.senha?.message}</p>}
          

            
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
            </div>

            <div className={styles.btn}>
            <button type="submit">ENVIAR</button>
            <Link to="/login"><button type="button"> VOLTAR </button></Link>
            </div>
          </form>
          </div>
        </div>
        
  );
  }
  
  export default CadastroNovoUsuario;
