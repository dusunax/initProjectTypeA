import styled from "styled-components";
import React from "react";
import Header from "./Header/Header";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>{children}</DefaultLayoutContent>
    </DefaultLayoutContainer>
  );
};

const DefaultLayoutContainer = styled("div")`
  width: 100%;
  max-width: ${({ theme }) => `${theme.layoutStyle.breakpoints.md - 1}px`};
  padding: 0 24px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  @media (max-width: ${({ theme }) =>
      `${theme.layoutStyle.breakpoints.xl - 1}px`}) {
    padding: ${({ theme }) => `${theme.layoutStyle.paddings.md}`};
  }

  @media (max-width: ${({ theme }) =>
      `${theme.layoutStyle.breakpoints.md - 1}px`}) {
    padding: ${({ theme }) => `${theme.layoutStyle.paddings.sm}`};
  }
`;

const DefaultLayoutContent = styled("main")`
  width: 100%;
  box-sizing: border-box;
`;
