import React,{Component} from 'react';

import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';

class Second extends Component{
  
    render(){
        return (
            <section className="secondstyle" >
             <LightSpeed>
                 <Zoom top>
             <div>
              <h1 >Quze is</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             
             </div>
             </Zoom>
             </LightSpeed>
           </section> 
        );
    }
}

export default Second;

//<div class="row-bg-overlay" style="background: rgba(9,184,92,0.88); background: linear-gradient(to bottom,rgba(9,184,92,0.88) 0%,#09b85c 100%);  opacity: 0.8; "></div>