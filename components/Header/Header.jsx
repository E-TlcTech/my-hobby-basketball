// components/Header/Header.jsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import styles from "./Header/Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles.logoText}>
            <span className={styles.knicks}>Knicks</span> Basketball
          </span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={pathname.startsWith("/articles") ? styles.active : ""}>
            <Link href="/articles">Articles</Link>
          </li>
          <li
            className={pathname.startsWith("/evenements") ? styles.active : ""}
          >
            <Link href="/evenements">Événements</Link>
          </li>
          {session ? (
            <>
              <li
                className={pathname.startsWith("/admin") ? styles.active : ""}
              >
                <Link href="/admin">Admin</Link>
              </li>
              <li>
                <button onClick={() => signOut()} className={styles.logoutBtn}>
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <li className={pathname === "/login" ? styles.active : ""}>
              <Link href="/login">Connexion</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
