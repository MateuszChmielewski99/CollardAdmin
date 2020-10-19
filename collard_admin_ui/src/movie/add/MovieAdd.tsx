import React, { useState } from 'react';
import BreadcrumbsContainer from '../../common/components/Breadcrumbs/Breadcrumbs';
import { Button } from '../../common/components/Button';
import { HeaderSection } from '../../common/components/HeaderSection/HeaderSection';
import { Stack } from '../../common/components/Stack';
import TabPanel from '../../common/components/TabPanel';
import { useMovieContext } from '../common/context/MovieState';
import { MovieApiService } from '../MovieApiService';
import MovieAddTabs from './common/MovieAddTabs';
import MovieAddInfo from './info/MovieAddInfo';
import MovieAddPhotos from './photo/MoviePhotos';
import './movie-add.css';
import { validateCreateMovieRequest } from 'collard_admin_models';
import { createErrorMessage } from '../../common/helpers/errorMessage.factory';

const MovieAdd = () => {
  const movieApiService = new MovieApiService();
  const movieContext = useMovieContext();

  const handleSaveMovie = () => {
    validateCreateMovieRequest(movieContext.state.data);
    console.log(validateCreateMovieRequest.errors);
    validateCreateMovieRequest.errors?.map((e) => createErrorMessage(e)).forEach(s => console.log(s));
  };

  const ctaItems = (
    <Button
      data-automation-id={'save-button'}
      onClick={handleSaveMovie}
    >
      {' '}
      Save{' '}
    </Button>
  );
  const [currentTab, setCurrentTab] = useState(0);

  const getCurrentTabSection = () => {
    switch (currentTab) {
      case 0:
        return <MovieAddInfo />;
      case 1:
        return <MovieAddPhotos />;
    }
  };

  return (
    <Stack className={'MovieMainSection'}>
      <HeaderSection title={'Add new movie'} ctaItems={ctaItems} />
      <BreadcrumbsContainer />
      <TabPanel
        value={currentTab}
        items={MovieAddTabs}
        onChange={(e, v) => setCurrentTab(v)}
      />
      {getCurrentTabSection()}
    </Stack>
  );
};

export default MovieAdd;
