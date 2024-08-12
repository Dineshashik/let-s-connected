"use client";
import { useState } from "react";
import {
  Typography,
  Container,
  Stack,
  ListItem,
  List,
  Drawer,
} from "@mui/material";
import { CustomButton } from "../ui";
import {
  NavbarWrapper,
  MenuItemWrapper,
  MenuWrapper,
  LogoImage,
  DrawerMenuIcon,
  DrawerListItemButton,
  ButtonWrapper,
  DrawerListWrapper,
} from "./style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter, usePathname } from "next/navigation";
import "./style.css";

const pagesMd = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Founders",
    link: "/founders",
  },
  {
    label: "Investors",
    link: "/investors",
  },
  // {
  //   label: "Pricing",
  //   link: "/pricing",
  // },
  {
    label: "Contact",
    link: "/contact",
  },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const router = useRouter();
  const pathname = usePathname();

  const DrawerList = (
    <DrawerListWrapper onClick={toggleDrawer(false)}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={3}
        mx={2}
      >
        <LogoImage
          // src="/assets/icon/logo.svg"
          src="/assets/images/letsconnect-gradient.svg"
          alt="logo"
          width={192}
          height={30}
        />
        <CloseIcon onClick={toggleDrawer(false)} sx={{ color: "#425466" }} />
      </Stack>
      <List>
        {pagesMd.map((item, index) => (
          <ListItem key={index} disablePadding>
            <DrawerListItemButton onClick={() => router.push(item.link)}>
              <Typography>{item.label}</Typography>
              <KeyboardArrowRightIcon sx={{ color: "#425466" }} />
            </DrawerListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        pr={{ md: 2 }}
        spacing={3}
        mt={3}
      >
        <CustomButton
          color="gradient"
          variant="text"
          // icon="default"
          onClick={() => router.push("/signin")}
        >
          Login
        </CustomButton>
        <Stack justifyContent="center">
          <CustomButton color="gradient" onClick={() => router.push("/signup")}>
            Sign Up
          </CustomButton>
        </Stack>
      </Stack>
    </DrawerListWrapper>
  );

  return (
    <NavbarWrapper position="static">
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          my={{ xs: 2, md: 0 }}
        >
          <Stack
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            direction="row"
          >
            <DrawerMenuIcon fontSize="large" onClick={toggleDrawer(true)} />
            <LogoImage
              src="/assets/icon/let_connect.svg"
              alt="logo"
              width={255}
              height={50}
              onClick={() => router.push("/")}
              style={{ cursor: "pointer" }}
            />
          </Stack>
          <MenuWrapper direction="row">
            {pagesMd.map((item) => (
              <MenuItemWrapper
                className={pathname === item.link ? "active-header" : ""}
                key={item.label}
                sx={{ my: 2 }}
                onClick={() => router.push(item.link)}
              >
                {item.label}
              </MenuItemWrapper>
            ))}
          </MenuWrapper>
          <ButtonWrapper direction="row" pr={{ md: 2 }}>
            <Stack justifyContent="center" marginRight={"20px"}>
              <CustomButton
                //  icon="default"
                color="gradient"
                variant="contained"
                onClick={() => router.push("/signin")}
              >
                Login
              </CustomButton>
            </Stack>
            {/* <Stack justifyContent="center">
              <CustomButton
                // color="white"
                 color="gradient"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </CustomButton>
            </Stack> */}
          </ButtonWrapper>
        </Stack>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
