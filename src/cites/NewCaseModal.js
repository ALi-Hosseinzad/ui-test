import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, OutlinedInput } from "@material-ui/core";
import useStyles from "./styles";
import curdApi from "../helper/curdApi";
import { notification } from "../helper/notifications";

export default function DeleteModal({
  open,
  handleClose,
  province,
  setUpdate,
}) {
  const classes = useStyles();
  const [values, setValues] = useState({
    pr: "",
    en: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleClick = () => {
    if (!!values.pr && values.en) {
      curdApi
        .getAdd({
          payload: {
            title: values.pr,
            fProvincesId: province,
            provinceCountryTitle: "ایران",
            latinName: values.en,
            jetId: "string",
            operatorId: 0,
            provinceTitle: "string",
          },
        })
        .then((res) => {
          notification(
            "موفقیت آمیز",
            "success",
            res?.message ? res.message : "با موفقیت اضافه شد"
          );
          handleClose();
          setUpdate(true);
        })
        .catch((error) => {
          notification(
            "Error",
            "danger",
            error?.message ? error.message : "An error occurred on the server"
          );
          handleClose();
          setUpdate(true);
        });
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.title}>
          {"آیا میخواهید این شهر را جدید  کنید"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <form className={classes.container}>
              <FormControl className={classes.input2} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment"
                  placeholder={"نام شهر جدید"}
                  onChange={handleChange}
                  value={values.pr}
                  name={"pr"}
                />
                <hr />
                <OutlinedInput
                  id="outlined-adornment"
                  placeholder={"نام شهر جدید به انگلیسی"}
                  onChange={handleChange}
                  value={values.en}
                  name={"en"}
                />
              </FormControl>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btn}>
            لغو
          </Button>
          <Button onClick={handleClick} className={classes.btn} autoFocus>
            بله
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
