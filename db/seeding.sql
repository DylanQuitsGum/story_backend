-- Insert into genres table with default values for createdAt and updatedAt
INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Adventure', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Adventure');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Fantasy', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Fantasy');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Fairy Tales', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Fairy Tales');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Folktales', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Folktales');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Science Fiction', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Science Fiction');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Mystery', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Mystery');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Humor', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Humor');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Animal Stories', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Animal Stories');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Historical Fiction', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Historical Fiction');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Educational', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Educational');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Friendship', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Friendship');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Growth and Development', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Growth and Development');

INSERT INTO genres (genre, createdAt, updatedAt)
SELECT 'Picture Books', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM genres WHERE genre = 'Picture Books');

-- Insert into themes table
INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Friendship', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Friendship');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Courage and Bravery', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Courage and Bravery');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Imagination and Creativity', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Imagination and Creativity');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Identity and Self-Discovery', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Identity and Self-Discovery');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Acceptance and Inclusion', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Acceptance and Inclusion');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Kindness and Empathy', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Kindness and Empathy');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Adventure and Exploration', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Adventure and Exploration');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Nature and Environment', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Nature and Environment');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Family and Relationships', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Family and Relationships');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Resilience and Perseverance', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Resilience and Perseverance');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Growing Up and Change', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Growing Up and Change');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Humor and Playfulness', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Humor and Playfulness');

INSERT INTO themes (theme, createdAt, updatedAt)
SELECT 'Problem-Solving and Critical Thinking', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM themes WHERE theme = 'Problem-Solving and Critical Thinking');

-- Insert into countries table
INSERT INTO countries (country, createdAt, updatedAt) 
SELECT 'United States', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM countries WHERE country = 'United States');

INSERT INTO countries (country, createdAt, updatedAt) 
SELECT 'Germany', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM countries WHERE country = 'Germany');

INSERT INTO countries (country, createdAt, updatedAt) 
SELECT 'France', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM countries WHERE country = 'France');

INSERT INTO countries (country, createdAt, updatedAt) 
SELECT 'Mexico', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM countries WHERE country = 'Mexico');

-- Insert into languages table
INSERT INTO languages (language, createdAt, updatedAt) 
SELECT 'English', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM languages WHERE language = 'English');

INSERT INTO languages (language, createdAt, updatedAt) 
SELECT 'German', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM languages WHERE language = 'German');

INSERT INTO languages (language, createdAt, updatedAt) 
SELECT 'French', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM languages WHERE language = 'French');

INSERT INTO languages (language, createdAt, updatedAt) 
SELECT 'Spanish', NOW(), NOW()
WHERE NOT EXISTS (SELECT 1 FROM languages WHERE language = 'Spanish');
