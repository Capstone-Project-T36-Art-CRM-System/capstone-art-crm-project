import { sentenceCase } from 'change-case';
import { useState } from 'react';

// Routing
import { Link as RouterLink } from 'react-router-dom';

// Material UI
import {
  Card,
  Table,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Stack,
} from '@mui/material';

// Page Components Import
import Page from '../../components/Page';
import Label from '../../components/Label';
import SearchNotFound from '../../components/SearchNotFound';
import Iconify from '../../components/Iconify';
import Image from '../../components/Image';

// Page Sections Import
import { ArtworkListHead, ArtworkListToolbar, ArtworkMoreMenu } from '../../sections/_dashboard/artwork/list';

// MOCK DATA
import { getArtworkList } from '../../mock_data/artworks';


const TABLE_HEAD = [
  { id: 'title', label: 'Artwork', alignRight: false },
  { id: 'artworkId', label: 'ID', alignRight: false },
  { id: 'material', label: 'Material', alignRight: false },
  { id: 'size', label: 'Size', alignRight: false },
  { id: 'year', label: 'Year', alignRight: false },
  { id: 'author', label: 'Author', alignRight: false },
  { id: '' },
];

export default function ArtworkList() {
  const [artworkList, setArtworkList] = useState(getArtworkList());
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (checked) => {
    if (checked && selected.length !== artworkList.length) {
      const newSelecteds = artworkList.map((artwork) => artwork.artworkId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (artworkId) => {
    const selectedIndex = selected.indexOf(artworkId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, artworkId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleDeleteCustomer = (artworkId) => {
    const deleteUser = artworkList.filter((artwork) => artwork.artworkId !== artworkId);
    setSelected([]);
    setArtworkList(deleteUser);
  };

  const handleDeleteMultiArtwork = (selected) => {
    const deleteArtworks = artworkList.filter((artwork) => !selected.includes(artwork.artworkId));
    setSelected([]);
    setArtworkList(deleteArtworks);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - artworkList.length) : 0;

  const filteredCustomers = applySortFilter(artworkList, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredCustomers.length && Boolean(filterName);

  return (
    <Page title="Artworks">
      <Container maxWidth='lg'>

        {/* Page Title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
              Artworks
          </Typography>
          <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/artwork/new"
              startIcon={ <Iconify icon={'eva:plus-fill'} width={20} height={20} />}
          >
              Add artwork
          </Button>
        </Stack>
        {/* Page Title End*/}

        <Card>
          <ArtworkListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            onDeleteArtworks={() => handleDeleteMultiArtwork(selected)}
          />

            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ArtworkListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={artworkList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredCustomers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { artworkId, cover, title, material, size, year, author } = row;
                    const isItemSelected = selected.indexOf(artworkId) !== -1;

                    return (
                      <TableRow
                        hover
                        key={artworkId}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} onClick={() => handleClick(artworkId)} />
                        </TableCell>
                        <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                          <Image
                            disabledEffect
                            alt={title}
                            src={`https://artkudina.ru/images/works/webp/${cover}.webp?w=161&fit=crop&auto=format`} 
                            sx={{ borderRadius: 1.5, width: 64, height: 64, mr: 2 }}
                          />
                          <Typography variant="subtitle2" noWrap>
                            {title}
                          </Typography>
                        </TableCell>
                        <TableCell align="left">{artworkId}</TableCell>
                        <TableCell align="left">{material}</TableCell>
                        <TableCell align="left">{size}</TableCell>
                        <TableCell align="left">{year}</TableCell>
                        <TableCell align="left">{author}</TableCell>
                        {/* <TableCell align="left">
                          <Label
                            variant='ghost'
                            color={(status === 'rejected' && 'error') || 'success'}
                          >
                            {sentenceCase(status)}
                          </Label>
                        </TableCell> */}

                        <TableCell align="right">
                          <ArtworkMoreMenu onDelete={() => handleDeleteCustomer(artworkId)} artworkId={artworkId} />
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
            count={artworkList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return array.filter((artwork) => artwork.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}
