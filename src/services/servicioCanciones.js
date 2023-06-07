export async function consultarCanciones(){

    //APIS CON JS

    //1.para donde va
    //URL + EP DEL SERVICIO
    const IDARTISTA="6M2wZ9GZgrQXHCFfjv46we"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQBuE5unSKaWgNioQolO69nmzqmfujrrkl4GmKkqpcCGfI_u88c-39-xZRdm6vNq9GicqBTQY36Xl_8pu96zsbS9DX6P1EP_R3AZi3_4blAWT2KK1cc"

    //2.Que va hacer
    //Configurar la peticion
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        }
    }

    //3.utilice FETCH para ir al back y consumir el API
    let respuesta=await fetch(URI,peticion)
    let canciones=await respuesta.json()

    return canciones
}