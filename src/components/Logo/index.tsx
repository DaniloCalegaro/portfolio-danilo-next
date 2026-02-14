import Link from "next/link";
import { ContainerLogo } from "./styles";

interface LogoProps {
  isBaseDark?: boolean;
}

export function Logo({ isBaseDark = false }: LogoProps) {
  return (
    <Link href="/">
      <ContainerLogo $isBaseDark={isBaseDark}>
        <div className="design">
          <strong>DC</strong>
        </div>
        <div className="info">
          <strong className="name">Danilo Calegaro</strong>
          <span className="description">Full Stack Developer</span>
        </div>
      </ContainerLogo>
    </Link>
  );
}
