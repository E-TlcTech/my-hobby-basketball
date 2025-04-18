// components/Admin/AdminLayout.jsx
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
//import styles from "./components/Admin/AdminLayout.module.css";
import styles from "./AdminLayout.module.css";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Chargement...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.adminLogo}>
          <span className={styles.highlight}>Knicks</span> Admin
        </div>
        <nav className={styles.adminNav}>
          <ul>
            <li>
              <Link href="/admin" className={styles.navLink}>
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link href="/admin/articles" className={styles.navLink}>
                Articles
              </Link>
            </li>
            <li>
              <Link href="/admin/evenements" className={styles.navLink}>
                Événements
              </Link>
            </li>
            <li>
              <Link href="/admin/commentaires" className={styles.navLink}>
                Commentaires
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.adminFooter}>
          <Link href="/" className={styles.viewSiteLink}>
            Voir le site
          </Link>
        </div>
      </aside>
      <main className={styles.content}>{children}</main>
    </div>
  );
}
