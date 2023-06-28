CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`login` varchar NOT NULL,
	`mdp` varchar NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `phone` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name_phone` varchar NOT NULL,
	`marque` varchar NOT NULL,
	`image` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Caractéristique` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nb_gear` INT NOT NULL,
	`steam` INT NOT NULL,
	`year` INT NOT NULL,
	`memoire` INT NOT NULL,
	`ecran` BOOLEAN NOT NULL,
	`ram` INT NOT NULL,
  `user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Caractéristique` ADD CONSTRAINT `Caractéristique_fk0` FOREIGN KEY (`user_id`) REFERENCES `phone`(`id`);

--------------------------User-------------------------------

INSERT INTO `DB_punk`.`user` ('name_phone','marque','image') VALUES ('Steampunk-O-Phone','GearGadget','');


-------------------------Phone--------------------------------------------

INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('Steampunk-O-Phone','GearGadget','http://localhost:6000/assets/images/Steampunk-O-Phone.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('Cog & Gears Communicator','GearGadget','http://localhost:6000/assets/images/Cog & Gears Communicator.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('BrassMaster 3000','SteamWire','http://localhost:6000/assets/images/BrassMaster 3000.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('SteamPunked Nexus','SteamWire','http://localhost:6000/assets/images/SteamPunked Nexus.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('Victorian Vaporizer','ChronoComm','http://localhost:6000/assets/images/Victorian Vaporizer.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('Clockwork Communicator','ChronoComm','http://localhost:6000/assets/images/Clockwork Communicator.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('The Steambeast','MécaMobile','http://localhost:6000/assets/images/The Steambeast.jpg');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ("Gearsmith's Gilded Gadget",'MécaMobile',"http://localhost:6000/assets/images/Gearsmith's Gilded Gadget.jpg");
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('The Steamfire Communicator','VapeurTech','http://localhost:6000/assets/images/The Steamfire Communicator.png');
INSERT INTO `DB_punk` `phone`  ('name_phone','marque','image') VALUES ('Steamberry 9000','VapeurTech','http://localhost:6000/assets/images/Steamberry 9000.png');




------------------------Caractéristique--------------------------------------------


INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'1');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('4','3','1855','5',true,'1');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('1','6','1845','3',true,'2');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('6','6','1875','6',true,'2');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1853','3',true,'3');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('6','1','1862','3',true,'3');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'4');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'4');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'5');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'5');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'6');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'6');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'7');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'7');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'8');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'8');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'9');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'9');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'10');
INSERT INTO `DB_punk` `Caractéristique`  ('nb_gear','steam','year','memoire','ecran','ram','user_id' ) VALUES ('2','6','1850','3',true,'10');