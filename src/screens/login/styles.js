import { makeStyles } from '@material-ui/core/styles';
//import styled from 'styled-components';


// export const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: #12344a;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// export const LoginBox = styled.div`
//   height: 56vh;
//   width: 40vw;
//   border-radius: 8px;
//   border: 1px solid white;
//   filter: drop-shadow(4px 3px 9px rgba(250, 250, 200, 0.35));
// `;
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));