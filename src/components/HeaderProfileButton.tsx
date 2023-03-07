import type { Session } from "next-auth";
import { Avatar, Dropdown, Text } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import type { Key } from "react";
import { useRouter } from "next/router";

type HeaderProfileButtonProps = {
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

const HeaderProfileButton = (props: HeaderProfileButtonProps) => {
  const router = useRouter();

  const loggedInUserLabel = () => {
    if (props.sessionData) {
      if (props.sessionData.user.name) {
        return props.sessionData.user.name.toString();
      } else if (props.sessionData.user.email) {
        return props.sessionData.user.email.toString();
      } else {
        return "User Error";
      }
    } else {
      return "Auth Error";
    }
  };

  const loggedInMenuItems: MenuItem[] = [
    {
      key: "loggedin",
      label: `Logged in as ${loggedInUserLabel()}`,
      bold: true,
      color: "primary",
    },
    {
      key: "profile",
      label: "Profile",
      divider: true,
      color: "primary",
      onClick: () => void router.push("/profile"),
    },
    {
      key: "dashboard",
      label: "Dashboard",
      color: "primary",
      onClick: () => void router.push("/dashboard"),
    },
    {
      key: "settings",
      label: "Settings",
      color: "primary",
      divider: true,
      onClick: () => void router.push("/settings"),
    },
    {
      key: "help",
      label: "Help & Feedback",
      color: "warning",
      onClick: () => void router.push("/help"),
      divider: true,
    },
    {
      key: "signout",
      label: "Sign out",
      onClick: () => void signOut(),
      divider: true,
      color: "error",
    },
  ];

  const loggedOutMenuItems: MenuItem[] = [
    {
      key: "signin",
      label: "Sign in",
      onClick: () => void signIn(),
      color: "primary",
    },
  ];

  let menuItems = loggedOutMenuItems;
  let profilePicture =
    "https://cdn.discordapp.com/attachments/743171804096364646/1081068865448063056/blank-profile-picture-973460_1280.png";
  if (props.sessionData) {
    profilePicture = props.sessionData.user.image
      ? props.sessionData.user.image
      : profilePicture;
    menuItems = loggedInMenuItems;
  }

  const menuAction = (actionKey: Key) => {
    const action = menuItems.find((item) => item.key === actionKey);
    console.log(action);

    if (action) {
      if (action.onClick) {
        action.onClick();
      }
    }
  };
  return (
    <>
      <Dropdown placement="bottom-right" isBordered>
        <Dropdown.Trigger>
          <Avatar
            bordered
            size="md"
            color="secondary"
            as="button"
            src={profilePicture}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu
          aria-label="Static Actions"
          items={menuItems}
          onAction={(key) => menuAction(key)}
        >
          {menuItems.map((item) => (
            <Dropdown.Item
              key={item.key}
              withDivider={item.divider}
              color={item.color ? item.color : "default"}
            >
              <Text b={item.bold}>{item.label}</Text>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default HeaderProfileButton;
