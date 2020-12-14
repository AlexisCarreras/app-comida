import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AsistenteCompra from './AsistenteCompra';

const useStyles = makeStyles({
  root: {
    paddingTop: '10rem',
    },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs,) {
  return { name, calories, fat, carbs, };
}

const rows = [
  createData(null, null, null, null),
  createData(null, null, null, null),
  createData(null, null, null, null),
];

export default function AcccessibleTable() {
  const classes = useStyles();

  return (
    <div>
    <AsistenteCompra />
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Descripción</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Eliminar</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
