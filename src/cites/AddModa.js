import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import curdApi from "../helper/curdApi";
import { notification } from "../helper/notifications";
import {
  DialogContentText,
  FormControl,
  OutlinedInput,
  Slide,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { green } from "@material-ui/core/colors";
import useStyles from "./styles";
import clsx from "clsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddModal({
  open,
  handleClose,
  id,
  setUpdate,
  setFullInformation,
}) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState();
  const [city, setCity] = useState();
  useEffect(() => {
    if (!!id && id !== undefined) {
      curdApi
        .getId({ payload: {}, id: id })
        .then((content) => {
          setCity(content.data);
        })
        .catch((data) => {
          notification("error", "danger", data?.message || "SERVER ERROR");
        });
    }
  }, [id]);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleAdd = () => {
    setFullInformation(` ${city.provinceTitle} | ${city.title}`);
    setUpdate(true);
  };
  const handleEdit = () => {
    if (!!id && id !== undefined && city) {
      curdApi
        .update({
          payload: {
            title: search,
            fProvincesId: city.fProvincesId,
            latinName: city.latinName,
            jetId: city.jetId,
            operatorId: city.operatorId,
            provinceTitle: city.provinceTitle,
            provinceCountryTitle: city.provinceCountryTitle,
            id: id,
          },
        })
        .then((content) => {
          notification(
            "موفقیت آمیز",
            "success",
            content?.message || "با موفقیت ویرایش شد"
          );
          setOpenModal(false);
          handleClose();
          setUpdate(true);
        })
        .catch((data) => {
          notification("error", "danger", data?.message || "SERVER ERROR");
          setOpenModal(false);
          handleClose();
          setUpdate(true);
        });
    }
  };
  const handleDelete = () => {
    if (!!id && id !== undefined) {
      curdApi
        .delete({ payload: {}, id: id })
        .then((content) => {
          notification(
            "موفقیت آمیز",
            "success",
            content?.message || "با موفقیت حذف شد"
          );
          setOpenModal(false);
          handleClose();
          setUpdate(true);
        })
        .catch((data) => {
          notification("error", "danger", data?.message || "SERVER ERROR");
          setOpenModal(false);
          handleClose();
          setUpdate(true);
        });
    }
  };
  return (
    <div>
      {city && (
        <Dialog
          TransitionComponent={Transition}
          keepMounted
          open={open}
          onClose={handleClose}
          className={classes.dialog}
        >
          <DialogTitle id="alert-dialog-title">
            {" انتخاب ویرایش یا حذف شهر"}
          </DialogTitle>
          <DialogContent>
            <form className={classes.formModal}>
              <FormControl className={classes.input2} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment"
                  name={"city"}
                  onChange={handleChange}
                  defaultValue={city?.title}
                />
              </FormControl>
              <Button
                variant="contained"
                onClick={handleEdit}
                color="primary"
                className={clsx(classes.btn2, classes.btnBase)}
                autoFocus
              >
                {"ویرایش"}
                <EditIcon />
              </Button>
            </form>
            <div className={classes.textContact}>
              <Typography variant="body1">
                {"برای حذف شهر کلیک کنید"}
              </Typography>
              <Button
                variant="contained"
                onClick={() => setOpenModal(true)}
                color="secondary"
                className={classes.btnBase}
              >
                {"حذف"}
                <DeleteIcon />
              </Button>
              <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                className={classes.dialog}
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"آیا میخواهید شهر "}
                  {city.title}
                  {"حذف کنید؟"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    {
                      "آیا مطمئن هستید که میخواهید این شهر را حذف کنید ؟زیرا امکان بازگشت دوباره آن وجود ندارد و مسئولیت آن بر عهده خود شما هست"
                    }
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenModal(false)}
                    className={classes.btn}
                  >
                    لغو
                  </Button>
                  <Button onClick={handleDelete} className={classes.btn}>
                    موافقم
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div className={classes.textContact}>
              <Typography variant="body1">
                {"برای انتخاب این شهر کلیک کنید"}
              </Typography>
              <Button
                variant="contained"
                onClick={handleAdd}
                className={clsx(classes.btn3, classes.btnBase)}
              >
                {"انتخاب"}
                <AddIcon />
              </Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.btn}>
              لغو
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
