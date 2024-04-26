import {Button} from '@mui/material';
import {useForm} from 'react-hook-form'

function Login() {

    const { register, handleSubmit 
    } = useForm()
  

return(
    <div>
        <h1>Login</h1>
        <form onSubmit = {handleSubmit(fazerLogin)}>  
        <label htmlFor="email"> Email</label>
          <input type="text" {...register("email", {
            required: "Por favor escreva seu email.",
            maxLength: {value: 30, message: "Máximo de 30 caracteres neste campo."}
          })} />
          {errors?.email && <p>{errors.email?.message}</p>}

          <label htmlFor="senha"> Senha</label>
          <input type="text" {...register("senha", {
            required: "Por favor escreva sua senha.",
            minLength: {value: 8, message: "A senha deve ter no mínimo 8 dígitos."}
          })} />
          {errors?.email && <p>{errors.email?.message}</p>}
        


        <Button variant="outlined">Login</Button>
        <Button variant="outlined">Cadastre-se</Button>
        </form>
    </div>
)

}

export default Login;