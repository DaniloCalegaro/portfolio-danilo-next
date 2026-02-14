import React, { FC, forwardRef } from "react";
import { ContainerBtnContactMe } from "./styles";

export type ButtonRedirectProps = {
  name?: string;
  icon?: React.ReactNode;
  url?: string;
  target_blank?: boolean;
};

const ButtonRedirect: FC<ButtonRedirectProps> = forwardRef<
  HTMLAnchorElement,
  ButtonRedirectProps
>(({ name, url, icon, target_blank = false, ...props }, ref) => {
  return (
    <ContainerBtnContactMe
      as={url ? "a" : "div"}
      ref={ref}
      href={url}
      target={target_blank ? "_blank" : "_self"}
      rel="noreferrer"
      {...props}
    >
      {icon}
      {name}
    </ContainerBtnContactMe>
  );
});

ButtonRedirect.displayName = "ButtonRedirect";

export default ButtonRedirect;
