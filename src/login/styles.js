import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    padding: "36px 15px 10px",
    background: "url(../img/bg-sign-up.jpg) no-repeat 50% 50%/cover",
    WebkitBoxOrient: "vertical",
    WebkitBoxDirection: "normal",
    MsFlexDirection: "column",
    flexDirection: "column",
    color: "white",
  },

  buttonWrapperLogin: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white" },
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
    maxWidth: "500px",
    margin: " auto",
    backgroundColor: "#33936E !important",
    WebkitBoxShadow:
      " 0 16px 22px -10px rgba(0, 0, 0, 0.1), 0 34px 55px 4px rgba(0, 0, 0, 0.05), 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
    boxShadow:
      "0 16px 22px -10px rgba(0, 0, 0, 0.1), 0 34px 55px 4px rgba(0, 0, 0, 0.05), 0 13px 66px 12px rgba(0, 0, 0, 0.07)",
    borderRadius: "12px",
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
  },
  input: {
    width: "100%",
    height: "64px",
    background: "none",
    fontSize: "22px",
    color: "white",
    textAlign: "center",
    "& .MuiInput-underline::before": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    "& .MuiInput-underline::after": {
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },

    "& .MuiInputBase-input::placeholder": {
      fontSize: "22px",
      color: "white",
      textAlign: "center",
    },
  },
  btn: {
    minWidth: "234px !important",
    height: "50px !important",
    background: " white !important",
    borderRadius: "25px !important",
    fontSize: "20px !important",
    fontWeight: "700 !important",
    color: "#33936E !important",
    letterSpacing: "-0.3px !important",
    WebkitTransition: "opacity .2s !important",
    OTransition: "opacity .2s !important",
    transition: "opacity .2s !important",
  },
}));
