import React from 'react';
import './button.css';

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  variant?: ButtonTypes;
};

enum ButtonTypes {
  Primary,
  Default,
  Warning,
}

export const Button = (props: ButtonProps) => {
  const getClassName = (type: ButtonTypes) => {
    switch (type) {
      case ButtonTypes.Primary:
        return 'ButtonPrimary';
    }
  };
  const { variant, children, type, ...restProps } = props;
  return (
    <button
      className={getClassName(props.variant || ButtonTypes.Primary)}
      {...restProps}
    >
      {' '}
      {props.children}{' '}
    </button>
  );
};

Button.defaultProperties = {
  variant: ButtonTypes.Primary,
};
