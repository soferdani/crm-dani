import React from 'react'
import {observer, inject } from 'mobx-react'
import data from '../../react-crm-starter-data/data' //asinc later !!Bring data!!
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

function createData(id, name, email, firstContact, emailType, sold, owner, country) {
    return {id, name, email, firstContact, emailType, sold, owner, country };
}

//materialUi style


const ClientMain = inject('alldata')(observer((props) => { 
    const classes = useStyles();

    for (let i in data) {
        props.alldata.addClient(data[i])
    }

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

        // <div>
        //     this is client
        // </div>
    )
}))
    
export default ClientMain
    
