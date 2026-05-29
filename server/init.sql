CREATE TABLE IF NOT EXISTS seriesfilm (
    id_film SERIAL PRIMARY KEY,
    judul_film VARCHAR(255),
    rating NUMERIC(2,1),
    pembuat VARCHAR(255),
    tgl_rilis DATE,
    imageh VARCHAR(255),
    imagev VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id_pengguna SERIAL PRIMARY KEY,
    nama_lengkap VARCHAR(255),
    nama_pengguna VARCHAR(255),
    kata_sandi VARCHAR(255),
    email VARCHAR(50),
    umur SMALLINT,
    gender CHARACTER(1),
    alamat VARCHAR(255),
    token_verify VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS daftarsaya (
    id_pengguna INT,
    id_film INT,
    rating_personal NUMERIC(2,1),
    PRIMARY KEY (id_pengguna, id_film),
    CONSTRAINT fk_ds FOREIGN KEY (id_pengguna) REFERENCES users(id_pengguna) ON DELETE CASCADE,
    CONSTRAINT fk_film FOREIGN KEY (id_film) REFERENCES seriesfilm(id_film) ON DELETE CASCADE
);

INSERT INTO seriesfilm (judul_film, rating, pembuat, tgl_rilis, imageh, imagev) VALUES
('Alice in Borderland', 4.5, 'Hameda Asakuno', '2017-06-15', 'aliceInBorderlandHorizontal.png', 'aliceInBorderlandVertical'),
('Avatar', 3.9, 'Jack Millers', '2012-05-04', 'avatarTheWayofWaterVertical.png', 'avatarTheWayofWaterHorizontal.png'),
('All of Us Are Dead', 4.6, 'Lee Jae Kyo, Ham Nam Su', '2022-01-27', 'allOfUsAreDeadHorizontal.png', 'allOfUsAreDeadVertical.png')
ON CONFLICT (id_film) DO NOTHING;

INSERT INTO users ( nama_lengkap, nama_pengguna, kata_sandi, email, umur, gender, alamat) VALUES
('gabriela daielle', 'danielle441', 'kubernatsets', 'yammyping@gmail.com', 23, 'P', 'Ohaio'),
('shirohige omatsu', 'shirohige312', 'kaizoku', 'onepiece@gmail.com', 59, 'L', 'Waterseven'),
('budi kantamso trinojoyo negoro', 'budikantamso077', 'budikeren123', 'budisantosc@gmail.com', 43, 'L', 'Jakarta'),
('rafli rathur rahman', 'ezekiel636', 'blackholesupremacy', 'ezekiel321@gmail.com', 26, 'P', 'California'),
('faris sumawijaya', 'faiz555', 'kamenrider555', 'faizaction@gmail.com', 18, 'L', 'Tokyo')
ON CONFLICT (id_pengguna) DO NOTHING;

INSERT INTO daftarsaya (id_pengguna, id_film, rating_personal) VALUES
(2, 1, 4.1),
(2, 2, 3.5),
(2, 3, 3.2)
ON CONFLICT (id_pengguna, id_film) DO NOTHING;