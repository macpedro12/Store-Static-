import styles from "./styles.module.scss";

import Link from "next/link";
export default function Header() {
  return (
    <div className={styles.all}>
      <div className={styles.title}>
        <h1>Store X</h1>
      </div>
      <div className={styles.options}>
        <Link href="/">
          <a>Promoções</a>
        </Link>
        <Link href="/">
          <a>Produtos</a>
        </Link>
        <Link href="/">
          <a>Contato</a>
        </Link>
      </div>
    </div>
  );
}
