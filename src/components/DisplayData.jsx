import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { multistepContext } from '../StepContext';

const DisplayData = () => {
  const { finalData, editData, deleteData } = useContext(multistepContext);

  return (
    <div>
      <Table sx={{ width: '70%', marginLeft: '20%', marginTop: '50px' }} aria-label="simple table">
        <TableHead sx={{ background: 'yellow' }}>
          <TableRow>
            <TableCell>Fullname</TableCell>
            <TableCell align="right">Display Name</TableCell>
            <TableCell align="right">Work Name</TableCell>
            <TableCell align="right">Work URL</TableCell>
            <TableCell align="right">Usage Type</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((final) => (
            <TableRow key={final.id}>
              <TableCell align="right">{final.firstName}</TableCell>
              <TableCell align="right">{final.displayName}</TableCell>
              <TableCell align="right">{final.workName}</TableCell>
              <TableCell align="right">{final.workUrl}</TableCell>
              <TableCell align="right">{final.usageType}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => editData(final.id)}
                  sx={{ mr: 1 }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteData(final.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DisplayData;
