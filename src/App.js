import React from 'react'
import {ScrollDownIndicator} from 'react-landing-page'
import NestedGrid from './components/first'
import Particls from './components/particle'
import DemoCarousel from './components/carou'


const App = props => (

        <React.Fragment>
     
      <div className="zstyle" >
      <NestedGrid />
      
      <DemoCarousel className="teno"/>
       </div>
       <Particls className ="tito0" />
       <ScrollDownIndicator />     
    
      </React.Fragment>
      
 
)

export default App;




