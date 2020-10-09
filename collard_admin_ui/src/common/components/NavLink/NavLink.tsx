import React from "react";
import {NavLink as ReactNavLink} from 'react-router-dom'
import './nav.css'
type NavLinkProps = {
    to: string
    text:string;
}

export const NavLink = (props: NavLinkProps) => {
    return <ReactNavLink to={props.to} className={"Nav"}>{props.text} </ReactNavLink>
}