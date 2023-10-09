import './Home.css';
import React from 'react';
import Typewriter from 'typewriter-effect';
import TextTransition, { presets } from 'react-text-transition';
const TEXTS = ['CyberSecurity Engineer', 'Web-Developer', 'Mern-Stack Devloper'];
function Home ()
{
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
      },[]);
    return(
        <div className="Home">
            <div className="Background">
                <div className='Wrapper_grid'>
                    <div className='Content1'>
                        <div className='IntroText'>
                 
                        <div>
                        Hi I am
                        <Typewriter
                            
                            onInit={(typewriter) => {
                            typewriter.typeString('Prasanna Patel')
                                
                                .pauseFor(2500)
                                
                                .start();
                            }}
                            />
                            
                        </div>
                        <p className='subtext'> 
                             <TextTransition springConfig={presets.wobbly} className='highlight'>a {TEXTS[index % TEXTS.length]}</TextTransition> 
                        </p>
                        </div>
                        
                    </div>
                    <div className='Content2'> 

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home