import React, { useEffect, useState } from "react";
import {
  AppBar,
  MenuItem,
  Paper,
  TextField,
  Toolbar,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import { useUserDispatch, useUserState } from "../context";
import curdApi from "../helper/curdApi";
import { notification } from "../helper/notifications";
import CustomDialog from "./dialog";
import Fuse from "fuse.js";
import TableCustom from "./table";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { USER_LOGOUT } from "../reducer/UserAction";
import auth from "../helper/auth";

const Cites = () => {
  const classes = useStyles();
  const user = useUserState().user;
  const dispatchUser = useUserDispatch();
  const [province, setProvince] = useState();
  const [cities, setCities] = useState();
  const [provinces, setProvinces] = useState();
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [fullInformation, setFullInformation] = useState();
  const [state, setState] = useState({
    pageSize: 10,
    pageNumber: 1,
    data: [],
    is_fetch: true,
  });
  const numbers = [
    {
      value: 5,
      id: 0,
    },
    {
      value: 8,
      id: 1,
    },
    {
      value: 10,
      id: 2,
    },
    {
      value: 15,
      label: 3,
    },
  ];
  useEffect(() => {
    curdApi.getProvinces({}).then((content) => {
      setProvinces(content.data);
    });

    curdApi.getCities({}).then((content) => {
      setCities(content.data);
    });

    setUpdate(false);
  }, [update]);
  const fuse =
    provinces &&
    new Fuse(provinces, {
      keys: ["title"],
      includeScore: true,
    });
  const handleChangePageSize = (event, page) => {
    setState((prevState) => ({
      ...prevState,
      is_fetch: true,
      pageNumber: 1,
      pageSize: event.target.value,
    }));
    setUpdate(!update);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    if (!!search && search !== undefined) {
      const val = fuse.search(search);
      const results = val.map((character) => character.item.title);
      setSearchResult(results);
    }
  };
  const handleLogout = () => {
    dispatchUser({
      type: USER_LOGOUT.SUCCESS,
    });
    window.location.reload(false);
  };
  const getItem = (x) => {
    let res = [];
    x.map((item) => {
      provinces.map((elm) => {
        if (item === elm.title) {
          res.push(elm);
        }
      });
    });
    return res;
  };
  const values = searchResult ? getItem(searchResult) : provinces;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <img
            src="https://tipaxco.com/UI/Styles/Default/images/logo.svg"
            alt="logo"
            width="100px"
          />
          <div className={classes.user}>
            <Typography variant="h5" className={classes.text}>
              {user?.userName}
            </Typography>
            <IconButton
              aria-label="log-out"
              onClick={handleLogout}
              color="primary"
            >
              <ExitToAppIcon color="disabled" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Paper elevation={0} className={classes.paper}>
        {!fullInformation ? (
          <Grid container spacing={3}>
            <Grid item xs={6} className={classes.grid}>
              <div className={classes.content}>
                <CustomDialog
                  search={search}
                  handleClick={handleClick}
                  provinces={values}
                  handleChange={handleChange}
                  setProvince={setProvince}
                  setUpdate={setUpdate}
                />
              </div>
            </Grid>
            <Grid item xs={6} className={classes.grid}>
              <TextField
                id="standard-select-currency"
                select
                value={state?.pageSize}
                className={classes.input}
                onChange={handleChangePageSize}
                helperText="تعداد هر رکورد را مشخص کنید"
              >
                {numbers.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.value}
                    className={classes.item}
                  >
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {province && (
              <TableCustom
                cities={cities}
                province={province}
                state={state}
                setState={setState}
                update={update}
                setUpdate={setUpdate}
                setFullInformation={setFullInformation}
              />
            )}
          </Grid>
        ) : (
          <div className={classes.choose}>
            <Typography variant="body" className={classes.text}>
              شهر و استان انتخاب شده توسط کاربر:
            </Typography>
            <br />
            <Typography variant="h5" className={classes.text}>
              {fullInformation}
            </Typography>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Cites;
