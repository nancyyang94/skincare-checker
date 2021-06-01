import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  rootBlur: {
    filter: 'blur(5px)',
  },

  hideDialog: {
    display: 'none',
  },

  image: {
    backgroundImage: 'url(https://source.unsplash.com/collection/35446653/1200x900)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  card: {
    backgroundColor: 'pink',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    padding: '75px',
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  title1: {
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: '60px',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px',
  },

  title2: {
    fontFamily: 'Raleway',
  },

  modal : {
    position: 'fixed',
    width: '650px',
    maxWidth: '100%',
    height: '300px',
    maxHeight: '100%',
    top: '50% !important',
    left: '50% !important',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.2)',
    borderRadius: '.3rem',
    textAlign: 'center',
  },

  modalShort: {
    height: '150px',
  },

  modalTitle: {
    textAlign: 'center',
    fontFamily: 'Raleway',
    fontWeight: '600',
    fontSize: 'xx-large',
  },

  dialog: {
    backgroundColor: "transparent",
    boxShadow: "none",
    overflow: "hidden"
  },

  dialogContent: {
    fontFamily: "Raleway",
    fontSize: "large",
    textAlign: "center",
    paddingLeft: '40px',
    paddingRight: '40px',
  },

  buttons: {
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'space-between',
    fontFamily: "Raleway",
  },

  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;