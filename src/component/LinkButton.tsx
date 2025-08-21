import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";
import styles from "./LinkButton.module.css";

export default function LinkButton(props: {
  href: string;
  disabled?: boolean;
  vertical?: boolean;
  children: ReactNode;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link
      className={[
        [styles.LinkButton],
        props.disabled ? [styles.disabled] : [],
        props.vertical ? [styles.vertical] : [],
      ]
        .flatMap((s) => s)
        .join(" ")}
      href={props.disabled ? "#" : props.href}
      target={props.target}
    >
      {props.children}
    </Link>
  );
}
