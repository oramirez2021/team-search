import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'
import Logo from '../src/component/logo';
import axios from 'axios';
import Team from '../src/component/team';
import PageHeader from '../src/component/pageHeader';
import PageFooter from '../src/component/customFooter';
export default function Home() {
  const registros = [
    {
      name : "Andres",
      email : "andres@gmail.com"
    },
    {
      name : "Renzo",
      email : "renzo@gmail.com"
    }
  ]
  return(
    <div className = "container">
      <head>
        <title>Create Next App</title>

      </head>
      <main>
        <section className = "hero is-success">
        <div className = "hero-body">
          <p className = "title">Agenda</p>
          <p className = "subtitle">Presione el boton para agregar un nuevo contacto</p>
        </div>
        </section>
        <div>
          <a className = "button is-large is-link" href="/add-contact">agregar</a>
        </div>
      </main>
    </div>
  )
  
}
