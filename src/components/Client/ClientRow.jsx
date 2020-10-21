import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


export default function ClientRow(props) { 
    // console.log(props);
    
    return (
        <TableRow key={props.value.id}>
                <TableCell component="th" scope="row">{props.value.id}</TableCell>
                <TableCell align="right">{props.value.name}</TableCell>
                <TableCell align="right">{props.value.email}</TableCell>
                <TableCell align="right">{props.value.firstContact}</TableCell>
                <TableCell align="right">{props.value.emailType}</TableCell>
                <TableCell align="right">{props.value.sold}</TableCell>
                <TableCell align="right">{props.value.owner}</TableCell>
                <TableCell align="right">{props.value.country}</TableCell>
        </TableRow>
      )
}