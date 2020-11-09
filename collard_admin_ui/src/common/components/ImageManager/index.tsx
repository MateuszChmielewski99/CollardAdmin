import React from 'react';
import { Stack } from '../Stack';
import { FileDropzone } from './Dropzone';
import { ImageList } from './ImageList';

type ImageManagerProps = {
  onImageUpload: (images: File[]) => void;
  onImageDelete:(index:number) => void;
  images:File[];
};

export const ImageManager = (props:ImageManagerProps) => {
  return (
    <Stack>
      <FileDropzone onFilesDrop={props.onImageUpload} accept={'image/*'}/>
      <ImageList images={props.images} onImageDelete={props.onImageDelete}/>
    </Stack>
  );
};
