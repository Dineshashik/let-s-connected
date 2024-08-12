"use client";
import { useState } from "react";
import {
  Typography,
  Container,
  Stack,
  Popper,
  ClickAwayListener,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import {
  NavbarWrapper,
  MenuItemWrapper,
  MenuWrapper,
  LogoImage,
  DrawerMenuIcon,
  SignupProfileBoxWrapper,
  ButtonWrapper,
  DrawerListWrapper,
  DrawerListItemButton,
} from "./style";
import { useRouter } from "next/navigation";
import { CustomButton } from "../ui";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

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

const SignupNavbar = ({ type }: { type: "founder" | "investor" | "admin" }) => {
  const [open, setOpen] = useState(false);
  const [anchorElProfile, setAnchorElProfile] = useState<null | HTMLElement>(
    null
  );
  const router = useRouter();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const openProfilePopper = Boolean(anchorElProfile);
  const profileId = openProfilePopper ? "simple-popper" : undefined;

  const handleClose = () => {
    setAnchorElProfile(null);
  };

  const handleLogout = () => {
    router.push(process.env.NEXT_PUBLIC_REDIRECT_URL as string);
  };

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
            <DrawerListItemButton>
              <Typography onClick={() => router.push(item.link)}>
                {item.label}
              </Typography>
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
          color="skyblue"
          variant="text"
          onClick={() => router.push("/signin")}
        >
          Login
        </CustomButton>
        <Stack justifyContent="center">
          <CustomButton color="blue" onClick={() => router.push("/signup")}>
            Sign Up
          </CustomButton>
        </Stack>
      </Stack>
    </DrawerListWrapper>
  );

  return (
    <NavbarWrapper position="static">
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between">
          <Stack
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            direction="row"
          >
            <DrawerMenuIcon fontSize="large" onClick={toggleDrawer(true)} />
            <LogoImage
              src="/assets/images/letsconnectlogo.svg"
              // src="/assets/images/logo-white.svg"
              alt="logo"
              width={192}
              height={30}
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer' }}
            />
          </Stack>
          <MenuWrapper direction="row">
            {pagesMd.map((item) => (
              <MenuItemWrapper
                key={item.label}
                sx={{ my: 2 }}
                onClick={() => router.push(item.link)}
              >
                {item.label}
              </MenuItemWrapper>
            ))}
          </MenuWrapper>
          <ButtonWrapper direction="row" pr={{ md: 2 }}>
            <CustomButton
              color="transparent"
              variant="text"
              onClick={() => router.push("/signin")}
            >
              Login
            </CustomButton>
            <Stack justifyContent="center">
              <CustomButton
                color="white"
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </CustomButton>
            </Stack>
          </ButtonWrapper>

          <Popper
            id={profileId}
            open={openProfilePopper}
            anchorEl={anchorElProfile}
            placement="bottom-start"
            sx={{ zIndex: 1 }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <SignupProfileBoxWrapper>
                <Typography
                  variant="h6"
                  color="error"
                  py={2}
                  px={6}
                  sx={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </Typography>
              </SignupProfileBoxWrapper>
            </ClickAwayListener>
          </Popper>
        </Stack>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Container>
    </NavbarWrapper>
  );
};

export default SignupNavbar;
