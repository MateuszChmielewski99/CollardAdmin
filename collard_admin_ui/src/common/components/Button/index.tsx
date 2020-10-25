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
        return 'm_button_primary';
    }
  };
  const { variant, children, type, ...restProps } = props;
  const className = `${getClassName(props.variant || ButtonTypes.Primary)} ${
    props.disabled ? 'm_button_disabled' : ''
  }`;
  return (
    <button className={className} {...restProps}>
      {props.children}
    </button>
  );
};

Button.defaultProperties = {
  variant: ButtonTypes.Primary,
};
