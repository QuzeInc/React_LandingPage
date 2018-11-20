import React from 'react'
import {ScrollDownIndicator} from 'react-landing-page'
import NestedGrid from './components/landingComp'
import Second from './components/secondpage'
import Particls from './components/particle'
import CarouselView from './components/carousel'
import ColorTransition from './components/colortransition'

const App = props => (

        <React.Fragment>
     
      <div className="zstyle" >
      <NestedGrid />
      <Second />
      <CarouselView />
      <ColorTransition />
       </div>
       <Particls className ="tito0" />
       <ScrollDownIndicator />      
      </React.Fragment>
      
 
)

export default App;




