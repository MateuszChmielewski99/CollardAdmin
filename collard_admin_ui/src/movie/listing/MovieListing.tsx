import React, { useEffect, useState } from 'react';
import { Button } from '../../common/components/Button';
import { MainSection } from '../../common/components/layout/MainSection';
import { Stack } from '../../common/components/Stack';
import { useHistory } from 'react-router-dom';
import { MovieRoutPaths } from '../common/routes/movie-routes';
import { HeaderSection } from '../../common/components/HeaderSection/HeaderSection';
import BreadcrumbsContainer from '../../common/components/Breadcrumbs/Breadcrumbs';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { NavLink } from '../../common/components/NavLink/NavLink';
import { MovieContract } from 'collard_admin_models';
import {
  getDefaultMovieListingFilters,
  MovieListingFilters,
  SortOrder,
} from './filters/MovieListingFilters';
import { MovieApiService } from '../MovieApiService';
import { useToastContext } from '../../common/toast/context/ToastState';
import { CircularProgress } from '@material-ui/core';

export const MovieListing = () => {
  const history = useHistory();
  const movieApiService = new MovieApiService();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const toastContext = useToastContext();
  const [filters, setFilters] = useState<MovieListingFilters>(
    getDefaultMovieListingFilters()
  );

  useEffect(() => {
    setData([]);
    setIsLoading(true);
    movieApiService
      .fetchListingData(filters)
      .then((resp) => setData(resp as any))
      .catch(() => toastContext.show('error', 'Error while fetching data'))
      .finally(() => setIsLoading(false));
  }, [filters]);

  const handlePageNumberChange = (pageNumber: number) => {
    setFilters((prev) => {
      return { ...prev, pageNumber };
    });
  };

  const handleSortChange = (
    sortName: string | number | symbol,
    sortOrder: 'asc' | 'desc'
  ) => {
    if (typeof sortName !== 'string') return;

    setFilters((prev) => {
      return {
        ...prev,
        sortName: (sortName as any) as string,
        sortOrder: sortOrder as SortOrder,
      };
    });
  };

  const handlePageSizeChange = (pageSize: number) => {
    setFilters((prev) => {
      return { ...prev, pageSize };
    });
  };

  const tableOptions = {
    sortName: filters.sortName,
    sortOrder: filters.sortOrder,
    page: filters.pageNumber,
    sizePerPage: filters.pageSize,
    onPageChange: handlePageNumberChange,
    onSortChange: handleSortChange,
    onSizePerPageList: handlePageSizeChange,
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
      {
        text: '10',
        value: 10,
      },
    ],
  };

  const ctaItems = (
    <Button
      onClick={() => history.push(MovieRoutPaths.Add)}
      style={{ width: '100px' }}
    >
      Add new
    </Button>
  );

  const renderDirector = (cell: any, row: any) => {
    return isLoading ? <div className="shine"> </div> : cell.Name;
  };

  const renderName = (cell: string, row: MovieContract) => {
    return (
      <div style={{ color: '#3f51b5' }}>
        <NavLink text={cell} to={`/movie/${row.id}`} />
      </div>
    );
  };

  return (
    <Stack style={{ width: '80%' }}>
      <HeaderSection title={'Add new movie'} ctaItems={ctaItems} />
      <BreadcrumbsContainer />
      <MainSection>
        <Stack style={{ height: '90%', padding: '20px 0' }} justifyContent={isLoading ? 'center' : ''}>
          {!isLoading ? (
            <BootstrapTable
              data={data}
              options={tableOptions}
              striped
              pagination
            >
              <TableHeaderColumn
                isKey
                dataSort
                dataFormat={renderName}
                dataField="Name"
              >
                Title
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="Director"
                dataFormat={renderDirector}
              >
                Director
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Year">
                Year of production
              </TableHeaderColumn>
            </BootstrapTable>
          ) : (
            <Stack alignSelf={'center'}>
              <CircularProgress />
            </Stack>
          )}
        </Stack>
      </MainSection>
    </Stack>
  );
};
