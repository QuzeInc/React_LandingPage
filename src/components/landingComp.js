
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css'

import TextLoop from 'react-text-loop';
import FormDialog from '../components/subscribe'


const textanimationstyle = {
  fontSize :"32px",
  color: "blue",
  padding:"0px",
  margin:"0px",

};

const logoStyle = {
  fontSize: '15px',
  textAlign: 'center',

};

function FormRow(props) {
  const { classes } = props;

  return (
    <React.Fragment>
     <Grid item xs={12}   sm={6}  >
       <div style={{marginTop:"30px"}}>
          <img  src={window.location.origin + '/images/logo.png'} width={200} height={200}  />
          <h1  className="logotext">QUZE</h1>
        </div>
     </Grid>
     <Grid item xs={12}  sm={6}  >
     <div style={{marginLeft:"25%"}}>
       <div className="aligntextstart">
         <TextLoop speed={1500}  style={textanimationstyle}>
           <div > QUZE</div>
           <span >CHART</span>
           <span >LEARN</span>
           <span >REACT</ span>
         </TextLoop>
       </div>
       <h1 className="aligntextstart">
         Your Future
       </h1>
       <br>
       </br> 
       <div className="aligntextstart">
         <h1 className="learnsoonstyle">
           Learn Different
         </h1>
         <h1 className="learnsoonstyle">
           Soon.
         </h1>
      </div> 
      <br />
      <div  className="aligntextstart">
         <button className="getnotified">
            GET NOTIFIED
         </button>
      </div>
    </div>
   </Grid>

    </React.Fragment>
  );
}

FormRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

function NestedGrid(props) {
  const { classes } = props;

  return (
   <React.Fragment>
     <div style={logoStyle} className={classes.root}>
       <Grid container spacing={24} alignItems="center"   style={{ minHeight: '100vh' }}> 
        <FormRow classes={classes}   />
        <FormDialog />
      </Grid>  
    </div>
  
</React.Fragment>
  );
}


export default withStyles()(NestedGrid);