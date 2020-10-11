import React from "react";
import {Stack} from "../Stack";
import './header-section.css'


type HeaderSectionProps = {
    title: string;
    ctaItems: JSX.Element | JSX.Element[];
}

export const HeaderSection = (props: HeaderSectionProps) => {
    const ctaItemsList = Array.isArray(props.ctaItems) ? props.ctaItems : [props.ctaItems];
    return (
        <Stack horizontal className={"HeaderSection"}>
            {props.title}
            <Stack flex={1}>
            </Stack>
            {ctaItemsList.map(item => (
                    <Stack alignSelf={'flex-end'} className={'HeaderSectionCtaItems'}>
                        {item}
                    </Stack>
                ))}
        </Stack>
    );
}

