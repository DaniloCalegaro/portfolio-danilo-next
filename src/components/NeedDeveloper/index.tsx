import { motion } from "framer-motion";
import Link from "next/link";

import { ArrowRight } from "phosphor-react";
import { fadeIn } from "../../motion/variants";

import { ContainerNeedDeveloper } from "./styles";

export function NeedDeveloper() {
  return (
    <ContainerNeedDeveloper
      id="needDeveloper"
      variants={fadeIn("up")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.span className="index" variants={fadeIn("up")}>
        Precisa de um desenvolvedor?
      </motion.span>
      <Link href="/contact" className="title">
        <motion.span
          variants={fadeIn("up")}
          style={{ display: "inline-block" }}
        >
          Vamos trabalhar juntos <ArrowRight size={50} />
        </motion.span>
      </Link>
    </ContainerNeedDeveloper>
  );
}
