Diagramme Entité-Relation pour le Mini-Site Basket-ball

erDiagram mermaid
USERS {
int id PK
string username
string email
string password
enum role
timestamp created_at
timestamp updated_at
}

    ARTICLES {
        int id PK
        string title
        string slug
        text content
        string featured_image
        boolean published
        int author_id FK
        timestamp created_at
        timestamp updated_at
    }

    TAGS {
        int id PK
        string name
        string slug
    }

    ARTICLE_TAGS {
        int article_id PK,FK
        int tag_id PK,FK
    }

    EVENTS {
        int id PK
        string title
        text description
        string location
        datetime event_date
        string image
        boolean published
        int created_by FK
        timestamp created_at
        timestamp updated_at
    }

    COMMENTS {
        int id PK
        text content
        string author_name
        string author_email
        int article_id FK
        int event_id FK
        boolean approved
        timestamp created_at
        timestamp updated_at
    }

    USERS ||--o{ ARTICLES : écrit
    USERS ||--o{ EVENTS : crée
    ARTICLES ||--o{ COMMENTS : reçoit
    EVENTS ||--o{ COMMENTS : reçoit
    ARTICLES ||--o{ ARTICLE_TAGS : possède
    TAGS ||--o{ ARTICLE_TAGS : catégorise

Description des relations
USERS (Utilisateurs)
Un utilisateur peut écrire plusieurs articles
Un utilisateur peut créer plusieurs événements
ARTICLES (Articles)
Un article est écrit par un seul utilisateur
Un article peut avoir plusieurs commentaires
Un article peut avoir plusieurs tags
EVENTS (Événements)
Un événement est créé par un seul utilisateur
Un événement peut avoir plusieurs commentaires
COMMENTS (Commentaires)
Un commentaire se rapporte soit à un article, soit à un événement
Un commentaire doit être approuvé avant d'être visible
TAGS (Étiquettes)
Un tag peut être associé à plusieurs articles
Un article peut avoir plusieurs tags
La relation est gérée par la table de jonction ARTICLE_TAGS
