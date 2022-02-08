import{React,useState} from 'react';
import { FormGroup,FormControl,Input,InputLabel,Button,Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {addCricketer} from "../Service/Api"
import {useNavigate } from "react-router-dom"
const useStyle=makeStyles({
  container:{
    width:'50%',
    margin:'5% 0 0 25%',
'& > *':{
  marginTop:'20px'
}
  }
})


const initialValues={
  name:"",
  username:"", 
  email:"",
  phone:""
}

function AddCricketer() {
  const[cricketer, setCricketer]=useState(initialValues)
  const{name, username,email,phone}=cricketer
  const classes=useStyle()
   
  // Defining the history function to navigate it to the home page  after adding users
  const history=useNavigate ()

// definning the form control function
const onValueChange=(e)=>{
  setCricketer({...cricketer,[e.target.name]:e.target.value})
  console.log(cricketer);
}

// defining the imported function to post the api in an object
const addCricketerDetails=async ()=>{
  await addCricketer(cricketer)
  history.push('./all');
}

  return (
      <>
      <FormGroup className={classes.container}>
      <Typography varient="h4" >Add cricketer</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>        
        </FormControl>

        <FormControl>
          <InputLabel>Username </InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>      
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="email"  value={email}/>     
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=>onValueChange(e)} name="phone"  value={phone}/>      
        </FormControl>
        <Button variant="contained" color="primary" onClick={()=>addCricketerDetails()} >Add Cricketer</Button>
      </FormGroup>
      </>
  )
}

export default AddCricketer;
