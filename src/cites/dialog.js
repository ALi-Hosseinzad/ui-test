import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import {
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

export default function DialogSelect({
  search,
  handleClick,
  provinces,
  handleChange,
  setProvince,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setProvince(e);
    setOpen(false);
  };
  function ListItems(props) {
    return (
      <ListItem
        className={classes.item}
        button
        onClick={() => handleClose(props.value)}
      >
        <ListItemText primary={props.title} />
      </ListItem>
    );
  }

  return (
    <div>
      <Button className={classes.btn} onClick={handleClickOpen}>
        برای انتخاب یکی از استانها را کلیک کنید
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>لطفا یکی از استانها را انتخاب کنید</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.input2} variant="outlined">
              <OutlinedInput
                id="outlined-adornment"
                placeholder={"جستجو ..."}
                onChange={handleChange}
                value={search}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClick}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
          <List component="nav" aria-label="secondary mailbox folders">
            {provinces
              ?.sort((a, b) => (a.operatorId > b.operatorId ? 1 : -1))
              .map((option, i) => (
                <ListItems
                  value={option.id}
                  title={option.title}
                  key={option.id}
                />
              ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}
