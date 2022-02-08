import {React,useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getCricketer } from '../Service/Api';
import {Button }  from '@mui/material';
import './Home.css'
import {Link} from "react-router-dom";
import {deleteCricketer} from '../Service/Api'

function Home() {
  const[cricketers,setCricketers]=useState([]);
  useEffect(()=>{
    getAllCricketer()
  },[])
  const getAllCricketer=async ()=>{
   const response=await getCricketer();
   console.log(response.data);
   setCricketers(response.data);
  }


// creating ddeleting function
const deleteCricketerData= async (id)=>{
  await deleteCricketer(id)
  getAllCricketer();
}

  return (
      <>
      <Table >
        <TableHead >
          <TableRow className='thead'>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            cricketers.map(cricketer=>(
             <TableRow>
               <TableCell>{cricketer.id}</TableCell>
               <TableCell>{cricketer.name}</TableCell>
               <TableCell>{cricketer.username}</TableCell>
               <TableCell>{cricketer.email}</TableCell>
               <TableCell>{cricketer.phone}</TableCell>
               <TableCell>
                 <Button variant="contained" color="primary" style={{marginRight:10}} LinkComponent={Link} to={`/edit/${cricketer.id}`} >Edit</Button>
                 <Button variant="contained" color="secondary" onClick={()=>deleteCricketerData(cricketer.id)} >Delete</Button>
               </TableCell>
             </TableRow>
            ))
          }
        </TableBody>
      </Table>
      </>
  )
}

export default Home;
