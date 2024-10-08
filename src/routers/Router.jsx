import {createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../pages/Login.jsx';
import CadastroNovoUsuario from '../pages/CadastroNovoUsuario.jsx';
import App from '../App.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import CadastroLocaisColeta from '../pages/CadastroLocaisColeta.jsx'
import EditarLista from '../pages/EditarLista.jsx';
import ListaLocaisUsuario from '../pages/ListaLocaisUsuario.jsx';


let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || false;

const PrivateRoute = ({children}) => {
	return usuarioLogado ? children : <Navigate to="/login" />
}


const routers = createBrowserRouter ([
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/cadastro-novo-usuario",
        element: <CadastroNovoUsuario />

    },
    {
        path: "/",
        element: ( <PrivateRoute>
        <App/> </PrivateRoute>),
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/cadastro-locais-coleta",
                element: <CadastroLocaisColeta />

            },
            {
                path: "/editar-lista/:idUsuario",
                element: <EditarLista />

            },
            {
                path: "/lista-locais-usuario/:idUsuario",
                element: <ListaLocaisUsuario />

            }
        ]
    }
])

export default routers;