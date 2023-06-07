import { Collapse } from "bootstrap"
import { History } from "../History/History"
import './Home.css'
import { Complemento } from "../Complemento/Complemento"
import { Footer } from "../Shared/Footer/footer"

export function Home(){
    return(
        <>
        <section className="banner"></section>
       
        <section className="banner2"></section>
        <section><History/></section>
        <section className="banner3"></section>
        <section><Complemento/></section>
        <section><Footer/></section>

        </>
    )
}