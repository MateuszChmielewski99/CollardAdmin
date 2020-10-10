import React, {ReactNode, useState} from "react";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import "./menu-drower.css"
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


type MenuDrowerProps = {
    sectionName: string,
    sectionItems: ReactNode[];
}

export const MenuDrower = (props: MenuDrowerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={'MenuDrowerFlexColumn'}>
            <div className={'MenuDrowerFlexContainer'}>
                <button onClick={() => setIsOpen(s => !s)} className={"MenuIconArrow"}>
                    {!isOpen ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                </button>
                <div>
                    {props.sectionName}
                </div>
            </div>
            <div className={'MenuDrowerItem'}>
                {isOpen && props.sectionItems.map(item => (
                    <div className={'MenuDrowerFlexContainer'}>
                        <ArrowRightIcon className={"MenuDrowrIcon"}/>
                        <div>
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}