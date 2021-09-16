import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "36px 15px 10px",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    color: "white",
  },
  grid: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "40%",
    height: "84px",
    padding: "30px",
    background: "none",
    direction: "rtl",
    fontSize: "22px",

    textAlign: "center",
    "& .MuiInput-underline::before": {
      borderBottom: "1px solid white",
    },
    "& .MuiInput-underline::after": {
      borderBottom: "1px solid white",
    },
    "& .MuiFormHelperText-root": {
      textAlign: "right",
      color: "white !important",
      fontSize: "14px",
    },
    "& .MuiInputBase-input::placeholder": {
      fontSize: "22px",
      color: "white",
      textAlign: "center",
    },
    "& svg": {
      left: 0,
      right: "unset",
      color: "white !important",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
  input2: {
    direction: "rtl",
    width: "100%",
  },
  input3: {
    textAlign: "center",
    display: "block",
    margin: "20px",
    direction: "rtl",
    color: "white !important",
    "& fieldset": {
      borderColor: "white",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
  item: {
    direction: "rtl",
    textAlign: "right",
  },
  user: {
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonWrapperLogin: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
  },
  text: {
    color: "white",
  },
  text2: {
    color: "white",
    padding: "15px 0px",
  },
  titleLogin: {
    marginBottom: "25px",
    textAlign: "center",
    color: "white",
    marginTop: "25px",
  },
  form: {
    marginBottom: "20px",
  },
  part: {
    margin: "26px 10px",
  },
  paper: {
    width: "100%",
    maxWidth: "70%",
    margin: " auto",
    backgroundColor: "#33936E !important",
    WebkitBoxShadow:
      " 0 16px 22px -10px rgba(0, 0, 0, 0.1), 0 34px 55px 4px rgba(0, 0, 0, 0.05), 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
    boxShadow:
      "0 16px 22px -10px rgba(0, 0, 0, 0.1), 0 34px 55px 4px rgba(0, 0, 0, 0.05), 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
    borderRadius: "12px",
  },
  appBar: {
    backgroundColor: "#33936E !important",
  },
  toolBar: {
    backgroundColor: "#33936E !important",
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "32px",
  },
  content: {
    padding: "52px 36px 38px",
    textAlign: "center",
    display: "flex",
  },

  btn: {
    minWidth: "234px !important",
    height: "50px !important",
    background: " white !important",
    borderRadius: "25px !important",
    fontSize: "14px !important",
    fontWeight: "700 !important",
    color: "#33936E !important",
    letterSpacing: "-0.3px !important",
    WebkitTransition: "opacity .2s !important",
    OTransition: "opacity .2s !important",
    transition: "opacity .2s !important",
  },
  partB: {
    justifyContent: "space-evenly !important",
  },
  title: {
    textAlign: "end",
  },
  items: {
    cursor: "pointer",
  },
  dialog: {
    direction: "rtl",
  },
  btn2: {
    marginRight: "24px",
  },
  btnBase: {
    minWidth: "124px !important",
  },
  btn3: {
    backgroundColor: "green",
    color: "white",
  },
  formModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  textContact: {
    display: "flex",
    padding: "20px 0px",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  choose: {
    padding: "85px",
  },
}));
