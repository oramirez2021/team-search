import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import Logo from '../src/component/logo';
import axios from 'axios';
import Team from '../src/component/team';
import PageHeader from '../src/component/pageHeader';
import PageFooter from '../src/component/customFooter';
import Header from '../src/component/header'
import Link from "next/link"
import { REACT_LOADABLE_MANIFEST } from 'next/dist/shared/lib/constants';

export default function Home() {
  let component;
  const [registros,  setRegistros] = useState([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    axios.get("https://6q9n6jl1jl.execute-api.us-east-2.amazonaws.com/prod/contacts")
    .then((response) => {
      if (response.status === 200){
        setRegistros(response.data);
      }
    });
  },[reload]);
  if (registros.length === 0){
      component = <div>
        No existen registros disponibles.
      </div>
  }else{
      component = registros.map((contacto, index) => {
        return (
          <div key = {`contacto-${index}`}>
            <div className = "column is-quarter">{contacto.nombre}</div>{" "}
            <div className = "column is-quarter">{contacto.apellido}</div>{" "}
            <div className = "column is-half">{contacto.email}</div>
          </div>
        )
      })
  }
  return(
    <div className = "container">
      <Head>
        <title>Create Next App</title>

      </Head>
      <main>
        <Header title = "Agenda" subtitle = "Presiona un boton para agregar el contacto"/>
        <div className = "columns  is-multiline">
          {component}
        </div>
        <div>
        <Link href = "/add-contact">
          <a className = "button is-large is-link">Agregar+</a>
          
        </Link>
        <button type = "submit" className = "button is-large is-danger" onClick = {(event) => {
          event.preventDefault();
          setReload(reload + 1);
        }}>
          Reload *
        </button>
        </div>
      </main>
    </div>
  )
  
}