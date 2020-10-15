import React from "react";
import {MainSection} from "../../common/components/layout/MainSection";
import BreadcrumbsContainer from "../../common/components/Breadcrumbs/Breadcrumbs";
import './movie-add.css'
import {HeaderSection} from "../../common/components/HeaderSection/HeaderSection";
import {Button} from "../../common/components/Button";
import {MovieApiService} from "../MovieApiService";

export const MovieAdd = () => {
    const movieApiService = new MovieApiService();
    const ctaItems = (<Button> Save </Button>)
    movieApiService.save({Id:'asd',Title:"asd", Year:123})
    return (
        <div className={"MovieMainSection"}>
            <HeaderSection title={'Add new movie'} ctaItems={ctaItems}/>
            <BreadcrumbsContainer/>
            <MainSection>


            </MainSection>
        </div>
    )
}