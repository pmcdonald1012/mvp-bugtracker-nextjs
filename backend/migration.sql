DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS bugs;
CREATE TABLE users (
    userid serial PRIMARY KEY,
    username text
);
CREATE TABLE bugs (
    bugid serial PRIMARY KEY,
    userid int, 
    createdby text, 
    description text, 
    duedate text,
    level text,  
    status text, 
    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE
);
INSERT INTO users (username) VALUES ('Paully');
INSERT INTO bugs (userid, createdby, description, duedate, level, status) VALUES 
(1,'Paully', 'take dogs for a walk', '08/27/2022', 'low', 'logged'),
(1,'Paully', 'finish react project', '08/30/2022', 'priority', 'in-progress'),
(1,'Paully', 'eat lunch', '08/25/2022', 'urgent', 'complete');