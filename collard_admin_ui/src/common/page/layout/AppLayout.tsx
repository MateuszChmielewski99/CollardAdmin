import React, { ReactNode } from "react";
import { AppHeader } from "../header/header";
import { StickyContainer, Sticky } from "react-sticky";
import './layout.css'
type AppLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const AppLayout = (props: AppLayoutProps) => {
  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <div style={{ ...style }}>
            <AppHeader />
          </div>
        )}
      </Sticky>
      <div className={"main"}>{props.children}</div>
    </StickyContainer>
  );
};
