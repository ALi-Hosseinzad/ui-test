import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";

const CustomTableWithPagination = (props) => {
  let {
    className,
    TableOption,
    data,
    is_fetch,
    handleChange,
    pageNumber,
    count,
    pageSize,
    pagination,
    handleClick,
    paper = true,
    stickyHeader = false,
  } = props;
  // console.log(props);
  const classes = useStyles(props);

  const getCellContent = (row, col, index) => {
    if (col?.render) {
      return col?.render(row, col?.name, index);
    } else {
      return row[col?.name];
    }
  };

  const drawTable = () => {
    return (
      <Grid container spacing={0} direction="column">
        <Grid item className={classes.container}>
          {is_fetch ? (
            data?.length > 0 ? (
              <div className={className}>
                <TableContainer>
                  <Table stickyHeader={stickyHeader} className={classes.table}>
                    <colgroup>
                      {TableOption?.map((item) => (
                        <>
                          <col style={{ width: item?.width }} />
                        </>
                      ))}
                    </colgroup>
                    <TableHead className={classes.tableHead}>
                      <TableRow className={classes.tableRow}>
                        {TableOption?.map((item) => (
                          <TableCell
                            key={item.id}
                            className={classes.tableCell}
                            align={item.align ? item.align : "center"}
                          >
                            {item.title}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(pageSize > 0
                        ? data.slice(
                            (Number(pageNumber) - 1) * pageSize,
                            (Number(pageNumber) - 1) * pageSize + pageSize
                          )
                        : data
                      )
                        .sort((a, b) => (a.title > b.title ? 1 : -1))
                        .map((row, index) => {
                          return (
                            <TableRow
                              key={row?.id}
                              id={row?.currencyName && row?.currencyName}
                              className={classes.tableRow}
                              onClick={handleClick}
                            >
                              {TableOption?.map((item) => (
                                <TableCell
                                  className={classes.tableCell}
                                  align={item?.align ? item?.align : "center"}
                                >
                                  {getCellContent(row, item, index)}
                                </TableCell>
                              ))}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                {pageSize && pagination && (
                  <div className={classes.pagination}>
                    <Pagination
                      page={Number(pageNumber)}
                      count={Math.ceil(data.length / pageSize)}
                      onChange={handleChange}
                      shape="rounded"
                      color="primary"
                      showFirstButton
                      showLastButton
                      boundaryCount={2}
                    />
                  </div>
                )}
              </div>
            ) : (
              <span>{"There is no data to display"}</span>
            )
          ) : (
            <span>Loading ...</span>
          )}
        </Grid>
      </Grid>
    );
  };

  return paper ? (
    <Paper className={classes.paper}>{drawTable()}</Paper>
  ) : (
    drawTable()
  );
};

export default CustomTableWithPagination;
