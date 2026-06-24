-- Таблица разделов для учётных данных (дерево)
CREATE TABLE t_p34673685_special_systems_proj.credential_folders (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES t_p34673685_special_systems_proj.credential_folders(id),
    name VARCHAR(255) NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Таблица учётных записей
CREATE TABLE t_p34673685_special_systems_proj.credentials (
    id SERIAL PRIMARY KEY,
    folder_id INTEGER REFERENCES t_p34673685_special_systems_proj.credential_folders(id),
    name VARCHAR(255) NOT NULL DEFAULT '',
    login1 VARCHAR(255) NULL,
    password1 TEXT NULL,
    login2 VARCHAR(255) NULL,
    password2 TEXT NULL,
    login3 VARCHAR(255) NULL,
    password3 TEXT NULL,
    ip VARCHAR(100) NULL,
    notes TEXT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Таблица истории обновлений
CREATE TABLE t_p34673685_special_systems_proj.update_history (
    id SERIAL PRIMARY KEY,
    client_id INTEGER NOT NULL REFERENCES t_p34673685_special_systems_proj.clients(id),
    client_database_id INTEGER NOT NULL REFERENCES t_p34673685_special_systems_proj.client_databases(id),
    updated_by_user_id INTEGER NULL REFERENCES t_p34673685_special_systems_proj.admin_users(id),
    old_version VARCHAR(50) NULL,
    new_version VARCHAR(50) NULL,
    update_date DATE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    info TEXT NULL
);

-- Корневой раздел
INSERT INTO t_p34673685_special_systems_proj.credential_folders (parent_id, name, sort_order)
VALUES (NULL, '/', 0);
