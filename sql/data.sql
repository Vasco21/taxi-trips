insert into region(region_id, region_name) values (1, 'Durban');
insert into region(region_id, region_name) values (2, 'Cape Town');
insert into region(region_id, region_name) values (3, 'Gauteng');


insert into taxi(reg_id, reg_number, region_id) values (1,'ND 567-123', 1);
insert into taxi(reg_id, reg_number, region_id) values (2,'ND 132-121', 1);
insert into taxi(reg_id, reg_number, region_id) values (3,'ND 123-111', 1);

insert into taxi(reg_id, reg_number, region_id) values (4,'CA 123-123', 2);
insert into taxi(reg_id, reg_number, region_id) values (5,'CA 111-123', 2);
insert into taxi(reg_id, reg_number, region_id) values (6,'CA 246-111', 2);

insert into taxi(reg_id, reg_number, region_id) values (7,'GP 567-333', 3);
insert into taxi(reg_id, reg_number, region_id) values (8,'GP 132-121', 3);
insert into taxi(reg_id, reg_number, region_id) values (9,'GP 123-441', 3);


insert into trip(route_id, reg_id) values (1, 1);
insert into trip(route_id, reg_id) values (2, 2);
insert into trip(route_id, reg_id) values (3, 3);
insert into trip(route_id, reg_id) values (4, 4);
insert into trip(route_id, reg_id) values (5, 5);
insert into trip(route_id, reg_id) values (6, 6);
insert into trip(route_id, reg_id) values (7, 7);
insert into trip(route_id, reg_id) values (8, 8);
insert into trip(route_id, reg_id) values (9, 9);
insert into trip(route_id, reg_id) values (10, 1);
insert into trip(route_id, reg_id) values (11, 1);
insert into trip(route_id, reg_id) values (12, 5);
insert into trip(route_id, reg_id) values (13, 4);
insert into trip(route_id, reg_id) values (14, 6);
insert into trip(route_id, reg_id) values (15, 4);
insert into trip(route_id, reg_id) values (16, 4);
insert into trip(route_id, reg_id) values (17, 3);
insert into trip(route_id, reg_id) values (18, 3);
insert into trip(route_id, reg_id) values (19, 2);