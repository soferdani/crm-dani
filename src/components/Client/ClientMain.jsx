import React from 'react'
import {observer, inject } from 'mobx-react'
import ClientRow from './ClientRow'

//materialUi import
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//materialUi style

const ClientMain = inject('alldata')(observer((props) => { 
  const classes = useStyles();
  
    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">firstContact</TableCell>
              <TableCell align="right">emailType</TableCell>
              <TableCell align="right">sold</TableCell>
              <TableCell align="right">owner</TableCell>
              <TableCell align="right">country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.alldata.clients.map(c => <ClientRow key={c.id} value={c} ></ClientRow>)}
          </TableBody>
        </Table>
      </TableContainer>
    )
}))
    
export default ClientMain
    
