import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Logo from './assets/footer-logo.png'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: 2,
   
    fontFamily: "Helvetica Neue",
  },
  body: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: "Helvetica Neue",
    padding: 2,
    borderLeft: '1px solid black',
    borderRight: '1px solid black'
  },
  
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      borderBottom: '1px solid black',
    '&:nth-of-type(odd)': {
      backgroundColor: 'lightgray',
      
    },
  },
}))(TableRow);

function createData(name, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
  return { name, monday, tuesday, wednesday, thursday, friday, saturday, sunday};
}

const rows = [
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),
  createData('John Smith', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job', 'Job'),


];

const useStyles = makeStyles({
  table: {
    minWidth: '100vw',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell align="center" style={{padding: 2}} >Penn Fire Protections</StyledTableCell>
            <StyledTableCell align="center" >10/05</StyledTableCell>
            <StyledTableCell align="center" >10/06</StyledTableCell>
            <StyledTableCell align="center" >10/07</StyledTableCell>
            <StyledTableCell align="center" >10/08</StyledTableCell>
            <StyledTableCell align="center" >10/09</StyledTableCell>
            <StyledTableCell align="center" >10/10</StyledTableCell>
            <StyledTableCell align="center" >10/11</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center" >Monday</StyledTableCell>
            <StyledTableCell align="center" >Tuesday</StyledTableCell>
            <StyledTableCell align="center" >Wednesday</StyledTableCell>
            <StyledTableCell align="center" >Thursday</StyledTableCell>
            <StyledTableCell align="center" >Friday</StyledTableCell>
            <StyledTableCell align="center" >Saturday</StyledTableCell>
            <StyledTableCell align="center" >Sunday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} align="center" style={{border: '1px solid black'}}>
              <StyledTableCell component="th" scope="row" align="center" contentEditable="true">
                <b>{row.name}</b>
              </StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.monday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true">{row.tuesday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.wednesday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.thursday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.friday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true"  >{row.saturday}</StyledTableCell>
              <StyledTableCell align="center" contentEditable="true" >{row.sunday}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}