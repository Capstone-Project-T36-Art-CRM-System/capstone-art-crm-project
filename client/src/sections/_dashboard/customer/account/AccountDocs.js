import * as Yup from 'yup';

// Form Controllers
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// Material UI
// Material UI
import { useTheme } from '@mui/material/styles';
import {
  Card,
  Table,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
} from '@mui/material';

// Page Components Import
import Page from '../../components/Page';
import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';
import Iconify from '../../components/Iconify';

// Page Sections Import
import { CustomerListHead, CustomerMoreMenu } from '../../sections/_dashboard/customer/list';

// Components Import
import { FormProvider, RHFSelect, RHFTextField } from '../../../../components/hook-form';

// Utils
import { fCurrency } from '../../../../utils/formatNumber';

// MOCK DATA
import { countries } from '../../../../_mock';


const TABLE_HEAD = [
    { id: 'name', label: 'Name', alignRight: false },
    { id: 'phone', label: 'Phone', alignRight: false },
    { id: 'email', label: 'Email', alignRight: false },
    { id: 'status', label: 'Status', alignRight: false },
    { id: '' },
  ];


export default function AccountGeneral() {

    const UpdateUserSchema = Yup.object().shape({
        displayName: Yup.string().required('Name is required'),
    });

  const user = {
    id: 'C 00001 AA',
    displayName: 'Alexander Kudin',
    email: 'alexander@aboba.com',
    phoneNumber: '9231231234',
    about: 'Need to update membership',
    balance: 860
  }

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    about: user?.about || '',
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (error) {
      console.error(error);
    }
  };

    return (
    <Card>
        <TableContainer sx={{ minWidth: 800 }}>
            <Table>
            <CustomerListHead
                order={order}
                orderBy={orderBy}
                headLabel={TABLE_HEAD}
                rowCount={userList.length}
                numSelected={selected.length}
                onRequestSort={handleRequestSort}
                onSelectAllClick={handleSelectAllClick}
            />
            <TableBody>
                {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                const { id, name, email, status, phoneNumber } = row;
                const isItemSelected = selected.indexOf(name) !== -1;

                return (
                    <TableRow
                    hover
                    key={id}
                    tabIndex={-1}
                    role="checkbox"
                    selected={isItemSelected}
                    aria-checked={isItemSelected}
                    >
                    <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} onClick={() => handleClick(name)} />
                    </TableCell>
                    <TableCell align="left">{name}</TableCell>
                    <TableCell align="left">{phoneNumber}</TableCell>
                    <TableCell align="left">{email}</TableCell>
                    <TableCell align="left">
                        <Label
                        variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
                        color={(status === 'reject' && 'error') || 'success'}
                        >
                        {sentenceCase(status)}
                        </Label>
                    </TableCell>

                    <TableCell align="right">
                        <CustomerMoreMenu onDelete={() => handleDeleteUser(id)} userName={name} />
                    </TableCell>
                    </TableRow>
                );
                })}
                {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
                )}
            </TableBody>
            {isNotFound && (
                <TableBody>
                <TableRow>
                    <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                    <SearchNotFound searchQuery={filterName} />
                    </TableCell>
                </TableRow>
                </TableBody>
            )}
            </Table>
        </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
    );
}
