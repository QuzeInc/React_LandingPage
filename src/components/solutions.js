import React,{Component} from 'react';
import Section from 'react-landing-page/dist/atoms/Section';
import Grid from '@material-ui/core/Grid';

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    background:'white'
  };

class Solutions extends Component{  
   
    render(){
        return (
            <div>
           <Grid container spacing={8} alignItems="center"   style={{ minHeight: '75vh' }}> 
           <Grid item xs={12}   sm={6} className="lg" style={{ minHeight: '150vh' }}>
           <div style={{marginTop:"10px"}}>
          <h1  className="m">QUZE </h1>
          <h1  className="m">Solutions </h1>
 
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          
        </div>
           </Grid>
           <Grid item xs={12}   sm={6}   style={{ minHeight: '75vh' }}>
           <Grid item xs={12}   style={{ minHeight: '75vh' }}>
           <div id="mydiv" style={{ margin:'40px',
    border: '5px solid pink',
    background:'white'}} 
    className="ht"
   >
    Jack and Jill went up the hill 
    To fetch a pail of water. 
    Jack fell down and broke his crown, 
    And Jill came tumbling after. 
    </div>
           </Grid>
           <Grid item xs={12}  className="rbg" style={{ minHeight: '75vh' }}>
           </Grid>
           </Grid>
           </Grid>  
            </div>
        );
    }
}

export default Solutions;