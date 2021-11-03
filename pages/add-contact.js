import Header from '../src/component/header'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"

export default function AddContact(){
    const [loading, setLoading] = useState(false);
    //const [nombre, setNombre] = useState('');
    //const [contacto, setContacto] = useState({email:'',nombre:''});
    const { register, handleSubmit,formState : {errors} } = useForm();
    //const processData = (data) => console.debug(data);
    const processData = (data) => {
        const url = "https://6q9n6jl1jl.execute-api.us-east-2.amazonaws.com/prod/contacts";
        console.debug(data);
        setLoading(true);
        axios.post(url, data)
        .then((response) => {
            console.debug(response)
            setLoading(false);
        })
    }
    console.debug(errors);
    return (
        <div className = "container">
            <Header title = "Agregar contacto" type = "warning"/>
            <div className = "columns">
                <div className = "column is-half">
                    <form onSubmit = {handleSubmit(processData)}>
                        <div className = "field">
                            <label>Nombre:</label>
                            <div className = "control"> 
                                <input type = "text" {...register('nombre', {required: true})}/>
                            </div>
                            {errors.nombre && <spam>El nombre es requerido</spam>}
                        </div>
                        <div className = "field">
                            <label>Apellido:</label>
                            <div className = "control">
                                <input type = "text" {...register("apellido", {required:true})}/>
                            </div>
                            {errors.apellido && <spam>El apellido es requerido</spam>}
                        </div>
                        <div className = "field">
                            <label>Correo:</label>
                            <div className = "control"> 
                                <input type = "email" {...register('email', {required: true})}/>
                            </div>
                            {errors.email && <spam>El email es requerido</spam>}
                        </div>
                        {!loading && <button type = "submit" className = "button is-primary">Agregar</button>}
                    </form>
                </div>
            </div>
        </div>
    );
}