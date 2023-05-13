import style from './style/ServicesComponent.module.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaWhatsapp } from 'react-icons/fa';


function ServicesComponent() {
  return (
    <>
      <div className={style.curvedDiv}></div>
      <div id='services'>
        <div className={style.divJustify}>
          <h3 className={style.titleHealth}>Porque ir a terapia...</h3>
        </div>
        <p className={style.health}>La salud mental es un estado dinámico que se ve reflejado en nuestra vida cotidiana, esto incluye la forma en que nos comportamos e interactuamos con el entorno, para ello las personas necesitan recursos emocionales, cognitivos y mentales que permitan establecer relaciones, vínculos, límites adecuados, fijar metas y objetivos. Cuidar de la salud mental ayuda a que estos recursos tan necesarios para que la vida funcione de acuerdo a los estándares de cada persona, sean fortalecidos; es por ello que ir a terapia no significa tener un trastorno o problema mental, significa cuidar de nosotros y pensar en que cada persona puede tener la vida que desee y con la que se sienta a gusto.</p>
      </div>
      <h2 className={style.titleCard}>Servicios</h2>
      <div>
        <img className={style.background} src="imgs/segundofondo.png" alt="" />
        <div className={style.cardContainer}>
          <div className={style.cards}> 
      <div>
        <h5 className={style.titleServicioUno}>  Psicoterapia para niños, jovenes y adultos</h5>
        <div style={{ marginLeft: '-15%', width: '40%' }}><p>Sesiones de terapia con enfoque clinico donde podrás trabajar procesos de duelo, depresión, ansiedad, fobias.</p></div>
        <Button className={style.buttonMore}>Leer más</Button>
        <img className={style.imgTerapia} src="imgs/psicoterapia.jpg" widht='300px' height='300px' alt="" />
      </div>
          </div>
        </div>
      </div>
<div>
<div>
        <h5 className={style.titleServicioDos}>  Terapia grupal y talleres de habilidades sociales para niños y jóvenes</h5>
        <div style={{ marginLeft: '60%', width: '40%' }}><p>Sesiones de terapia grupal en el cual podras tener un apoyo grupal sobre las probleticas que quieras trabajar</p></div>
       
        <Button className={style.botonServicioDos}>Leer más</Button>
         <img className={style.imgTerapiaGrupal} src="imgs/terapiagrupal.jpg" widht='300px' height='300px' alt="" /> 
      </div>
</div>
      {/*     <div className={style.cardsTwo}>
            <h3 className={style.titleCardTwo}>SECCION DE TERAPIA PRESENCIAL Y VIRTUAL</h3>
            <p style={{ marginTop: '30px', textAlign: 'center' }}></p>
            <Button className={style.buttonMore}>Leer más</Button>
          </div> */}
    </>
  );
}

export default ServicesComponent;
