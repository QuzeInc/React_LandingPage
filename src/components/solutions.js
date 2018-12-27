import React,{Component} from 'react';
import Section from 'react-landing-page/dist/atoms/Section';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    background:'white'
  };

class Solutions extends Component{  
   
    render(){
        return (
            <div>
           <Grid container spacing={8} alignItems="center"   style={{ minHeight: '100vh' }}> 
           <Grid item xs={12} alignItems="center"  sm={6}  style={{ minHeight: '100vh' }}>
           <div style={{marginTop:"10px"}}>
         
         <Fade left> <h1 style={{marginLeft:'25px'}} className="m">QUZE Solutions </h1> </Fade>
        <Fade bottom>  <p style={{marginLeft:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacinia nisl a viverra ullamcorper. Nam risus erat, finibus vitae mi et, convallis faucibus ante. Donec eu justo fermentum, vestibulum justo eu, varius purus. Integer fermentum fringilla augue, nec dictum massa. Morbi non ipsum tristique, dignissim lacus quis, ultricies odio. Maecenas eu faucibus dui. Morbi tristique lorem dolor, ac mollis tellus eleifend quis. Nullam eget mollis tellus, at egestas sem. Praesent id leo sem. Aenean porttitor quam ante, ut semper elit mattis eget. Quisque felis metus, porta quis placerat a, lobortis at purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Duis commodo massa purus, sit amet malesuada nibh bibendum sagittis. Proin in lacus aliquam enim rutrum feugiat non faucibus diam. Aenean scelerisque eu purus id elementum. </p></Fade>
          
        </div>
           </Grid>
           <Grid item xs={12}   sm={6}   style={{ minHeight: '100vh' }}>
           <Grid item xs={12}   style={{ minHeight: '50vh' }}>
           <div className="grid">
	<Fade bottom>
    <div className="card card__one" style={{marginTop:'25px'}}>
		<figure className="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg" width="340" height="280" />
		</figure>
		<div className="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tempora.
		</div>
	</div>
    </Fade>
    <Fade bottom>
    <div className="card card__one" style={{marginTop:'25px'}}>
		<figure className="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg" width="340" height="280" />
		</figure>
		<div className="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tempora.
		</div>
	</div>

	</Fade>
	
</div>
           </Grid>
           <Grid item xs={12}   style={{ minHeight: '50vh' }}>
<div class="grid">
	<Fade bottom>
    <div className="card card__one" style={{marginTop:'25px'}}>
		<figure className="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg" width="340" height="280" />
		</figure>
		<div className="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tempora.
		</div>
	</div>
    </Fade>
    <Fade bottom>
    <div className="card card__one" style={{marginTop:'25px'}}>
		<figure className="card__img">
			<img src="https://res.cloudinary.com/jasonheecs/image/upload/v1479748567/card-hover/photo-1.jpg" width="340" height="280" />
		</figure>
		<div className="card__desc">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tempora.
		</div>
	</div>

	
	</Fade>
</div>
           </Grid>
           </Grid>
           </Grid>  
            </div>
        );
    }
}

export default Solutions;