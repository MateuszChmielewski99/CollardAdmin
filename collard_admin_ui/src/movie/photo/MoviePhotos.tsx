import React from 'react';
import { ImageManager } from '../../common/components/ImageManager';
import { MainSection } from '../../common/components/layout/MainSection';
import { useMovieContext } from '../common/context/MovieState';

const MovieAddPhotos = () => {
  const movieContext = useMovieContext();
  const handleImageUpload = (files: File[]) => {
    const imagesToSet = [...movieContext.state.images, ...files];
    movieContext.setImages(imagesToSet);
  };

  const handleDeleteMovie = (index:number) => {
    const currentImages = [...movieContext.state.images];
    currentImages.splice(index,1);
    movieContext.setImages(currentImages);
  }

  return (
    <MainSection>
      <ImageManager
        images={movieContext.state.images}
        onImageUpload={handleImageUpload}
        onImageDelete={handleDeleteMovie}
      />
    </MainSection>
  );
};

export default MovieAddPhotos;
