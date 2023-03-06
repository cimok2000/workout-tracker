import { Button, Tooltip } from "@nextui-org/react";

type ButtonWithTooltipProps = {
  content: string;
  rounded?: boolean;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const ButtonWithTooltip = (props: ButtonWithTooltipProps) => {
  return (
    <Tooltip
      content={props.content}
      color={props.color ? props.color : "default"}
    >
      <Button
        disabled={props.disabled}
        rounded={props.rounded}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </Tooltip>
  );
};

export default ButtonWithTooltip;
