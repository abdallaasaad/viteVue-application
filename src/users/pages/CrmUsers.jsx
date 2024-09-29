import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Checkbox,
    Paper,
    IconButton,
    Tooltip,
} from '@mui/material';
import useCrmUsers from '../hooks/useCrmUsers';
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { PublishedWithChanges } from '@mui/icons-material';
import PageHeader from '../../components/PageHeader';


export default function CrmUsers() {
    const { users, error, handleDeleteUsers, setUsers, isSelected, handleChangeRowsPerPage, handleChangePage, handleClick, handleDeleteAllSelected, handleSelectAllClick, page, rowsPerPage, selected, handleEditSelectedUsers } = useCrmUsers();

    return (
        <>
            <PageHeader
                title="CRM Admin"
                subtitle="On this page you can edit the users status and delete them"
            />
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#918A87" }}>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        indeterminate={selected.length > 0 && selected.length < users.length}
                                        checked={users.length > 0 && selected.length === users.length}
                                        onChange={handleSelectAllClick}
                                        sx={{ backgroundColor: "#000" }}
                                    />
                                </TableCell>
                                <TableCell sx={{ color: "#000" }}>ID</TableCell>
                                <TableCell sx={{ color: "#000" }}>First name</TableCell>
                                <TableCell sx={{ color: "#000" }}>Last name</TableCell>
                                <TableCell sx={{ color: "#000" }}>Status</TableCell>
                                <TableCell sx={{ color: "#000" }}>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    const isItemSelected = isSelected(row._id);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={() => handleClick(row._id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row._id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isItemSelected} />
                                            </TableCell>
                                            <TableCell>{row._id}</TableCell>
                                            <TableCell>{row.name.first}</TableCell>
                                            <TableCell>{row.name.last}</TableCell>
                                            <TableCell>
                                                {row.isAdmin && row.isBusiness
                                                    ? 'Admin & Business'
                                                    : row.isAdmin
                                                        ? 'Admin'
                                                        : row.isBusiness
                                                            ? 'Business'
                                                            : 'Regular User'}
                                            </TableCell>
                                            <TableCell>{row.phone}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25, 100, 1300]}
                />
                <Tooltip title="Delete selected users" sx={{ marginLeft: "3rem" }}>
                    <IconButton onClick={handleDeleteAllSelected}>
                        <DeleteIcon sx={{ fontSize: "20px", color: "#918A87" }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Switching user's status" sx={{ marginRight: "3rem" }}>
                    <IconButton onClick={handleEditSelectedUsers}>
                        <PublishedWithChanges sx={{ fontSize: "20px", color: "#918A87" }} />
                    </IconButton>
                </Tooltip>
            </Paper>
        </>

    );
}

