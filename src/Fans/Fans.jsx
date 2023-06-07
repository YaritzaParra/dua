import { Link } from 'react-router-dom'
import './Fans.css'
export function Fans(){
    return(
        <>

            
        <div className="body">
        <div className="box">
            <span className="borderLine"></span>
            <form action="">
                <h2>¡Registrate!</h2>
                <div className="inputBox">
                    <input type="text"  required="required"/>
                    <span>Nombre</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="date"  required="required"/>
                    <span></span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="text"  required="required"/>
                    <span>Email</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password"  required="required"/>
                    <span>Contraseña</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="">¿Olvidaste tu contraseña?</a>
                </div>
             <Link className="nav-link" to="/cuestionario"><button type='submit'>Ingresar</button></Link>
            </form>
        </div>
        </div>
        </>
    )
}