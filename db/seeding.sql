INSERT INTO genres (genre)
SELECT 'Adventure' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Adventure' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Fantasy' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Fantasy' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Fairy Tales' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Fairy Tales' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Folktales' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Folktales' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Science Fiction' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Science Fiction' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Mystery' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Mystery' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Humor' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Humor' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Animal Stories' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Animal Stories' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Historical Fiction' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Historical Fiction' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Educational' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Educational' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Friendship' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Friendship' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Growth and Development' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Growth and Development' LIMIT 1);

INSERT INTO genres (genre)
SELECT 'Picture Books' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres WHERE genre = 'Picture Books' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Friendship' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Friendship' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Courage and Bravery' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Courage and Bravery' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Imagination and Creativity' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Imagination and Creativity' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Identity and Self-Discovery' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Identity and Self-Discovery' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Acceptance and Inclusion' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Acceptance and Inclusion' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Kindness and Empathy' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Kindness and Empathy' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Adventure and Exploration' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Adventure and Exploration' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Nature and Environment' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Nature and Environment' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Family and Relationships' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Family and Relationships' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Resilience and Perseverance' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Resilience and Perseverance' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Growing Up and Change' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Growing Up and Change' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Humor and Playfulness' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Humor and Playfulness' LIMIT 1);

INSERT INTO themes (theme)
SELECT 'Problem-Solving and Critical Thinking' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM themes WHERE theme = 'Problem-Solving and Critical Thinking' LIMIT 1);


INSERT INTO countries (country) 
SELECT 'United States' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM countries 
      WHERE country='United States' LIMIT 1);

INSERT INTO countries (country) 
SELECT 'Germany' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM countries 
      WHERE country='Germany' LIMIT 1);

INSERT INTO countries (country) 
SELECT 'France' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM countries 
      WHERE country='France' LIMIT 1);

INSERT INTO countries (country) 
SELECT 'Mexico' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM countries 
      WHERE country='Mexico' LIMIT 1);



INSERT INTO languages (language) 
SELECT 'English' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM languages 
      WHERE language='English' LIMIT 1);

INSERT INTO languages (language) 
SELECT 'German' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM languages 
      WHERE language='German' LIMIT 1);

INSERT INTO languages (language) 
SELECT 'French' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM languages 
      WHERE language='French' LIMIT 1);

INSERT INTO languages (language) 
SELECT 'Spanish' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM languages 
      WHERE language='Spanish' LIMIT 1);