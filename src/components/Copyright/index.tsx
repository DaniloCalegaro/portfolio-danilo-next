import { ContainerCopyright, InfoCopyright, LogoCopyright } from "./styles";

export function Copyright() {
  return (
    <ContainerCopyright>
      <LogoCopyright>
        <strong>DC</strong>
      </LogoCopyright>
      <InfoCopyright>
        <span>© 2026 Danilo Calegaro</span>
        <p>Feito com ♥ em Batatais - SP, Brasil.</p>
      </InfoCopyright>
    </ContainerCopyright>
  );
}
