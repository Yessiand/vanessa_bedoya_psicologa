// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/FooterComponent.module.css';

export default function FooterComponent() {
    return (
        <footer>
            <>
                <div className={style.footerIntro}>
                    <picture>
                        <a href="#">
                            <img src="" alt="" className={style.footerLogo} />
                        </a>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus dolore aspernatur eius quasi illo illum asperiores nisi placeat voluptates officia, omnis temporibus fugit unde odio cum molestiae. Nulla, labore.</p>
                        </div>
                        <div className={style.medialSocial}>
                         {/*    <FontAwesomeIcon icon="fa-brands fa-twitter" className='icon-footer' />
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className='icon-footer' />
                            <FontAwesomeIcon icon="fa-brands fa-facebook-f" className='icon-footer' />  */}
                        </div>

                    </picture>

                </div>
                <div className={style.footerProduct}>
                    <h2>Servicios</h2>
                    <ul>
                        <li>Psicoterapia individual</li>
                        <li>Psicoterapia grupal</li>
                    </ul>
                </div>
                <div className={style.footerContact}>
                    <h2>Contactame</h2>
                    <p>Direccion</p>
                    <p>Telefono</p>
                    <p>Email</p>
                    
                   
                </div>

                <div className={style.footerCopyright}>
                    {/* <p> Barcelona-España <FontAwesomeIcon icon="fa-solid fa-heart" className='icon-heart'/>  </p>  */}
                </div>
            </>

        </footer>

    )
}