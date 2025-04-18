-- Utilisateurs (mot de passe: password123)
-- Note: Dans une application réelle, les mots de passe seraient hachés avec bcrypt
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@myhobbybasketball.com', '$2a$12$1zGLuYDDNvyqJAUQ7iXyOuq.0U8E8O0GbQoK1wDCSHCIF1Z.WSn6.', 'admin'),
('editor', 'editor@myhobbybasketball.com', '$2a$12$1zGLuYDDNvyqJAUQ7iXyOuq.0U8E8O0GbQoK1wDCSHCIF1Z.WSn6.', 'editor');

-- Tags
INSERT INTO tags (name, slug) VALUES
('NBA', 'nba'),
('EuroLeague', 'euroleague'),
('Technique', 'technique'),
('Équipement', 'equipement'),
('Histoire', 'histoire'),
('Actualités', 'actualites');

-- Articles
INSERT INTO articles (title, slug, content, featured_image, published, author_id) VALUES
('Les fondamentaux du basket-ball', 'les-fondamentaux-du-basket-ball', 
'<h2>Les bases essentielles pour tout joueur de basket</h2>
<p>Le basket-ball est un sport qui demande une combinaison de compétences techniques, physiques et mentales. Dans cet article, nous allons explorer les fondamentaux que tout joueur devrait maîtriser.</p>
<h3>Le dribble</h3>
<p>Le dribble est l''une des techniques les plus fondamentales au basket. Il s''agit de faire rebondir le ballon au sol d''une main à l''autre tout en se déplaçant ou en restant sur place. Un bon dribble permet de se déplacer efficacement sur le terrain tout en conservant la possession du ballon.</p>
<h3>Le tir</h3>
<p>Le tir est l''action de lancer le ballon vers le panier avec l''intention de marquer des points. Il existe différents types de tirs : le tir en suspension, le lay-up, le dunk, etc. La précision et la constance dans le tir sont des compétences qui se développent avec la pratique.</p>
<h3>La passe</h3>
<p>La passe est l''action de transmettre le ballon à un coéquipier. Une bonne passe doit être précise, rapide et adaptée à la situation de jeu. Les différents types de passes incluent la passe à deux mains, la passe à une main, la passe rebond, etc.</p>',
'/images/basketball-basics.jpg', 1, 1),

('L''histoire des grands champions de la NBA', 'histoire-grands-champions-nba', 
'<h2>De Bill Russell à LeBron James</h2>
<p>La NBA a vu défiler certains des plus grands athlètes de l''histoire du sport. Dans cet article, nous retraçons le parcours des légendes qui ont façonné ce jeu.</p>
<h3>L''ère Bill Russell et Wilt Chamberlain</h3>
<p>Dans les années 1960, Bill Russell et Wilt Chamberlain ont dominé le jeu de manière impressionnante. Russell a remporté 11 championnats NBA en 13 saisons avec les Boston Celtics, tandis que Chamberlain détient toujours le record du plus grand nombre de points marqués dans un match (100).</p>
<h3>Michael Jordan et l''âge d''or des Bulls</h3>
<p>Michael Jordan est considéré par beaucoup comme le meilleur joueur de tous les temps. Avec les Chicago Bulls, il a remporté 6 championnats NBA et a révolutionné le jeu ainsi que le marketing sportif à l''échelle mondiale.</p>
<h3>L''ère moderne : LeBron James</h3>
<p>LeBron James est souvent comparé à Jordan pour le titre du GOAT (Greatest Of All Time). Sa polyvalence, sa longévité et ses performances exceptionnelles en font l''un des joueurs les plus dominants de l''histoire.</p>',
'/images/nba-legends.jpg', 1, 2),

('Comment choisir ses chaussures de basket', 'choisir-chaussures-basket', 
'<h2>Guide complet pour sélectionner la paire idéale</h2>
<p>Les chaussures sont probablement l''équipement le plus important pour un joueur de basket. Voici comment choisir les meilleures pour votre style de jeu.</p>
<h3>L''amorti</h3>
<p>L''amorti est crucial pour absorber les impacts lors des sauts et des courses. Les technologies comme Nike Air, Adidas Boost ou Under Armour HOVR offrent différents types d''amorti adaptés à divers styles de jeu.</p>
<h3>Le maintien</h3>
<p>Un bon maintien de la cheville est essentiel pour prévenir les blessures. Les chaussures montantes offrent généralement un meilleur maintien, tandis que les modèles bas privilégient la liberté de mouvement.</p>
<h3>L''adhérence</h3>
<p>La semelle doit offrir une excellente adhérence sur tous types de surfaces. Vérifiez les motifs de la semelle et le type de caoutchouc utilisé pour vous assurer qu''ils conviennent à votre surface de jeu habituelle.</p>',
'/images/basketball-shoes.jpg', 0, 1);

-- Événements
INSERT INTO events (title, description, location, event_date, image, published, created_by) VALUES
('Tournoi de basket 3x3', 'Participez à notre tournoi annuel de basket 3x3! Ouvert à tous les niveaux, venez vous amuser et peut-être remporter des prix exceptionnels.', 'Parc municipal, Paris', '2025-05-15 10:00:00', '/images/3x3-tournament.jpg', 1, 1),
('Masterclass techniques de tir', 'Apprenez les techniques de tir des pros avec notre coach certifié. Cette session est idéale pour les joueurs intermédiaires qui souhaitent améliorer leur précision.', 'Gymnase Jean Moulin, Lyon', '2025-06-10 14:00:00', '/images/shooting-clinic.jpg', 1, 2),
('Projection du documentaire "The Last Dance"', 'Rejoignez-nous pour une projection spéciale du documentaire sur Michael Jordan et les Chicago Bulls, suivie d''un débat sur l''héritage de cette équipe légendaire.', 'Cinéma Le Grand Rex, Paris', '2025-04-25 19:30:00', '/images/last-dance.jpg', 0, 1);

-- Commentaires
INSERT INTO comments (content, author_name, author_email, article_id, event_id, approved) VALUES
('Super article ! J''ai beaucoup appris sur les fondamentaux que je négligeais. Merci pour ces conseils.', 'Thomas', 'thomas@example.com', 1, NULL, 1),
('Je suis d''accord avec le choix des chaussures, mais je pense que la respirabilité est aussi un facteur important à considérer.', 'Sophie', 'sophie@example.com', 3, NULL, 1),
('Est-ce que ce tournoi est ouvert aux débutants ? J''aimerais participer mais je n''ai pas beaucoup d''expérience.', 'Lucas', 'lucas@example.com', NULL, 1, 1),
('Michael Jordan restera toujours le meilleur pour moi ! Personne n''a eu son impact sur le jeu.', 'Marc', 'marc@example.com', 2, NULL, 0);

-- Association articles-tags
INSERT INTO article_tags (article_id, tag_id) VALUES
(1, 3), -- Les fondamentaux du basket-ball - Technique
(2, 1), -- L'histoire des grands champions de la NBA - NBA
(2, 5), -- L'histoire des grands champions de la NBA - Histoire
(3, 4); -- Comment choisir ses chaussures de basket - Équipement