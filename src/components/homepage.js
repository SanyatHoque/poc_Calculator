import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Checkbox from '@material-ui/core/Checkbox';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { differenceInDays, parse, addDays, format } from "date-fns";
import firebase from '../firebase';
import {Searchbox} from './searchbox';
import Dashboard from './Dashboard';
import './App.css';
// import {Last5} from './components/last5.jsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  heading: {
    textAlign: 'center',
  },
}));

function Homepage() {
  const classes = useStyles();
  const [selectedName, setSelectedName] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedDate2, setSelectedDate2] = React.useState(null);
  const handleNameChange = (e) => {
    setSelectedName(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange2 = (date2) => {
    setSelectedDate2(date2);
  };
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const handleCheckbox = (event) => {
    setChecked(true);
  };
  const handleCheckbox2 = (event) => {
    setChecked2(true);
  };
  const handleCheckbox3 = (event) => {
    setChecked3(true);
  };
  const handleClear = () => {
    setSelectedDate(null);
    setSelectedDate2(null);
  };
  // function useData() {
  const [data,setData] = React.useState([])
  const [name,setName] = React.useState('')
  React.useEffect(() => {
    const unSubscribe = firebase
      .firestore()
      .collection('collection_info')
      .onSnapshot((snapshot)=>{
         const newData = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                        }))
                        setData(newData)
                      })
                  return () => unSubscribe()
      },[])
      console.log('dataLength',data.length)
      // console.log("database_length",firebase.firestore().collection('collection_info').length)
      //     return data
      // }
  function handleSubmit(event) {
    event.preventDefault();
    console.log( selectedDate, selectedDate2); 
      var dubdays = differenceInDays(selectedDate, selectedDate2);
      console.log(dubdays);
      if (isNaN(dubdays) && checked2==false && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (isNaN(dubdays) && checked2==false && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (isNaN(dubdays) && checked2==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC from 48 hours after high risk exposure");
      } else if (isNaN(dubdays) && checked2==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC from 48 hours after high risk exposure");
      } else if (dubdays >= 0 && checked==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==false && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==false && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==true && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate2, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays >= 0 && checked==false && checked2==true && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate2, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate2, -2), "dd MMM yyyy"));
      } else if (dubdays < 0 && checked3==false) {
        alert("ISO: End of " + format(addDays(selectedDate, 10), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      } else if (dubdays < 0 && checked3==true) {
        alert("ISO: End of " + format(addDays(selectedDate, 20), "dd MMM yyyy") + "\nPOC: from " + format(addDays(selectedDate, -2), "dd MMM yyyy"));
      };

        firebase
        .firestore()
        .collection('collection_info')
        .add({
          id:data.length+1,
          selectedName: selectedName.toLocaleLowerCase(),
          selectedDate,
          selectedDate2,
          checked,
          checked2,
          checked3
        })
        .then(()=>{
          setSelectedName('')
          setSelectedDate(null)
          setSelectedDate2(null)
          setChecked(false)
          setChecked2(false)
          setChecked3(false)
        })

}
  return (
    <div className="homepage_main">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Searchbox data={data} name={name}/> 
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.heading}>
          Ontario COVID-19 Isolation End Date and POC Calculator
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <TextField 
              margin="normal"
              id="standard-basic"
              label="Patient Name"
              // format="dd MMM yyyy"
              value={selectedName}
              onChange={handleNameChange}
              // KeyboardButtonProps={{
              //   'aria-label': 'change date',
              // }}
              // rifmFormatter={val=> val.replace(/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi, '')}
              // refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi} 
              style={{width:"62%"}}    //"32vw"
              required
              />
            </Grid>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Lab Collection Date"
                format="dd MMM yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                onInput={ e=>setSelectedDate(e.target.value)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                rifmFormatter={val=> val.replace(/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi, '')}
                refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi} 
                required
              />
            </Grid>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog2"
                label="Symptom Onset Date"
                format="dd MMM yyyy"
                value={selectedDate2}
                onChange={handleDateChange2}
                onInput={ e=>setSelectedDate2(e.target.value)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                rifmFormatter={val=> val.replace(/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi, '')}
                refuse={/[^\.\ \,\[a-zA-Z0-9_]*$]+/gi} 
              />
            </Grid>
            <Grid className="checkboxlabel">
                <Checkbox
                  checked={checked}
                  onChange={handleCheckbox}
                  name="checked"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <span>Symptoms present at the time of testing</span>
              </Grid>
                    <Grid className="checkboxlabel">
                <Checkbox
                  checked={checked2}
                  onChange={handleCheckbox2}
                  name="checked2"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <span>High risk exposure 14 days before test date</span>
              </Grid>
              <Grid className="checkboxlabel">
                <Checkbox
                  checked={checked3}
                  onChange={handleCheckbox3}
                  name="checked3"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <span>Immunocompromised</span>
              </Grid>
          </MuiPickersUtilsProvider>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  SUBMIT
                </Button>
        </form>
        <Button
            type="clear"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => { handleClear(); }}
          >
            CLEAR
          </Button>
      </div>
      <Dashboard/>
      <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © Gopal Manikumar, M.D.'}
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
    </div>
  );
}

export default Homepage;