import "../Musica/Musica.css";
import {consultarCanciones} from "../services/servicioCanciones"
import { useState, useEffect } from "react";

export function Musica() {

  const [canciones,setCanciones]=useState(null)
  const [cargando,setCargando]=useState(true)
  useEffect(function(){

    consultarCanciones().then(function(respuesta){
      setCanciones(respuesta.tracks)
      setCargando(false)
    })

  },[])

    const[estaCargando,setEstaCargando] = useState(true)
    const[tiempo,setTiempo] = useState(0)

    useEffect(function(){
        if(tiempo>0){
        setEstaCargando(false)
    }else{
        setEstaCargando(true)
    }
    },[tiempo])

    setTimeout(function(){
        setTiempo(1)
    },5000)

    if(estaCargando){
      return(
        <>
        <div className="container gif">
            <div className="row">
                <div className="col-12">
                  <h3 className="text-center">Cargando...</h3>
                    <img src="../../src/assets/img/dua-lipa-kiss.gif" alt="" className="img-fluid mx-auto d-block"/>
                </div>
            </div>
        </div>
        </>
      )
    }else{
    return (
      <>
       <div className="bodyMU">
        {
        canciones.map(function(cancion) {
          return (
            <>
            <div className="col"><br /> <br />
            <div className="details">
            <div className="cardMU">
            
            <audio  controls src={cancion.preview_url}></audio>
            <div className="imgBx">
            <img src={cancion.album.images[0].url} alt="" />
              </div>
              <h3>{cancion.name}</h3>
              </div>
            <div className="stars">
                {renderStars(cancion.popularity)}
              </div>
              </div>
              </div> 
       

              </>
          )
          })
        }
      </div>
      </>
    );
      }
    
      function renderStars(popularity) {
        const totalStars = 5; // Número total de estrellas
        const filledStars = Math.round((popularity / 100) * totalStars); // Calcula el número de estrellas llenas
        const emptyStars = totalStars - filledStars; // Calcula el número de estrellas vacías
      
        const stars = [];
      
        // Genera las estrellas llenas
        for (let i = 0; i < filledStars; i++) {
          stars.push(<i key={i} className="fas fa-star"></i>);
        }
      
        // Genera las estrellas vacías
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<i key={filledStars + i} className="far fa-star"></i>);
        }
      
        return stars;
      }}