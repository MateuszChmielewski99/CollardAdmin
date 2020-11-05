import TabPanel from '../../common/components/TabPanel';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BreadcrumbsContainer from '../../common/components/Breadcrumbs/Breadcrumbs';
import { Button } from '../../common/components/Button';
import { HeaderSection } from '../../common/components/HeaderSection/HeaderSection';
import { Stack } from '../../common/components/Stack';
import { useToastContext } from '../../common/toast/context/ToastState';
import { useMovieContext } from '../common/context/MovieState';
import { MovieRoutPaths } from '../common/routes/movie-routes';
import MovieInfo from '../info/MovieAddInfo';
import { MovieApiService } from '../MovieApiService';
import MovieAddPhotos from '../photo/MoviePhotos';
import { MovieEditTabs } from '../common/tabs/MovieTabs';
import { CircularProgress } from '@material-ui/core';

const MovieEdit = (props: { movieId: string }) => {
  const movieApiService = new MovieApiService();
  const movieContext = useMovieContext();
  const toastContext = useToastContext();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    movieApiService
      .getById(props.movieId)
      .then((resp) => movieContext.setData(resp.data))
      .catch(() => toastContext.show('error', 'Error while fetching movie'))
      .finally(() => setIsLoading(false));
  }, []);

  const handleSaveMovie = () => {
    movieApiService
      .save(movieContext.state.data)
      .catch((error) => {
        toastContext.show('error', error);
      })
      .then(() => {
        history.push(MovieRoutPaths.All);
      });
  };

  const isFormValid = movieContext.state.isValid;

  const ctaItems = (
    <Button
      data-automation-id={'save-button'}
      onClick={handleSaveMovie}
      disabled={!isFormValid}
    >
      Save
    </Button>
  );
  const [currentTab, setCurrentTab] = useState(0);

  const getCurrentTabSection = () => {
    switch (currentTab) {
      case 0:
        return <MovieInfo isNameDisabled />;
      case 1:
        return <MovieAddPhotos />;
    }
  };

  return (
    <Stack className={'MovieMainSection'}>
      <HeaderSection title={'Edit movie'} ctaItems={ctaItems} />
      <BreadcrumbsContainer />
      {!isLoading ? (
        <Stack>
          <TabPanel
            value={currentTab}
            items={MovieEditTabs}
            onChange={(e, v) => setCurrentTab(v)}
          />
          {getCurrentTabSection()}
        </Stack>
      ) : (
        <Stack alignSelf={'center'}>
          <CircularProgress />
        </Stack>
      )}
    </Stack>
  );
};

export default MovieEdit;
