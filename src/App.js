import React from 'react'
import {ScrollDownIndicator} from 'react-landing-page'
import NestedGrid from './components/landingComp'
import Second from './components/secondpage'
import Particls from './components/particle'
import CarouselView from './components/carousel'
import ColorTransition from './components/colortransition'
import MyMenu from './components/navbar'


import Solutions from './components/solutions';
import ScrollToTop from 'react-scroll-up'
import Particles from 'reactparticles.js'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
const App = props => (

        <React.Fragment>
  
      <div className="zstyle" >
      <Bounce top>
      <MyMenu />
      <NestedGrid />
      </Bounce>
     
      <Second />
  
      <Fade left>
      <CarouselView />
      </Fade>
     
      <ColorTransition />
      <Solutions />
         
      <ScrollToTop showUnder={160}>

      <span>UP</span>
    </ScrollToTop>
      </div>
      
      <Particles id="test" config="test-particles.json"/>
     
      </React.Fragment>
      

)

export default App;




