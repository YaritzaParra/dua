import { Route, Routes } from "react-router-dom"

import {Home} from "../Home/Home"
import {Members} from "../Members/Members"
import {Menu} from "../Shared/Menu/Menu"
import { Shop } from "../Shop/Shop"
import { Musica } from "../Musica/Musica"
import { Fans } from "../Fans/Fans"
import { Cuestionario } from "../Fans/Cuestionario"



export function Rutas(){
    return(
        <>
        <Menu/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colaboraciones" element={<Members />} />
      <Route path="/tienda" element={<Shop />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/fans" element={<Fans />} />
      <Route path="/cuestionario" element={<Cuestionario />} />

    </Routes>
    </>
    )
}