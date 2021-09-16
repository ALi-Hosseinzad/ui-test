import React from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from "../login/styles";
import { useUserState } from "../context";
import { Link } from "react-router-dom";
import moment from "jalali-moment";

const Account = () => {
  const classes = useStyles();
  const user = useUserState().user;

  const covertToPersianDateTime = (item) => {
    if (item && item !== undefined) {
      return moment
        .utc(moment.utc().format(item))
        .locale("fa")
        .local()
        .format("H:mm YYYY/MM/DD ");
    } else {
      return "";
    }
  };
  // console.log(user);
  return (
    <div className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        <div className={classes.content}>
          <div className={classes.image}>
            <img
              src="https://tipaxco.com/UI/Styles/Default/images/logo.svg"
              alt="logo"
              width="50%"
            />
          </div>
          <Typography variant="h5" className={classes.text}>
            {user?.userName} {"عزیز خوش آمدید"}
          </Typography>
          <Typography variant="body1" className={classes.text2}>
            {"ایمیل شما"} : {user?.email}
          </Typography>
          <Typography variant="body1" className={classes.text2}>
            {"آخرین ورود شما "} : {covertToPersianDateTime(user?.lastLoginDate)}
          </Typography>
          <div className={classes.part}>
            <Typography variant="body1" className={classes.text}>
              {"برای ورود به صفحه انتخاب شهرها بر روی دکمه زیر کلیک کنید "}
            </Typography>
            <Link to={"/cites"}>
              <Button variant="contained" className={classes.btn}>
                {"شهرها"}
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Account;
