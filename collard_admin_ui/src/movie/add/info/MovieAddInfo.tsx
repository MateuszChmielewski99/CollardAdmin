import {
  CircularProgress,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import {
  CreateMovieRequest,
  EntityReference,
  Genres,
  validateCreateMovieRequest,
} from 'collard_admin_models';
import React, { CSSProperties, useEffect, useState } from 'react';
import { MainSection } from '../../../common/components/layout/MainSection';
import { Stack } from '../../../common/components/Stack';
import { useMovieContext } from '../../common/context/MovieState';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './movie-add-info.css';
import { createErrorMessage } from '../../../common/helpers/errorMessage.factory';
import { GenresData } from '../../common/context/MovieEvents';
import { MovieApiService } from '../../MovieApiService';

const MovieAddInfo = () => {
  const genres = Object.values(Genres);
  const movieContext = useMovieContext();
  const movieApiService = new MovieApiService();
  const inputStyles: CSSProperties = {
    margin: '8px',
    width: '50%',
  };
  const [directors, setDirectors] = useState<EntityReference[]>([]);
  const [areDirectorsLoading, setAreDirectorsLoading] = useState(true);

  useEffect(() => {
    movieApiService
      .fetchDirectors()
      .then((s) => {
        console.log(s);
        setDirectors(s);
      })
      .finally(() => setAreDirectorsLoading(false));
  }, []);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    movieContext.setName(event.target.value);
  };

  const handleGenresChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    movieContext.setGenres(event.target.value as GenresData);
  };

  const getYearOptions = (): number[] => {
    const years: number[] = [];
    const currentYear = new Date().getFullYear();
    for (let a = 1920; a < currentYear + 20; years.push(a++)) {}

    return years.reverse();
  };

  const handleFieldBlur = (fieldName: keyof CreateMovieRequest) => {
    validateCreateMovieRequest(movieContext.state.data);
    const nameErrors = validateCreateMovieRequest.errors
      ?.map((s) => createErrorMessage(s))
      .filter((s) => s?.property === fieldName);

    if (!nameErrors?.length) {
      movieContext.setFieldErrorMessage(fieldName, '');
      return;
    }

    movieContext.setFieldErrorMessage(
      fieldName,
      nameErrors.pop()?.errorMessage || ''
    );
  };

  return (
    <Stack className={'movie_add_info--main_info'}>
      <MainSection>
        <span className={'movie_add_info--main_info__title'}> Main info </span>
        <Stack flexWrap={'wrap'}>
          <form>
            <TextField
              label={'Title'}
              required
              style={inputStyles}
              margin="dense"
              onChange={handleTitleChange}
              value={movieContext.state.data.Name}
              onBlur={() => handleFieldBlur('Name')}
              error={movieContext.state.validity.Name !== ''}
              helperText={movieContext.state.validity.Name}
            />
            <Autocomplete
              id="combo-box-demo"
              options={getYearOptions()}
              getOptionLabel={(y) => y.toString()}
              style={inputStyles}
              value={movieContext.state.data.Year}
              onBlur={() => handleFieldBlur('Year')}
              onChange={(e: any, value: number | null) =>
                value && movieContext.setYear(value)
              }
              renderInput={(params) => (
                <TextField {...params} label="Year" required />
              )}
            />
            <TextField
              type={'number'}
              label={'IMDB Score'}
              margin={'dense'}
              style={inputStyles}
              value={movieContext.state.data.ImdbScore}
              onBlur={() => handleFieldBlur('ImdbScore')}
              onChange={(
                event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => {
                movieContext.setImdbScore(
                  Number.parseFloat(event.target.value)
                );
              }}
              required
            />
            <FormControl style={inputStyles}>
              <InputLabel
                id="genres-select-label"
                error={movieContext.state.validity.Genres !== ''}
              >
                Genres
              </InputLabel>
              <Select
                labelId={'genres-select-label'}
                multiple
                value={movieContext.state.data.Genres}
                onChange={handleGenresChange}
                input={<Input />}
                MenuProps={MenuProps}
                onBlur={() => handleFieldBlur('Genres')}
                error={movieContext.state.validity.Genres !== ''}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre} value={genre}>
                    {genre}
                  </MenuItem>
                ))}
              </Select>
              {movieContext.state.validity.Genres !== '' && (
                <FormHelperText error>
                  {movieContext.state.validity.Genres}
                </FormHelperText>
              )}
            </FormControl>
            <TextField
              label={'Imdb link'}
              style={inputStyles}
              value={movieContext.state.data.ImdbLink}
              onBlur={() => handleFieldBlur('ImdbLink')}
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => movieContext.setImdbLink(event.target.value)}
            />
            <Autocomplete
              getOptionSelected={(
                option: EntityReference,
                value: EntityReference
              ) => option.Name === value.Name}
              getOptionLabel={(option: EntityReference) => option.Name}
              options={directors}
              loading={areDirectorsLoading}
              onChange={(e,v) => console.log(v)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Directors"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    style: inputStyles,
                    endAdornment: (
                      <>
                        {areDirectorsLoading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </form>
        </Stack>
      </MainSection>
    </Stack>
  );
};

export default MovieAddInfo;
