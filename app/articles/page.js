import Link from "next/link";
import styles from "./articles.module.css";

async function getArticles() {
  // Dans un projet réel, cette donnée viendrait de votre API
  // Simulons des données pour l'instant
  return [
    {
      id: 1,
      title: "L'histoire des New York Knicks",
      excerpt:
        "Découvrez l'histoire fascinante de la franchise des Knicks depuis sa création en 1946...",
      publishedAt: "2025-04-10",
      author: "John Smith",
      tags: ["Histoire", "NBA"],
    },
    {
      id: 2,
      title: "Les légendes des Knicks",
      excerpt:
        "De Walt Frazier à Patrick Ewing, découvrez les joueurs qui ont marqué l'histoire de la franchise...",
      publishedAt: "2025-04-08",
      author: "Mike Johnson",
      tags: ["Joueurs", "Histoire"],
    },
    {
      id: 3,
      title: "Techniques de dribble avancées",
      excerpt:
        "Apprenez les techniques de dribble utilisées par les stars des Knicks pour améliorer votre jeu...",
      publishedAt: "2025-04-05",
      author: "Sarah Williams",
      tags: ["Technique", "Entraînement"],
    },
    {
      id: 4,
      title: "Le Madison Square Garden: temple du basket",
      excerpt:
        "Plongez dans l'histoire et les secrets du célèbre Madison Square Garden, antre des Knicks...",
      publishedAt: "2025-04-01",
      author: "Robert Davis",
      tags: ["Histoire", "Lieux"],
    },
  ];
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Articles <span className={styles.highlight}>Basket-ball</span>
        </h1>
        <p>
          Découvrez notre collection rubrique sur le basket-ball et les New York
          Knicks
        </p>
      </div>

      <div className={styles.filters}>
        <div className={styles.tagFilter}>
          <span>Filtrer par tag:</span>
          <div className={styles.tagButtons}>
            <button className={`${styles.tagButton} ${styles.active}`}>
              Tous
            </button>
            <button className={styles.tagButton}>NBA</button>
            <button className={styles.tagButton}>Histoire</button>
            <button className={styles.tagButton}>Technique</button>
            <button className={styles.tagButton}>Joueurs</button>
          </div>
        </div>
      </div>

      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <article key={article.id} className={styles.articleCard}>
            <div className={styles.articleImage}>
              {/* Placeholder pour une image */}
              <div className={styles.imagePlaceholder}></div>
            </div>
            <div className={styles.articleContent}>
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
                <span className={styles.articleAuthor}>
                  Par {article.author}
                </span>
              </div>
              <h2 className={styles.articleTitle}>
                <Link href={`/articles/${article.id}`}>{article.title}</Link>
              </h2>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <div className={styles.articleTags}>
                {article.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/articles/${article.id}`}
                className={styles.readMore}
              >
                Lire le sujet...
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
