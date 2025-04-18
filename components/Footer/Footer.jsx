// components/Footer/Footer.jsx
import Link from "next/link";
import styles from "./Footer/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="/articles">Articles</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Knicks Basketball Fansite. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
