import React, {CSSProperties, ReactNode} from 'react'

type StackProps = {
    horizontal?:boolean;
    children:ReactNode | ReactNode[];
    alignItems?:string;
    justifyContent?:string;
    className?:string;
    flex?:string | number;
    alignSelf?:string;
}

export const Stack = (props:StackProps) => {
    const styles:CSSProperties = {
        display:'flex',
        flexDirection: !props.horizontal ? 'column' : 'row',
        alignItems: props.alignItems,
        justifyContent:props.justifyContent,
        flex: props.flex,
        alignSelf:props.alignSelf
    }
    return <div style={styles} className={props.className}>{props.children}</div>
}

Stack.defaultProperties = {
    alignItems: 'center',
    justifyContent: 'center',
    className:''
}