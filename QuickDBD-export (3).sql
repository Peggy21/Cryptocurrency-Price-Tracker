-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "CryptoStatus" (
    "id" int   NOT NULL,
    "timestamp" string   NOT NULL,
    "CryptoData_id" int   NOT NULL,
    CONSTRAINT "pk_CryptoStatus" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "CryptoData" (
    "id" int   NOT NULL,
    "name" string   NOT NULL,
    "symbol" string   NOT NULL,
    "date_added" string   NOT NULL,
    "last_updated" string   NOT NULL,
    "quote" string   NOT NULL,
    CONSTRAINT "pk_CryptoData" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "CryptoQuote" (
    "CryptoData_id" int   NOT NULL,
    "USD" boolean   NOT NULL
);

CREATE TABLE "CryptoUSD" (
    "CryptoData_id" int   NOT NULL,
    "price" int   NOT NULL,
    "last_updated" string   NOT NULL
);

ALTER TABLE "CryptoStatus" ADD CONSTRAINT "fk_CryptoStatus_CryptoData_id" FOREIGN KEY("CryptoData_id")
REFERENCES "CryptoData" ("id");

ALTER TABLE "CryptoQuote" ADD CONSTRAINT "fk_CryptoQuote_CryptoData_id" FOREIGN KEY("CryptoData_id")
REFERENCES "CryptoData" ("id");

ALTER TABLE "CryptoUSD" ADD CONSTRAINT "fk_CryptoUSD_CryptoData_id" FOREIGN KEY("CryptoData_id")
REFERENCES "CryptoData" ("id");

