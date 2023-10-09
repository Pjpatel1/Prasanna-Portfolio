import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import './Home.css';
import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import TextTransition, { presets } from 'react-text-transition';
import Mypic from '../Images/Mypic.jpg';
const TEXTS = ['Graphic Deigner','Photographer','Videographer','CyberSecurity Engineer', 'Web-Developer', 'Mern-Stack Devloper'];

function AnimatedBackground()
{


        const [isOpen, setIsOpen] = useState(false);
        function toggle() {
          setIsOpen((isOpen) => !isOpen);
          console.log(isOpen)
        }

        // Email Validation
  
        
        const [email, setEmail] = useState('');
        const [isValid, setIsValid] = useState(true);
        const handleEmailChange = (e) => {
            const enteredEmail = e.target.value;
            setEmail(enteredEmail);
        
            // Regular expression for email validation
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
            // Check if the entered email matches the pattern
            setIsValid(emailPattern.test(enteredEmail));
          };
   

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
      },[]);

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return(
    <div>
        <div className="Navbar">
        <nav>
        <div className="logo">Prasanna</div>
        <ul className="menu">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Future Plans</a></li>
        </ul>
        <div className="toggle"></div>
        <script src="script.js"></script>   
    </nav>  
            
        </div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#003049",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <div className="Home">
            <div className="Background">
                <div className='Wrapper_grid'>
                    <div className='Content1'>
                        <div className='IntroText'>
                        <div>
                        Hi I am
                        <Typewriter
                            
                            onInit={(typewriter) => {
                            typewriter.typeString('Prasanna !')
                                
                                .pauseFor(2500)
                                
                                .start();
                            }}
                            />
                        </div>
                        <div className='subtext'> 
                             <TextTransition springConfig={presets.wobbly} className='highlight'>{TEXTS[index % TEXTS.length]}</TextTransition> 
                        </div>
                        </div>
                        <div className="ElevatedPitch">
                            I'm a web developer pursuing a Master's in Computer Engineering to become a cybersecurity expert. In our connected world, I'm committed to mastering security measures and protecting our digital space. Cybersecurity is a shared responsibility that involves all of us. Together, we can create a secure digital future where innovation thrives. Thank you for your support.
                        </div>
                        <div>
                            {
                                isOpen === true?
                                <div>
                                <div>
                                <input
                                        type="text"
                                        value={email}
                                        onChange={handleEmailChange}
                                        style={{ borderColor: isValid ? 'green' : 'red' }}
                                        className="EmailInput"
                                />
                                 {isValid ? (
                                                ""
                                            ) 
                                            : 
                                            (
                                                <p style={{ color: 'red' }}>Please enter a valid email address.</p>
                                            )}
                                       
                                 </div> 
                                 <div>
                                 <button className="StyledBtn">
                                            Join
                                        </button>
                                 </div>
                                </div>
                                    :
                                <div>
                                    <button onClick={()=> toggle()} className="IntouchBtn">
                                        Get in Touch
                                    </button>
                                </div>
                            }
                          
                        </div>
                    </div>
                    <div className='Content2'> 
                            <img className="Mypic" src={Mypic}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default AnimatedBackground