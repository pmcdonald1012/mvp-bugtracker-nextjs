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
(1,'Paully', 'compiling error server.js', '08/27/2022', 'Low', 'logged'),
(1,'Paully', 'syntax error bugs.js', '08/30/2022', 'Priority', 'in-progress'),
(1,'Paully', 'ReferenceError: $ is not defined', '09/05/2022', 'Priority', 'in-progress'),
(1,'Paully', 'SyntaxError: Invalid or unexpected token', '09/06/2022', 'Priority', 'in-progress'),
(1,'Paully', 'SyntaxError: Unexpected identifier', '09/02/2022', 'Priority', 'in-progress'),
(1,'Paully', 'TypeError: Cannot read property appendChild of null', '09/20/2022', 'Priority', 'in-progress'),
(1,'Paully', 'file not found, import error ', '08/25/2022', 'Urgent', 'complete'),
(1,'Paully', 'migration file error', '08/30/2022', 'Low', 'complete'),
(1,'Paully', '404 server not found BE req', '08/30/2022', 'Priority', 'complete');