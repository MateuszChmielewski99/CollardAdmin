import React from 'react';
import { Stack } from '../Stack';
import { ImageItem } from './SingleImage';
import ClearIcon from '@material-ui/icons/Clear';
import { useTheme } from '@material-ui/core';

type ImageListProps = {
  images: File[];
  onImageDelete: (index: number) => void;
};

export const ImageList = (props: ImageListProps) => {
  const theme = useTheme();
  return (
    <Stack horizontal flexWrap={'wrap'}>
      {props.images.map((item, index) => (
        <Stack>
          <ClearIcon
            onClick={() => props.onImageDelete(index)}
            style={{
              color: theme.palette.primary.main,
              cursor: 'pointer',
              alignSelf: 'flex-end',
            }}
          />
          <ImageItem image={item} key={`${item.name}${index}`} />
        </Stack>
      ))}
    </Stack>
  );
};
