import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { SunIcon } from "../assets/icons/Sun";
import { MoonIcon } from "../assets/icons/Moon";

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();
  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      iconOn={<SunIcon />}
      iconOff={<MoonIcon />}
    />
  );
};

export default ThemeSwitch;
