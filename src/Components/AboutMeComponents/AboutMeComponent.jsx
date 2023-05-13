import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import style from './style/AboutMeComponent.module.css';


function AboutMeComponent() {
  const [colorChanged, setColorChanged] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Ajusta el umbral de activación si es necesario
  });

  if (inView && !colorChanged) {
    setColorChanged(true);
  }

  return (
    <>
      <div id="about" className={style.curvedDiv}>
        <img className={`${style.photo} ${colorChanged ? style.colorChanged : 'red'}`} src="imgs/fotovane.jpg" />
        <p className={style.sobremi}>Colegiada 26550, Licenciada en Psicología (Universidad Internacional
          de la Rioja, España y Universidad San Buenaventura, Colombia),
          Máster en Neuropsicología Clínica (Institut Superior d´Estudis
          Psicològics), Máster en psicología General Sanitaria (Universidad a
          distancia de Madrid, UDIMA), Experta en Altas Capacidades y
          desarrollo del talento (Universidad Internacional de la Rioja),
          Postgrado en Intervención a Víctimas del Conflicto Armado
          (Universidad San Buenaventura Cali), Experta en Intervención
          emocional y conductual infantojuvenil y adulto. </p>



      </div>
    </>
  )
}
export default AboutMeComponent;