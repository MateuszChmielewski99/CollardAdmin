import React from "react";
import {MainSection} from "../../common/components/layout/MainSection";
import {BreadcrumbsContainer} from "../../common/components/Breadcrumbs/Breadcrumbs";
import './movie-add.css'
import {HeaderSection} from "../../common/components/HeaderSection/HeaderSection";
import {Button} from "../../common/components/Button";

export const MovieAdd = () => {

    const ctaItems = (<Button> Save </Button>)

    return (
        <div className={"MovieMainSection"}>
            <HeaderSection title={'Add new movie'} ctaItems={ctaItems}/>
            <BreadcrumbsContainer/>
            <MainSection>


            </MainSection>
        </div>
    )
}