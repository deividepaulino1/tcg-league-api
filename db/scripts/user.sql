CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    sobrenome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    ativo BOOLEAN DEFAULT 1,
    emailConfirmado BOOLEAN DEFAULT 0,
    data_criacao TEXT DEFAULT (datetime('now'))
);
