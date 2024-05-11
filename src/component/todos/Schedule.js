import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import '../todos_css/Schedule.css'

function Schedule(){
  const day = [' ', '월', '화', '수', '목', '금'];
  const time = [
    '9:00', '9:30', '10:00', '10:30', 
    '11:00', '11:30', '12:00', '12:30', 
    '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00', '18:30', '19:00'
  ]
  const empty = [
    ' ', ' ', ' ', ' ', ' '
  ]


    return(
        <div className='schedule'>
          <header className='scheduleH'>시간표</header>
          <div className='tableContainer'>
            <Table className='scheduleT'>
              <TableHead>
                <TableRow>
                  {day.map((v)=>(<TableCell className='headerT'>{v}</TableCell>))}
                </TableRow> 
              </TableHead>
              <TableBody>
                  {time.map((t)=>(
                    <TableRow>
                      <TableCell className='bodyT'>{t}</TableCell>
                      {empty.map(()=>(<TableCell></TableCell>))}
                    </TableRow>
                  ))}                 
              </TableBody>
            </Table>
          </div>
        </div>
    );
  }
  

export default Schedule;