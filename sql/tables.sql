CREATE TABLE Route(
    route_id SERIAL PRIMARY KEY,
    town_name text NOT NULL,
    fare INT
);

CREATE TABLE taxi(
    reg_id SERIAL PRIMARY KEY,
    reg_number TEXT NOT NULL,
    region_id int NOT NULL,
    FOREIGN KEY (region_id) REFERENCES  region(region_id)
);


CREATE TABLE trip(
    trip_id SERIAL NOT NULL PRIMARY KEY,
    route_id int NOT NULL,
    reg_id int NOT NULL,
    FOREIGN KEY (reg_id) REFERENCES  taxi(reg_id),
    FOREIGN KEY (route_id) REFERENCES  Route(route_id)
);

CREATE TABLE region(
    region_id SERIAL NOT NULL PRIMARY KEY,
    region_name TEXT NOT NULL
);