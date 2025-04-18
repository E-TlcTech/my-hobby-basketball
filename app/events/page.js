// app/evenements/page.js
import Link from "next/link";
import styles from "./events.module.css";

async function getEvents() {
  // Dans un projet réel, ces données viendraient de votre API
  // Simulons des données pour l'instant
  const events = [
    {
      id: 1,
      title: "Match d'exhibition Knicks vs. Nets",
      description:
        "Match amical entre les New York Knicks et les Brooklyn Nets au Madison Square Garden.",
      eventDate: "2025-05-15T19:30:00",
      location: "Madison Square Garden, New York",
      tags: ["Match", "NBA"],
    },
    {
      id: 2,
      title: "Tournoi de basket 3x3",
      description:
        "Participez à notre tournoi de basket 3x3 ouvert à tous les niveaux. Inscriptions en équipe ou individuelles.",
      eventDate: "2025-06-10T10:00:00",
      location: "Rucker Park, Harlem, New York",
      tags: ["Tournoi", "3x3", "Amateur"],
    },
    {
      id: 3,
      title: "Clinic de perfectionnement technique",
      description:
        "Session d'entraînement dirigée par d'anciens joueurs professionnels. Focus sur le tir et le dribble.",
      eventDate: "2025-06-25T14:00:00",
      location: "Basketball City, New York",
      tags: ["Entraînement", "Technique"],
    },
    {
      id: 4,
      title: "Conférence: Histoire du basket new-yorkais",
      description:
        "Conférence animée par des historiens du sport sur l'évolution du basket-ball à New York depuis les années 50.",
      eventDate: "2025-07-05T18:00:00",
      location: "Bibliothèque publique de New York",
      tags: ["Conférence", "Histoire"],
    },
  ];

  return events;
}

export default async function EventsPage() {
  const events = await getEvents();

  // Fonction pour formater la date et l'heure
  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };

    return {
      date: date.toLocaleDateString("fr-FR", dateOptions),
      time: date.toLocaleTimeString("fr-FR", timeOptions),
    };
  };

  return (
    <div className={styles.container}>
      <header className={styles.pageHeader}>
        <h1>Événements Basket-ball</h1>
        <p>
          Découvrez les prochains matchs, tournois et activités autour du basket
        </p>
      </header>

      <div className={styles.filters}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Rechercher un événement..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Rechercher</button>
        </div>

        <div className={styles.tagFilters}>
          <span className={styles.filterLabel}>Filtrer par catégorie:</span>
          <div className={styles.tagButtons}>
            <button className={`${styles.tagButton} ${styles.active}`}>
              Tous
            </button>
            <button className={styles.tagButton}>Match</button>
            <button className={styles.tagButton}>Tournoi</button>
            <button className={styles.tagButton}>Entraînement</button>
            <button className={styles.tagButton}>Conférence</button>
          </div>
        </div>
      </div>

      <div className={styles.eventsContainer}>
        <div className={styles.timelineBar}></div>

        <div className={styles.eventsList}>
          {events.map((event) => {
            const { date, time } = formatDateTime(event.eventDate);

            return (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventDate}>
                  <div className={styles.dateCircle}>
                    <span className={styles.dateMonth}>
                      {date.split(" ")[1]}
                    </span>
                    <span className={styles.dateDay}>{date.split(" ")[0]}</span>
                  </div>
                  <div className={styles.dateTime}>{time}</div>
                </div>

                <div className={styles.eventContent}>
                  <h2 className={styles.eventTitle}>
                    <Link href={`/evenements/${event.id}`}>{event.title}</Link>
                  </h2>

                  <div className={styles.eventLocation}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  <p className={styles.eventDescription}>{event.description}</p>

                  <div className={styles.eventFooter}>
                    <div className={styles.eventTags}>
                      {event.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/events/${event.id}`}
                      className={styles.detailsButton}
                    >
                      Détails & Inscription
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
