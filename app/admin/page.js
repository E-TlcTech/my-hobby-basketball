// app/admin/page.js
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//import AdminLayout from "@/components/AdminLayout";
import AdminLayout from "@/components/Admin/AdminLayout";
import styles from "./admin.module.css";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    articles: 0,
    events: 0,
    comments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchStats();
    }
  }, [status, router]);

  const fetchStats = async () => {
    try {
      // Dans un projet réel, cette donnée viendrait de votre API
      // Simulons des données pour l'instant
      setStats({
        articles: 8,
        events: 3,
        comments: 12,
      });
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques", error);
      setLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <AdminLayout>
        <div className={styles.loading}>Chargement...</div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className={styles.dashboard}>
        <h1>Tableau de bord</h1>
        <p className={styles.welcome}>
          Bienvenue, {session?.user?.name || "Admin"} !
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Articles</h3>
            <p className={styles.statNumber}>{stats.articles}</p>
            <a href="/admin/articles" className={styles.cardLink}>
              Gérer les articles
            </a>
          </div>

          <div className={styles.statCard}>
            <h3>Événements</h3>
            <p className={styles.statNumber}>{stats.events}</p>
            <a href="/admin/evenements" className={styles.cardLink}>
              Gérer les événements
            </a>
          </div>

          <div className={styles.statCard}>
            <h3>Commentaires</h3>
            <p className={styles.statNumber}>{stats.comments}</p>
            <a href="/admin/commentaires" className={styles.cardLink}>
              Gérer les commentaires
            </a>
          </div>
        </div>

        <div className={styles.quickActions}>
          <h2>Actions rapides</h2>
          <div className={styles.actionButtons}>
            <a href="/admin/articles/new" className={styles.actionButton}>
              Nouvel article
            </a>
            <a href="/admin/evenements/new" className={styles.actionButton}>
              Nouvel événement
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
