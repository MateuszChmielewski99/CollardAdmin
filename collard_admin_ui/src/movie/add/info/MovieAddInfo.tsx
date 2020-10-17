import { TextField } from "@material-ui/core";
import React from "react";
import { MainSection } from "../../../common/components/layout/MainSection";

const MovieAddInfo = () => {
  return (
    <MainSection>
      <TextField label={"Name"} required />
    </MainSection>
  );
};

export default MovieAddInfo;
