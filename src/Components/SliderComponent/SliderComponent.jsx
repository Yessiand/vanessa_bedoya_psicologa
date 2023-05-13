// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/SliderComponent.module.css';

function SliderComponent() {
    return (
        <>
            <div id="home" className={style.container}>
                <img className={style.imgSlider} src='/imgs/primerfondo.jpg' alt="Imagen de fondo" />
                <div className={style.containerAnimation}></div>
                {<p className={`${style.text} ${style.textAnimation}`}>Un espacio para tu salud mental</p>}
            </div>


        </>
    )
}
export default SliderComponent;