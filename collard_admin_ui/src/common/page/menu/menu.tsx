import {Drawer} from '@material-ui/core';
import React from 'react';
import './menu.css'
import {NavLink} from "../../components/NavLink/NavLink";

type AppMenuProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const AppMenu = (props: AppMenuProps) => {
    return (
        <Drawer open={props.isOpen} anchor={"left"} onClose={props.onClose}>
            <div className={"Menu_items_list"}>
                <div className={"Menu_item"}>
                    <NavLink to={'#'} text={"View all"} />
                </div>
                <div className={"Menu_item"}>
                    <NavLink to={'#'} text={"Add new"} />
                </div>
            </div>
        </Drawer>
    )
}