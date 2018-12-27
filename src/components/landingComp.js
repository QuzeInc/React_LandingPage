
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App.css'

import TextLoop from 'react-text-loop';
import FormDialog from '../components/subscribe';



const textanimationstyle = {
  fontSize :"32px",
  color: "blue",
  padding:"0px",
  margin:"0px",
  fontSize: "48px",
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
       <div style={{marginTop:"10px"}}>
          <img  src={window.location.origin + '/images/logo.png'} width={200} height={200}  />
          <h1  className="logotext">QUZE</h1>
        </div>
     </Grid>
     <Grid item xs={12}  sm={6}  >
     <div style={{marginLeft:"20%",marginTop:"40px"}}>
       <div className="aligntextstart">
         <TextLoop speed={1500}  style={textanimationstyle}>
           <div > QUZE</div>
           <span >CHART</span>
           <span >LEARN</span>
           <span >REACT</ span>
         </TextLoop>
       </div>
       <h1 className="aligntextstart">
         your future
       </h1>
       <br>
       </br> 
       <div className="aligntextstart">
         <p className="learndifferentstyle">
           Learn different
         </p>
         <p className="learndifferentstyle">
           Soon.
         </p>
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
      <Grid container spacing={8} alignItems="center"   style={{ minHeight: '75vh' }}> 
        <FormRow classes={classes}   />
        <FormDialog />
      </Grid>  
    </div>
  
</React.Fragment>
  );
}


export default withStyles()(NestedGrid);