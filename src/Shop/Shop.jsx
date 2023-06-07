import "./Shop.css";
export function Shop() {
  let tienda = [
    {
      nombre: "Cd nuevo",
      descripcion: "Dua Lipa- Future nostalgia Moonlight Edition",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/Captura%20de%20pantalla%20(12).png?alt=media&token=3fb8bbed-fe3f-485c-b0b5-2b68ffbbd0ad",
      precio: "50.000",
      id: "1",
    },
    {
      nombre: "Cases Dua Lipa",
      descripcion:
        "Nuevos estilos de case para tu celular, tambien los puedes personalizar",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/cass1.jpg?alt=media&token=dd760e97-cb5a-4d32-9de7-7f35ad9f6038",
      precio: "30.000",
      id: "2",
    },
    {
      nombre: "Chaqueta",
      descripcion:
        "Chaqueta Dua Lipa Pop estampado en todas las tallas, normalmente se despacha dentro de las 24 horas habiles",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/buso.jpg?alt=media&token=5de1fa68-3831-46b9-adb0-408ca55cfe79",
      precio: "104.850",
      id: "3",
    },
    {
      nombre: "Combo regalo Dua Lipa",
      descripcion:
        "Consta de un reloj 19cm, 1 mug, portacelular y cuelgapuerta",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/combo.jpg?alt=media&token=85d5725e-0c1e-4fdc-9f5d-2cf888ad6db6",
      precio: "30.000",
      id: "4",
    },
    {
      nombre: "Buso blanco",
      descripcion:
        "Buso blanco con capota, el estampado es suave al tacto, nuestras tallas son unisex, sin cierre, bolsillo frontal.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti2.webp?alt=media&token=9253d8d4-8d6e-4de5-98db-ae74072699cd",
      precio: "98.980",
      id: "5",
    },
    {
      nombre: "Cd Dua Lipa Future Nostalgia",
      descripcion:
        "Contiene todas las canciones de este album, se lo entregamos sellado",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti3.webp?alt=media&token=97b1838d-66cd-46de-a12b-d9f07cdab4f1",
      precio: "55.980",
      id: "6",
    },
    {
      nombre: "Camiseta Funy",
      descripcion:
        "Camiseta Funy para hombre y mujer, estampado suave, manejamos todas las tallas",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ti4.webp?alt=media&token=3d8bd61f-7de6-45f4-be06-7d14d9d1ef7a",
      precio: "30.900",
      id: "7",
    },
    {
      nombre: "Vestido",
      descripcion: "Vestido en malla, talla unica, pocas unidades ",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/vestido.webp?alt=media&token=b83a9983-f3d4-4625-a723-6dcffb37cb51",
      precio: "90.000",
      id: "8",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Vestido color negro, de tela terciopelo, elegante con terminación en guante. ",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves9.jpg?alt=media&token=0329b5fd-b41c-4de2-b28b-de6be23d35af",
      precio: "300.000",
      id: "9",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Vestido color negro, de tela terciopelo, abertura en la pierna. ",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves8.jpeg?alt=media&token=a304c51b-6952-47a3-8840-3f5c24042b8b",
      precio: "404.850",
      id: "10",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Vestido de un hermoso color rojo, de encaje, que se adapta a tu silueta.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves7.jpg?alt=media&token=1ac1d415-4235-47fc-9ea5-4d667357ecbf",
      precio: "300.000",
      id: "11",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Hermoso vestido color rojo, perfecto para tus fechas especiales.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves6.jpg?alt=media&token=53a0966d-1bd0-441a-ae56-5f84493c653a",
      precio: "498.980",
      id: "12",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Hermoso vestido, que te haria una silueta perfecta.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves5.jpeg?alt=media&token=2a838039-d5c9-4926-ab0b-0af2275f2d73",
      precio: "455.980",
      id: "13",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Vestido con abertura en la pierna, te haria lucir muy elegante",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves4.jpeg?alt=media&token=59493ca5-4fc0-400a-a227-239ee8002edc",
      precio: "30.900",
      id: "14",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Vestido de lentejuelas negro. corto, suelto al cuerpo ",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves3.jpg?alt=media&token=9cf2d1d6-479d-4040-8ff9-212e80cff6c4",
      precio: "330.900",
      id: "15",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Hermoso vestido color esmeralda, corto,con hombro descubierto.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves2.jfif?alt=media&token=8dbf4c49-def6-4f63-b5b6-bc1862e7ba63",
      precio: "300.900",
      id: "16",
    },
    {
      nombre: "Vestido",
      descripcion:
        "Hermoso vestido largo, color esmeralda, con abertura en la pierna.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ves1.jpg?alt=media&token=3c092406-a7d0-452e-9679-ad46e1aba8a1 ",
      precio: "400.900",
      id: "17",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño de una pieza, color negro, con copas",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ve1.jfif?alt=media&token=cfd6a66e-c1de-41db-abd6-5907e6e46d17",
      precio: "50.000",
      id: "18",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Hermoso vestido de baño, colo negro, de dos piezas con estampado.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ve2.webp?alt=media&token=50bd96b4-621a-4384-9424-5072da2b7c07",
      precio: "60.900",
      id: "19",
    },
    {
      nombre: " Vestido de baño",
      descripcion:
        "Vestido de baño de una pieza, de un hermoso color, perfecto para estas vaciones.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ve3.webp?alt=media&token=37b24d12-0cc4-4528-882e-0ab028ac7a12",
      precio: "50.000",
      id: "20",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño de dos piezas, de un hermoso color, perfecto para ti.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/veee.jpg?alt=media&token=9cae555d-47b9-4346-ab44-de5de46b0a3c",
      precio: "50.850",
      id: "21",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño de dos piezas, de color rojo, ultimas unidades.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/v5.jpg?alt=media&token=9cd048d8-2eb6-45e2-b481-ea2c9ed5ae6a",
      precio: "60.000",
      id: "22",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Hermoso vestido de baño rojo, con cadenas para darle un toque especial.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ve6.jpg?alt=media&token=ed0c3e7e-d313-4175-af90-96ceb78e5721",
      precio: "68.000",
      id: "23",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño color rojo, con un hermoso estilo, perfecto para tus vaciones",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ve7.jpg?alt=media&token=1b2b1ef7-dedd-4fbb-9124-c274223eeecb",
      precio: "55.980",
      id: "24",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Hermoso vestido de baño, con estampado, que te quedaria perfecto.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/v8.jpg?alt=media&token=db62d750-b33b-48b7-9e3d-397fb48da447",
      precio: "50.900",
      id: "25",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño, de dos piezas con una hermosa combinacion de colores.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/v9.jfif?alt=media&token=8a2a7970-6899-4c3b-b813-bc4257b53ec2",
      precio: "50.900",
      id: "26",
    },
    {
      nombre: "Vestido de baño",
      descripcion:
        "Vestido de baño, de dos piezas con una hermosa combinacion de colores.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/v10.jfif?alt=media&token=b720e16b-bec7-4bf0-910d-386fccd4cf98",
      precio: "50.900",
      id: "27",
    },


    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo color azul claro, vienen tres piezas, tela algondon.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de1.jpg?alt=media&token=786d688a-5c5a-440e-81b9-823a72e3a75e",
      precio: "60.900",
      id: "28",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo color cafe, de licra, vienen en varios colores, en todas las tallas.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de2.webp?alt=media&token=20898659-42c4-40e8-b77a-a3239c31749b",
      precio: "50.900",
      id: "29",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Hermoso deportivo color cafe, en short, demasiado comodo, en licra.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de3.jpg?alt=media&token=da3aa81e-5eeb-4a6f-9702-04d4d8d5d34a",
      precio: "50.900",
      id: "30",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo en un hermoso color, en short, demasiado comodo, en licra.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de4.jpg?alt=media&token=6ba64a2b-61c2-457a-89ca-ed761ab96ebc",
      precio: "40.900",
      id: "31",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo en un hermoso color, en short, perfecto para ti.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de5.jpg?alt=media&token=c6eeb2df-f3c5-40f1-b091-56b0c88bc789",
      precio: "54.850",
      id: "32",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Hermoso deportivo en licra, de short, varios colores",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de6.jfif?alt=media&token=4eb2f710-979e-4c40-b184-9b088c83e6a6",
      precio: "40.000",
      id: "33",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Hermoso deportivo en falda de color blanca, con top de estampado para darle un hermoso toque.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de7.webp?alt=media&token=bf5bcad7-3bd9-40c7-bc40-cb9d9355a662",
      precio: "58.980",
      id: "34",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo en falda de hermoso color con estampado en el top, perfecto para ti.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de8.webp?alt=media&token=04cd304c-1343-4f3f-b137-012b442938ff",
      precio: "55.980",
      id: "35",
    },
    {
      nombre: "Camiseta Funy",
      descripcion:
        "Deportivo en falda de hermoso color con estampado en el top, perfecto para ti.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de9.jfif?alt=media&token=8a87cfbb-4738-4ee1-bdf3-0e23108e2ad4",
      precio: "50.900",
      id: "36",
    },
    {
      nombre: "Deportivo",
      descripcion:
        "Deportivo negro, en licra, ultimas unidades",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/de10.webp?alt=media&token=60cb9af3-52a7-451d-b05c-af2cb628e21b",
      precio: "50.900",
      id: "37",
    },

    {
      nombre: "Deportivo",
      descripcion:
        "Hermoso deportivo en falda de color blanca, con top de estampado para darle un hermoso toque.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/fal1.jpg?alt=media&token=200c750f-fdc6-441d-aedb-f96ceb689825",
      precio: "50.900",
      id: "38",
    },
    {
      nombre: "Faldas deportivas",
      descripcion:
        "Hermosa falda deportiva de color negro, con borde de color para un hermoso estilo",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/fal2.webp?alt=media&token=28f0beb7-e815-488b-a6cc-5dc869f67db6",
      precio: "30.900",
      id: "39",
    },
    {
      nombre: "Faldas deportivas",
      descripcion:
        "Hermosa falda en licra",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/fal3.webp?alt=media&token=a8ad864b-0932-4dc0-8780-af1bce893126",
      precio: "30.900",
      id: "40",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta1.jpg?alt=media&token=aedb0363-8ea2-4594-ae0f-2349bc34dcab",
      precio: "40.900",
      id: "41",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.C",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta2.jfif?alt=media&token=e70aba74-e092-411e-a4d3-66546ace9087",
      precio: "40.900",
      id: "42",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta3.jpg?alt=media&token=e0f21968-2d03-46dd-ba97-9af8a7cd2bd4",
      precio: "40.900",
      id: "43",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta4.jpg?alt=media&token=57fabab1-a9b0-4365-9ffe-9c1ead18b221",
      precio: "40.900",
      id: "44",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta5.jpg?alt=media&token=23885785-e99f-4ce9-a2b8-2751cf74b67e",
      precio: "40.900",
      id: "45",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta6.jpg?alt=media&token=638a1833-caa7-4402-a8d5-acd0808918f0",
      precio: "40.900",
      id: "46",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/t7.jpg?alt=media&token=ef2f6aae-6e2c-486b-bc9d-56419186be26",
      precio: "40.900",
      id: "47",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta8.jpg?alt=media&token=3c6cc004-97c5-42cb-ac07-e231ff0ef0b9",
      precio: "40.900",
      id: "48",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta9.webp?alt=media&token=cc1c1ef9-874c-4b1f-a34e-202381120b1d",
      precio: "40.900",
      id: "49",
    },
    {
      nombre: "Tacones",
      descripcion:
        "Nuevos estilos en tacon, de unos hermosos colores, en todas las tallas, con ellos luciras divina!.",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/ta10.webp?alt=media&token=99f622af-ca22-4467-84ce-8e1e9c1e6df2",
      precio: "40.900",
      id: "50",
    }
  ];
  return (
    <>
      <div className="container1">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/Captura%20de%20pantalla%20(12).png?alt=media&token=3fb8bbed-fe3f-485c-b0b5-2b68ffbbd0ad"
                className="d-block  w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/cass1.jpg?alt=media&token=dd760e97-cb5a-4d32-9de7-7f35ad9f6038"
                className="d-block  w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/combo.jpg?alt=media&token=85d5725e-0c1e-4fdc-9f5d-2cf888ad6db6"
                className="d-block  w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosyp.appspot.com/o/buso.jpg?alt=media&token=5de1fa68-3831-46b9-adb0-408ca55cfe79"
                className="d-block  w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

<div className="shop">
      <h1>Nuestros productos</h1>
      <div className="container3">
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {tienda.map(function (tienda) {
          return (
            <div key={tienda.id}>
              <div className="col card ">
                <div className="card h-100 shadow ">
                  <h3 className="text-center fw-bold card__overlay">{tienda.nombre}</h3>
                  <img src={tienda.foto} alt="" className=" card__image img-fluid w-100" />
                  <p className="mt-2 text-center card__header">{tienda.descripcion}</p>
                  <h4 className="mt-2 text-center card__arc">{tienda.precio}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </>
  );
}
