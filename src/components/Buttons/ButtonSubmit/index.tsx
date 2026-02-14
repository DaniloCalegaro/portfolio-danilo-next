import { ArrowRight, CircleNotch } from "phosphor-react";
import { ContainerBtnContactMe } from "./style";

interface ButtonSubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  isSendingMessage?: boolean;
}

export function ButtonSubmit({
  name,
  isSendingMessage = false,
  ...rest
}: ButtonSubmitProps) {
  return (
    <ContainerBtnContactMe $isSendingMessage={isSendingMessage}>
      <button type="submit" {...rest} disabled={isSendingMessage}>
        {isSendingMessage ? "Enviando mensagem..." : name}
        {isSendingMessage ? (
          <CircleNotch size={20}>
            {" "}
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 0 0"
              to="360 0 0"
              repeatCount="indefinite"
            />
          </CircleNotch>
        ) : (
          <ArrowRight size={20} />
        )}
      </button>
    </ContainerBtnContactMe>
  );
}
