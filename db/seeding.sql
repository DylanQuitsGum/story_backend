INSERT INTO genres (genre) 
SELECT 'Fantasy' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres 
      WHERE genre='Fantasy' LIMIT 1);

INSERT INTO genres (genre) 
SELECT 'Adventure' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres 
      WHERE genre='Adventure' LIMIT 1);

INSERT INTO genres (genre) 
SELECT 'Science Fiction' FROM DUAL 
WHERE NOT EXISTS (SELECT * FROM genres 
      WHERE genre='Science Fiction' LIMIT 1);

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