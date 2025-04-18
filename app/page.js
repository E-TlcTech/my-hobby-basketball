import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  // Ici vous pourriez fetcher vos articles et événements récents
  // depuis votre API

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Bienvenue sur le <span className={styles.highlight}>Knicks</span>{" "}
            Basketball Fansite
          </h1>
          <p>
            Découvrez toute les news, les techniques et la fantastic histoire du
            basketball à travers le prisme des New York Knicks.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/articles" className={`btn ${styles.primaryBtn}`}>
              Voir les articles
            </Link>
            <Link href="/events" className={`btn ${styles.secondaryBtn}`}>
              Événements à venir
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImage}>
            {/* Vous pourriez ajouter une image des Knicks ici */}
            <div className={styles.placeholder}>
              <div className={styles.knicksBall}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <h2>Articles récents</h2>
        <div className={styles.cardGrid}>
          {/* Cartes d'articles (à remplacer par des données réelles) */}
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <h3>Les légendes des Knicks</h3>
              <p>
                Découvrez les plus grands joueurs ayant porté le maillot des
                Knicks...
              </p>
              <Link href="/articles/1" className={styles.readMore}>
                Lire plus
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <h3>Techniques de dribble avancées</h3>
              <p>
                Apprenez les techniques de dribble utilisées par les stars des
                Knicks...
              </p>
              <Link href="/articles/2" className={styles.readMore}>
                Lire plus
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <h3>Le Madison Square Garden</h3>
              <p>Tout sur la mythique salle des Knicks...</p>
              <Link href="/articles/3" className={styles.readMore}>
                Lire plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.eventSection}>
        <h2>Événements à venir</h2>
        <div className={styles.eventList}>
          {/* Liste d'événements (à remplacer par des données réelles) */}
          <div className={styles.eventCard}>
            <div className={styles.eventDate}>
              <span className={styles.day}>15</span>
              <span className={styles.month}>Mai</span>
            </div>
            <div className={styles.eventInfo}>
              <h3>Match Knicks vs Lakers</h3>
              <p>Madison Square Garden, 20h00</p>
            </div>
            <Link href="/events/1" className={styles.eventBtn}>
              Détails
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.footerSection}>
        <p>&copy; 2025 Knicks Fansite. Tous droits réservés.</p>
        <p>
          <Link href="/privacy-policy">Politique de Confidentialité</Link> |{" "}
          <Link href="/terms-of-service">Conditions utilisateur</Link>
        </p>
        <p>
          Suivez-nous sur{" "}
          <Link href="https://twitter.com/Knicks" target="_blank">
            Twitter
          </Link>{" "}
          |{" "}
          <Link href="https://instagram.com/Knicks" target="_blank">
            Instagram
          </Link>{" "}
          |{" "}
          <Link href="https://facebook.com/Knicks" target="_blank">
            Facebook
          </Link>
        </p>
      </section>
    </div>
  );
}
