import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../../src/images/Proyecto.jpg'),
    require('./../../../src/images/Electricidad.jpg'),
    require('./../../../src/images/Construccion.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class About3 extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                            <span className="text-primary large-title">20</span>
                                            <span className="large-title-info">Años de Experiencia</span>
                                        </div>
                                        <h3 className="font-weight-600">Liderando el progreso con energía y dedicación</h3>
                                        <p>Juntos, somos una fuerza imparable en la industria eléctrica. Con cada luz encendida y cada hogar iluminado, estamos haciendo una diferencia real en la vida de las personas. Sigamos trabajando con pasión y determinación para alcanzar nuestras metas y ser líderes en la innovación energética</p>
                                        <div className="author-info p-t20">
                                            <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="m-t0">Juan Carlos Torres</h4>
                                                <p>Architect &amp; Fundador</p>
                                            </div>
                                            <NavLink to="/about" className="site-button btn-effect m-b15"><span>Conónocenos</span></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About3;