import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';

// Generate Order Data
function createData(id, date, name, place, number, status) {
  return { id, date, name, place, number, status };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', '02 - Portão C', '0582.6842/46', 'Detido'),
  createData(1, '16 Mar, 2019', 'Paul McCartney', '08 - Entrada D', '0692.9685/87', 'Fugiu'),
  createData(2, '16 Mar, 2019', 'Tom Scholz', '03 - Portão E', '3658.1472/11', 'Detido'),
  createData(3, '16 Mar, 2019', 'Michael Jackson', '05 - Arquibancada Leste', '0035.6678/23', 'Fugiu'),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', '10 - Saída Sul', '5919.0047/21', 'Detido'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Notificações Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Câmera</TableCell>
            <TableCell>Processo Número</TableCell>
            <TableCell align="right">Desfecho</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.number}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Veja mais notificações
        </Link>
      </div>
    </React.Fragment>
  );
}