import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core";
import styled from "styled-components";

const DataTableWrapper = styled.div`
  margin-top: 20px;
`;

const DataTableCell = styled(TableCell)`
  padding: 10px;
`;

const DataTable = ({ tableData }) => (
  <DataTableWrapper>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <DataTableCell>Text</DataTableCell>
            <DataTableCell>Password</DataTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((data, index) => (
            <TableRow key={index}>
              <DataTableCell>{data.text}</DataTableCell>
              <DataTableCell>{data.password}</DataTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </DataTableWrapper>
);

export default DataTable;
