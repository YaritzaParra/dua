import '../Fans/Cuestionario.css'
export function Cuestionario(){
    return(
        <>
        <div className='cuestionario'>
        <h2>¿Cuanto sabes de Dua Lipa?</h2>
        <h4> Contesta este test y sal de dudas. La cantante británica se ha convertido en toda una sensación. Demuestra qué tan bien la conoces respondiendo estas 6 preguntas.</h4>
        <fieldset>
            <legend>¿Donde nació Dua Lipa?</legend>
            <input type="radio" />Toronto <br />
            <input type="radio" />Londres <br />
            <input type="radio" />Los Ángeles <br />
            <input type="radio" />Nueva York <br />
        </fieldset>
        
        <fieldset>
        <legend>¿Cuál es el nombre de su primer álbum?</legend>
            <input type="radio" />Physical <br />
            <input type="radio" />Dua Lipa <br /> 
            <input type="radio" />New Rules <br />
            <input type="radio" />Hotter Than Hell <br />
        </fieldset>
        
        <fieldset>
        <legend>¿Con quién colaboró en la canción Kiss & Make Up?</legend>
            <input type="radio" />Hwasa <br />
            <input type="radio" />Madonna <br /> 
            <input type="radio" />BLACKPINK <br />
            <input type="radio" />Miley Cyrus <br />
        </fieldset>
        
        <fieldset>
        <legend>¿Cómo se llama la canción en la que colaboró con Megan Thee Stallion?</legend>
            <input type="radio" />Ice Cream<br />
            <input type="radio" />We’re Good <br /> 
            <input type="radio" />Cold Heart <br />
            <input type="radio" />Sweetest Pie <br />
        </fieldset>
        
        <fieldset>
        <legend>¿Dua Lipa tiene hermanos??</legend>
            <input type="radio" />No<br />
            <input type="radio" />Si<br /> 
        </fieldset>
        
        <fieldset>
        <legend>¿Donde tiene tatuado un ojo?</legend>
            <input type="radio" />Codo<br />
            <input type="radio" />Hombro <br /> 
            <input type="radio" />Tobillo  <br />
            <input type="radio" />Mano <br />
        </fieldset>
        <hr />
        <button className='boton'>Enviar</button>
        </div>
        </>
    )
}