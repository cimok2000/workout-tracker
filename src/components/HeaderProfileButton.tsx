import type { Session } from "next-auth";
import { Avatar, Dropdown } from "@nextui-org/react";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

type HeaderProfileButtonProps = {
  sessionData: Session | null;
};

type MenuItem = {
  key: string;
  label: string;
  href?: string;
  onClick?: () => void;
  divider?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
};

const loggedInMenuItems: MenuItem[] = [
  { key: "profile", label: "Profile", href: "/profile" },
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "settings", label: "Settings", href: "/settings" },
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

const HeaderProfileButton = (props: HeaderProfileButtonProps) => {
  let menuItems = loggedOutMenuItems;
  let profilePicture =
    "https://cdn.discordapp.com/attachments/743171804096364646/1081068865448063056/blank-profile-picture-973460_1280.png";
  if (props.sessionData) {
    profilePicture = props.sessionData.user.image
      ? props.sessionData.user.image
      : profilePicture;
    menuItems = loggedInMenuItems;
  }
  return (
    <>
      <Dropdown>
        <Dropdown.Trigger>
          <Avatar
            bordered
            size="md"
            color="secondary"
            as="button"
            src={profilePicture}
          />
        </Dropdown.Trigger>
        <Dropdown.Menu aria-label="Static Actions" items={menuItems}>
          {menuItems.map((item) => (
            <Dropdown.Item
              key={item.key}
              withDivider={item.divider}
              color={item.color ? item.color : "default"}
            >
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <div onClick={item.onClick}>{item.label}</div>
              )}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default HeaderProfileButton;
