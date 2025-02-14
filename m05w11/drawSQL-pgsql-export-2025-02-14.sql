CREATE TABLE "authors"(
    "id" BIGINT NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "authors" ADD PRIMARY KEY("id");
CREATE TABLE "books"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "publisher" VARCHAR(255) NOT NULL,
    "publication_year" INTEGER NOT NULL,
    "num_pages" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,
    "cover_url" VARCHAR(255) NULL
);
ALTER TABLE
    "books" ADD PRIMARY KEY("id");
ALTER TABLE
    "books" ADD CONSTRAINT "books_author_id_foreign" FOREIGN KEY("author_id") REFERENCES "authors"("id");