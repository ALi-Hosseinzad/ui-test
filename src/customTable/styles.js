import makeStyles from "@material-ui/core/styles/makeStyles";
export default makeStyles((theme) => ({
  paper: {
    padding: "0 !important",
    paddingTop: "0 !important",
    boxShadow: "none !important",
  },
  table: {
    minHeight: "120px",
  },
  tableHead: {
    "& tr": {
      "& th": {
        color: "#b2b2b2",
        cursor: "default",
        borderBottomColor: "#b2b2b2",
        borderBottomStyle: "solid",
        borderBottomWidth: "thin",
      },
    },
  },
  tableCell: {
    padding: "0 !important",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px !important",
    },
    whiteSpace: "nowrap",
  },

  tableRow: {
    cursor: (props) => props.cursorType === "pointer" && "pointer",
    display: "table-row",
    height: "50px",
    transition: "0.5s ease",
    "&:hover": {
      transition: "0.5s ease",
      backgroundColor: ["#f5f5f5", "!important"],
      "& td": {
        transition: "0.5s ease",

        "&:first-child": {
          backgroundColor: ["#f5f5f5", "!important"],
        },
        "&:last-child": {
          backgroundColor: ["#f5f5f5", "!important"],
        },
      },
    },
    "&.MuiTableRow-head": {
      background: "#f9fafd",
      "&:hover": {
        background: ["#f9fafd", "!important"],
      },
    },

    "& .MuiTableSortLabel-root": {
      flexDirection: "row",
    },

    "& td": {
      "&:first-child": {
        paddingRight: "20px !important",
      },
    },
    "& th": {
      "&:first-child": {
        paddingRight: "20px !important",
      },
    },

    [theme.breakpoints.down("sm")]: {
      "& td": {
        "&:first-child": {
          position: "sticky !important",
          right: "0 !important",
          backgroundColor: "#FAFAFA",
          boxShadow: "-2px 2px 4px 0 rgba(0,0,0,0.1)",
          zIndex: 1000,
        },
        "&:last-child": {
          position: "sticky !important",
          left: "0 !important",
          backgroundColor: "#FAFAFA",
          boxShadow: "2px 2px 4px 0 rgba(0,0,0,0.1)",
          zIndex: 1000,
          maxWidth: ["60px", "!important"],
        },
      },
      "& th": {
        "&:first-child": {
          position: "sticky !important",
          right: "0 !important",
          boxShadow: "-2px 2px 4px 0 rgba(0,0,0,0.1)",
          background: "#f9fafd",
          zIndex: 1000,
        },
        "&:last-child": {
          position: "sticky !important",
          left: "0 !important",
          boxShadow: "2px 2px 4px 0 rgba(0,0,0,0.1)",
          background: "#f9fafd",
          zIndex: 1000,
          maxWidth: ["70px", "!important"],
        },
      },
    },
  },
  container: {
    width: "100%",
  },
  pagination: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
    "& nav": {
      backgroundColor: "#ffffff",
      borderRadius: "4px",
      boxShadow: "0 13px 26px 0 rgba(0, 0, 0, 0.05)",
      padding: "6px 14px",
    },
    "& .MuiPaginationItem-page": {
      border: "none",
      backgroundColor: "inherit",
      color: "#3e3e3e",
      width: ["10px", "!important"],
      minWidth: ["10px", "!important"],
      height: "24px",
      margin: "0px 10px",
      borderBottom: `3px solid transparent`,
    },
    alignItems: "center",
    "& .Mui-selected": {
      pointerEvents: "none",
      cursor: "no-drop !important",
      backgroundColor: ["#ffffff", "!important"],
      color: "#b2b2b2",
      borderRadius: 0,
      borderBottom: "3px solid #3e3e3e",
    },
    "& li:first-child": {
      display: "block !important",
    },
    "& li:last-child": {
      display: "block !important",
    },
    "& .MuiPaginationItem-icon": {
      transform: "rotate(180deg)",
    },
  },
  seeMore: {
    display: "flex",
    alignItems: "center",
  },
  seeMoreRow: {
    height: "40px",
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
  seeMoreCell: {
    padding: "0px !important",
  },
  lastRowCell: {
    border: "none !important",
  },
}));
