import React from "react";
import {useLocation} from 'react-router-dom'
import {Breadcrumbs} from "@material-ui/core";
import "./breadcrumbs.css"
import {NavLink} from "../NavLink/NavLink";
import {BreadcrumbsProps} from "./Breadcrumbs.props";

const BreadcrumbsContainer = (props:BreadcrumbsProps) => {
    const location = useLocation();
    const splitedPath = location.pathname.split('/');

    const capitalizeFirstLetter = (s:string) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const breadcrumbsStyle = {
        fontSize: 25, paddingBottom: 10, letterSpacing: 2
    }

    return (
        <Breadcrumbs className={"Breadcrumbs"} style={breadcrumbsStyle}>
            {splitedPath.map((item, index) => (
                <NavLink to={`/${item}`}
                         text={capitalizeFirstLetter(item)}
                         key={item}
                         className={index === splitedPath.length - 1 ? 'Inactive' : 'Active'}
                         disabled={index === splitedPath.length - 1}/>
            ))}
        </Breadcrumbs>
    );
}

export default BreadcrumbsContainer;