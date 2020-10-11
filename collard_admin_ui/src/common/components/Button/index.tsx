import React from "react";
import './button.css'

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    variant?:ButtonTypes;
};

enum ButtonTypes {
    Primary,
    Default,
    Warning,
}

export const Button = (props:ButtonProps) => {

    const getClassName = (type:ButtonTypes) => {
        switch (type){
            case ButtonTypes.Primary:
                return 'ButtonPrimary';

        }
    }

    return <button className={getClassName(props.variant || ButtonTypes.Primary)}> {props.children} </button>
}

Button.defaultProperties = {
    variant:ButtonTypes.Primary
}