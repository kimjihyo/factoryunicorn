import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../modules/Button";
import * as colors from "../../constants/colors";
import CompanyLogo from "../../assets/images/logo.svg";
import CompanyLogoMini from "../../assets/images/logo_mini.svg";
import ArrowDown from "../../assets/images/arrow_down.svg";

type Menu = {
  href: string;
  text: string;
  textColor?: string;
  backgroundColor?: string;
  boxShadow?: boolean;
  iconSrc?: string;
};

const Container = styled.header`
  background-color: ${colors.WHITE};
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  height: 80px;
  right: 0;
  left: 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 4px 0px;
  z-index: 100;
  @media (max-width: 1200px) {
    height: 65px;
  }
  @media (max-width: 760px) {
    height: 50px;
    padding: 0px calc((100% - 200px) / 10);
  }
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
`;
const ListItem = styled.li`
  margin-left: 2em;
`;
const Logo = styled.img`
  width: 150px;
  @media (max-width: 1200px) {
    width: 120px;
  }
`;
const LogoMini = styled.img`
  width: 35px;
`;
const Icon = styled.img`
  width: 0.8em;
`;

const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = useMemo<Menu[]>(
    () => [
      {
        href: "/#2",
        text: "마이페이지",
        textColor: colors.TEXT_PRIMARY,
        backgroundColor: "#00000000",
        iconSrc: ArrowDown,
      },
      {
        href: "/#3",
        text: "문의하기",
        boxShadow: true,
      },
    ],
    [],
  );

  return (
    <Container>
      {width > 760 ? (
        <Logo src={CompanyLogo} />
      ) : (
        <LogoMini src={CompanyLogoMini} />
      )}
      <List>
        {menus.map((menu) => (
          <ListItem key={menu.href}>
            <Button
              href={menu.href}
              backgroundColor={menu.backgroundColor}
              textColor={menu.textColor}
              boxShadow={menu.boxShadow}
              paddingVertical={width > 1200 ? 0.8 : 0.6}
              paddingHorizonal={width > 1200 ? 2 : 1}
              fontSize={width > 1200 ? 18 : 16}
            >
              {menu.text}
              {menu.iconSrc && <Icon src={menu.iconSrc} />}
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Header;
