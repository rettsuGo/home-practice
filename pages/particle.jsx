import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Styles from '../styles/Home.module.css'


const App = () => {
    const particlesInit = async (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
    return (

        <Particles
        id={Styles.tsparticles}
        init={particlesInit}
        loaded={particlesLoaded}
        options={
            {"fullScreen": {
                    "enable": false,
                    "zIndex": 1
                },
                "particles": {
                    "number": {
                        "value": 6,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#A7F1FF"
                    },
                    "shape": {
                        "type": "polygon",
                        "polygon": {
                            "sides": 6
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": {
                            "enable": true,
                            "minimumValue": 0.3
                        },
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 80,
                        "random": {
                            "enable": true,
                            "minimumValue": 100
                        },
                        "anim": {
                            "enable": false,
                            "speed": 5,
                            "size_min": 40,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 200,
                        "color": "#C9FF2F",
                        "opacity": 1,
                        "width": 2
                    },
                    "move": {
                        "enable": true,
                        "speed": 8,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 300,
                            "duration": 2,
                            "size": 40,
                            "opacity": 0.8,
                            "speed": 3,
                            "color": "#ff0000"
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                
            }}
        />
    );  }

export default App;