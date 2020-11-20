import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Última Notificação</Title>
      <Typography component="p" variant="h5">
        José Antônio 
        <Typography component="p" variant="h6">
        câmera: 07 <br/>
        processo: 048.21/20 <br/>
        </Typography>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        em 16 Março, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Balanço
        </Link>
      </div>
    </React.Fragment>
  );
}
