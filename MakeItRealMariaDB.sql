#Creamos tabla de Equipos
CREATE TABLE Equipos (
 equipo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 equipo_name VARCHAR(255) 
);
#Insertamos los equipos
INSERT INTO Equipos(equipo_name) VALUES ('Brasil');
INSERT INTO Equipos(equipo_name) VALUES ('Argentina');
INSERT INTO Equipos(equipo_name) VALUES ('Ecuador');
INSERT INTO Equipos(equipo_name) VALUES ('Uruguay');
INSERT INTO Equipos(equipo_name) VALUES ('Perú');
INSERT INTO Equipos(equipo_name) VALUES ('Chile');
INSERT INTO Equipos(equipo_name) VALUES ('Colombia');
INSERT INTO Equipos(equipo_name) VALUES ('Bolivia');
INSERT INTO Equipos(equipo_name) VALUES ('Paraguay');
INSERT INTO Equipos(equipo_name) VALUES ('Venezuela');

#consultamos la tabla equipos
SELECT * FROM Equipos;


#Creamos tabla Partidos
CREATE TABLE Partidos (
 partido_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 partido_estado TINYINT(1),
 equipo1_id int,
 equipo2_id int,
 INDEX(partido_id),
 CONSTRAINT equipo1_id FOREIGN KEY (equipo1_id) REFERENCES Equipos(equipo_id),
 CONSTRAINT equipo2_id FOREIGN KEY (equipo2_id) REFERENCES Equipos(equipo_id)
);

 #Insertamos los Partidos

INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 2 , 10); # Argentina vs Venezuela
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 7 , 8); # Colombia  vs Bolivia
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 9 , 3); # Paraguay vs Ecuador
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 1 , 6); # Brasil vs Chile
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 4 , 5); # Uruguay vs Peru
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 5 , 9); # Peru vs Paraguay
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 3 , 2); # Ecuador vs Argentina
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 10, 7); # Venezuela vs Colombia
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 6 , 4); # Chile vs Uruguay
INSERT INTO Partidos(partido_estado, equipo1_id, equipo2_id) VALUES (0, 8 , 1); # Bolivia vs Brasil

#consultamos la tabla Partidos
SELECT * FROM Partidos;

#Creamos tabla de Apostadores
CREATE TABLE Apostadores (
 apostador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 apostador_aciertos int,
 apostador_name  VARCHAR(255) 
);

#Insertamos los Apostadores 
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Jorge');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Mayra');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Jhonny');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Juan');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Valery');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Fabian');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Antalya');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Rodolfo');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Andrea');
INSERT INTO Apostadores(apostador_aciertos, apostador_name) VALUES (0, 'Jesus');

#consultamos la Apostadores 
SELECT * FROM Apostadores;

#Creamos tabla Apuestas
CREATE TABLE Apuestas (
 apuesta_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 apuesta_resultado TINYINT(1),
 apostador_id int,
 partido_id int,
 INDEX(apuesta_id),
 FOREIGN KEY (apostador_id) REFERENCES Apostadores(apostador_id),
 FOREIGN KEY (partido_id) REFERENCES Partidos(partido_id)
);
# Insertamos las apuesta en total "20" apuestas, y cada apostardor realizo dos apuestas
# el valor de "0" es que perdio al apuestas y "1" que gano, en este caso inicializamos todos con "0"
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 1 , 1); # Argentina vs Venezuela
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 2 , 2); # Colombia  vs Bolivia
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 3 , 3); # Paraguay vs Ecuador
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 4 , 4); # Brasil vs Chile
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 5 , 5); # Uruguay vs Peru
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 6 , 6); # Peru vs Paraguay
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 7 , 7); # Ecuador vs Argentina
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 8 , 8); # Venezuela vs Colombia
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 9 , 9); # Chile vs Uruguay
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 10, 10); # Bolivia vs Brasil

INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 1 , 10); # Bolivia vs Brasil
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 2 , 9);  # Chile vs Uruguay
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 3 , 8);  # Venezuela vs Colombia
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 4 , 7);  # Ecuador vs Argentina
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 5 , 6);  # Peru vs Paraguay
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 6 , 5);  # Uruguay vs Peru
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 7 , 4);  # Brasil vs Chile
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 8 , 3);  # Paraguay vs Ecuado
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 9 , 2);  # Colombia  vs Bolivia
INSERT INTO Apuestas(apuesta_resultado, apostador_id, partido_id) VALUES (0, 10, 1);  # Argentina vs Venezuela

#consultamos la Apuestas 
SELECT * FROM Apuestas;

#Creamos tabla Marcador_Apostado
CREATE TABLE Marcador_Apostado (
 marcador_apostado_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 ma_equipo1_goles Int,
 ma_equipo2_goles Int, 
 apuesta_id int,
 INDEX(marcador_apostado_id),
 FOREIGN KEY (apuesta_id) REFERENCES Apuestas(apuesta_id)
);

 #Insertamos los Marcador_Apostado

INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 1 , 1);# Argentina vs Venezuela
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (4, 2 , 2); # Colombia  vs Bolivia
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (0, 3 , 3); # Paraguay vs Ecuador
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (4, 1 , 4); # Brasil vs Chile
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 3 , 5); # Uruguay vs Peru
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 1 , 6); # Peru vs Paraguay
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (2, 1 , 7); # Ecuador vs Argentina
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 2 , 8); # Venezuela vs Colombia
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 3 , 9); # Chile vs Uruguay
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 6 , 10); # Bolivia vs Brasil

INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (2, 1 , 11);# Argentina vs Venezuela
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 1 , 12); # Colombia  vs Bolivia
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (2, 1,  13); # Paraguay vs Ecuador
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 2 , 14); # Brasil vs Chile
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (2, 1 , 15); # Uruguay vs Perul
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (2, 1 , 16); # Peru vs Paraguay
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 3 , 17); # Ecuador vs Argentina
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (3, 2 , 18); # Venezuela vs Colombia
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 2 , 19); # Chile vs Uruguay
INSERT INTO Marcador_Apostado(ma_equipo1_goles, ma_equipo2_goles, apuesta_id) VALUES (1, 5 , 20); # Bolivia vs Brasil

#consultamos la Marcador_Apostado
SELECT * FROM Marcador_Apostado; 


#Creamos tabla Marcador_Definitivo
CREATE TABLE Marcador_Definitivo (
 marcador_definitivo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 md_equipo1_goles Int,
 md_equipo2_goles Int, 
 partido_id int,
 INDEX(marcador_definitivo_id),
 FOREIGN KEY (partido_id) REFERENCES Partidos(partido_id)
);

 #Insertamos los Marcador_Definitivo


INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (4, 1 , 1);# Argentina vs Venezuela
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (3, 0 , 2); # Colombia  vs Bolivia
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (0, 2, 3); # Paraguay vs Ecuador
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (4, 1 , 4); # Brasil vs Chile
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (1, 2 , 5); # Uruguay vs Perul
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (3, 1 , 6); # Peru vs Paraguay
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (2, 3 , 7); # Ecuador vs Argentina
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (1, 3 , 8); # Venezuela vs Colombia
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (1, 2 , 9); # Chile vs Uruguay
INSERT INTO Marcador_Definitivo(md_equipo1_goles, md_equipo2_goles, partido_id) VALUES (1, 6 , 10); # Bolivia vs Brasil

#consultamos la Marcador_Definitivo 
SELECT * FROM Marcador_Definitivo; 


#Creamos tabla Ganador
CREATE TABLE Ganador (
 ganador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 ganador_equipo INT,
 partido_id int,
 INDEX(ganador_id),
 #CONSTRAINT partido_id FOREIGN KEY (partido_id) REFERENCES Partidos(partido_id)
 FOREIGN KEY (partido_id) REFERENCES Partidos(partido_id)
);

 #Insertamos Ganador

SET @valores0 = 0;
SET @valores1 = 0;
SET @valores2 = 0;

SELECT COUNT(*) Into @valores0 FROM Partidos;

for equiposCant in 1..@valores0
	DO 	
        SET @valores1 = equiposCant;
        SELECT partido_id Into @valores2 FROM Marcador_Definitivo Where Marcador_Definitivo.md_equipo1_goles >  Marcador_Definitivo.md_equipo2_goles  AND Marcador_Definitivo.partido_id = @valores1 ;

        if @valores2 = @valores1 then
            INSERT INTO Ganador(ganador_equipo, partido_id) VALUES(1, @valores2);
        ELSE 
        	INSERT INTO Ganador(ganador_equipo, partido_id) VALUES(2, @valores1);

        END IF;
END FOR;

#consultamos la Ganador
SELECT * FROM  Ganador;




#--------->>>>>>> El administrar del sistema Actualiza los resultados <<<<<<<<-------------


SET @valoresa = 0;
SET @valoresb = 0;
SET @valoresc = 0;
SET @valoresd = 0;
SET @valorese = 0;

SELECT COUNT(*) Into @valoresa FROM Apuestas;

for apuestasCant in 1..@valoresa
	DO 	
        SET @valoresb = apuestasCant;
        SELECT apuesta_id INTO @valoresc FROM Marcador_Apostado Where Marcador_Apostado.ma_equipo1_goles >  Marcador_Apostado.ma_equipo2_goles  AND Marcador_Apostado.apuesta_id = @valoresb ;
        if @valoresc = @valoresb then #apuestas donde se aposto a que gane el equipo1
        
           SELECT apuesta_id iNTO @valoresd FROM Apuestas WHERE EXISTS(sELECT partido_id FROM Ganador WHERE Ganador.partido_id = @valoresc AND Ganador.ganador_equipo = 1) And Apuestas.apuesta_id = @valoresc;
            
           IF @valoresd = @valoresc THEN
                  		UPDATE Apuestas SET Apuestas.apuesta_resultado = 1 where Apuestas.partido_id = @valoresd ;
           ELSE			
                  		UPDATE Apuestas SET Apuestas.apuesta_resultado = 0 where Apuestas.apuesta_id = @valoresc AND Apuestas.partido_id != @valoresd ;
           END IF;
           
        ELSE  #apuestas donde se aposto a que gane el equipo2
      	 	SELECT apuesta_id iNTO @valorese FROM Apuestas WHERE EXISTS(sELECT partido_id FROM Ganador WHERE Ganador.partido_id = @valoresb AND Ganador.ganador_equipo = 2) And Apuestas.apuesta_id = @valoresb;

            IF @valorese = @valoresb THEN
                  		UPDATE Apuestas SET Apuestas.apuesta_resultado = 1 where Apuestas.partido_id = @valorese ;
           ELSE
                  		UPDATE Apuestas SET Apuestas.apuesta_resultado = 0 where Apuestas.apuesta_id = @valoresb AND Apuestas.partido_id != @valorese ;
           END IF;
        END IF;
END FOR;


SET @valoresx = 0;
SET @valoresy = 0;
SET @valoresz = 0;
SET @valoresT = 0;
SET @valoresW = 0;

SELECT COUNT(*) Into @valoresx FROM Apuestas;

for apuesCant in 1..@valoresx
	DO 	
        SET @valoresy = apuesCant;
        SELECT apuesta_id INTO @valoresz FROM Apuestas Where Apuestas.apuesta_resultado = 1  AND Apuestas.apuesta_id = @valoresy ;
        SELECT apostador_id INTO @valoresW FROM Apuestas Where Apuestas.apuesta_resultado = 1  AND Apuestas.apuesta_id = @valoresy ;

       IF @valoresz = @valoresy THEN
       
			SELECT apostador_id INTO @valoresT FROM Apostadores Where Apostadores.apostador_id = @valoresW ;
            UPDATE Apostadores SET Apostadores.apostador_aciertos =  Apostadores.apostador_aciertos + 1 where Apostadores.apostador_id = @valoresT ;

       END IF;
 
END FOR;

#consultamos la Apuestas 
SELECT * FROM Apuestas;
#consultamos la Marcador_Apostado
SELECT * FROM Marcador_Apostado; 
#consultamos la Marcador_Definitivo 
SELECT * FROM Marcador_Definitivo; 
#consultamos la EquipoGanador 
SELECT * FROM Ganador;





#--------->>>>>>>  Cconsulta Reto apostadores con mas aciertos<<<<<<<<-------------



#consultamos la Apostadores 
SELECT * FROM Apostadores ORDER BY apostador_aciertos desc;
