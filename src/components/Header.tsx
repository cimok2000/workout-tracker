import Head from "next/head";
import type { Session } from "next-auth";
import ThemeSwitch from "./ThemeSwitch";
import HeaderProfileButton from "./HeaderProfileButton";
import { Navbar, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { signIn, signOut } from "next-auth/react";

type HeaderProps = {
  title: string;
  sessionData: Session | null;
};

type MenuItem = {
  key: string;
  label: string;
  onClick?: () => void;
  divider?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
  bold?: boolean;
};

const Header = (props: HeaderProps) => {
  const router = useRouter();

  const loggedInMenuItems: MenuItem[] = [
    {
      key: "profile",
      label: "Profile",
      onClick: () => void router.push("/profile"),
    },
    {
      key: "dashboard",
      label: "Dashboard",
      onClick: () => void router.push("/dashboard"),
    },
    {
      key: "settings",
      label: "Settings",
      onClick: () => void router.push("/settings"),
    },
    {
      key: "logout",
      label: "Logout",
      onClick: () => void signOut(),
    },
  ];

  const loggedOutMenuItems: MenuItem[] = [
    {
      key: "login",
      label: "Login",
      onClick: () => void signIn(),
    },
  ];

  const menuItems = props.sessionData ? loggedInMenuItems : loggedOutMenuItems;

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content="Workout Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          <Text
            b
            color="inherit"
            hideIn="xs"
            onClick={() => void router.push("/")}
          >
            Workout
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight>
          <ThemeSwitch />
          <HeaderProfileButton sessionData={props.sessionData} />
        </Navbar.Content>
        <Navbar.Collapse showIn="xs">
          {menuItems.map((item) => (
            <Navbar.CollapseItem
              key={item.key}
              activeColor={item.color ? item.color : "default"}
              onClick={item.onClick}
              as="button"
            >
              <Text b>{item.label}</Text>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
