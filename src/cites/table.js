import React, { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  IconButton,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import CustomTable from "../customTable/CustomTable";
import Fuse from "fuse.js";
import AddModal from "./AddModa";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import NewCaseModal from "./NewCaseModal";

const Cites = ({
  province,
  cities,
  state,
  setState,
  update,
  setUpdate,
  setFullInformation,
}) => {
  console.log(province);
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false);
  const [openNew, setOpenNew] = useState(false);
  const [search, setSearch] = useState();
  const [list, setList] = useState();
  const [searchResult, setSearchResult] = useState();
  const [ID, setID] = useState();

  useEffect(() => {
    let id = [];
    if (province && province !== undefined) {
      cities?.map((item) => {
        if (province === item.fProvincesId) {
          id.push(item);
        }
      });
      setList(id);
    }
  }, [cities, province, state, update]);
  const handleChangePageNumber = (event, page) => {
    setState((prevState) => ({
      ...prevState,
      pageNumber: page + 1,
      pageSize: state?.pageSize,
    }));
    setUpdate(true);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick2 = () => {
    if (!!search && search !== undefined) {
      const val = fuse2.search(search);
      const results = val.map((character) => character.item.title);
      setSearchResult(results);
    }
  };
  const fuse2 =
    list &&
    new Fuse(list, {
      keys: ["title"],
      includeScore: true,
    });
  const getItem2 = (x) => {
    let res = [];
    x.map((item) => {
      list?.map((elm) => {
        if (item === elm.title) {
          res.push(elm);
        }
      });
    });
    return res;
  };
  const handleShowModal = (val) => {
    setID(val);
    setOpenAdd(true);
  };
  const TableOption = [
    {
      name: "number",
      title: "ردیف",

      render: (record, i, index) => (
        <Typography type="16m" color="textP">
          {index + 1}
        </Typography>
      ),
    },
    {
      name: "name",
      title: "نام شهر",

      render: (record, index) => (
        <Button
          onClick={() => handleShowModal(record.id)}
          color="primary"
          autoFocus
        >
          <Typography type="16m" color="textP">
            {record.title}
          </Typography>
        </Button>
      ),
    },
    {
      name: "latinName",
      title: "نام شهر به لاتین",

      render: (record, index) => (
        <Typography type="16m" color="textP">
          {record.latinName}
        </Typography>
      ),
    },
    {
      name: "province",
      title: "نام استان",
      render: (record, index) => {
        return (
          <Typography color="textP" type="16m">
            {record.provinceTitle}
          </Typography>
        );
      },
    },
    {
      name: "country",
      title: "نام کشور",
      render: (record, index) => {
        return (
          <Typography color="textP" type="16m">
            {record.provinceCountryTitle}
          </Typography>
        );
      },
    },
  ];

  return (
    <Grid item xs={12}>
      {province && (
        <div>
          <form className={classes.container}>
            <FormControl className={classes.input3} variant="outlined">
              <OutlinedInput
                id="outlined-adornment"
                placeholder={"جستجو ..."}
                onChange={handleChange}
                value={search}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClick2}>
                      <SearchIcon color="disabled" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
          <div className={clsx(classes.buttonWrapperLogin, classes.partB)}>
            <Typography variant="body1" className={classes.text2}>
              {
                "اگر شهر شما در این لیست موجود نمی باشد  دکمه اضافه کن را کلیک کنید"
              }
            </Typography>
            <Button
              variant="contained"
              className={classes.btn}
              onClick={() => setOpenNew(true)}
            >
              {"اضافه کن"}
            </Button>
            <NewCaseModal
              open={openNew}
              handleClose={() => setOpenNew(false)}
              province={province}
              setUpdate={setUpdate}
            />
          </div>
          <CustomTable
            TableOption={TableOption}
            data={searchResult ? getItem2(searchResult) : list}
            is_fetch={state?.is_fetch}
            pageNumber={state?.pageNumber}
            count={state?.count}
            pageSize={state?.pageSize}
            pagination={true}
            handleChange={handleChangePageNumber}
            type="sticky"
          />
          <AddModal
            open={openAdd}
            handleClose={() => setOpenAdd(false)}
            id={ID}
            setUpdate={setUpdate}
            setFullInformation={setFullInformation}
          />
        </div>
      )}
    </Grid>
  );
};

export default Cites;
