## Ziel
Durch Bewegungsdaten schnell und einfach prüfen ob man potentiell mit infizierten Personen kontakt hatte. So kann man zeitnah in Quarantäne gehen und damit neue Ansteckungen vermeiden. Außerdem können Ansteckungs-Ketten besser nachverfolgt werden.

### Vorgehen
Kontakte zwischen zwei Personen werden mittels der Bewegungsdaten, die Google erhebt, berechnet. Diese Bewegungsdaten lassen sich regelmäßig als JSON-Datei von https://takeout.google.com/ herunterladen. Sie beinhalten Koordinaten, Zeit und Dauer des Aufenthalts sowie Angaben zu wahrscheinlichen Orten (wie etwa Restaurants oder Büros) an den Koordinaten. 
Positiv auf Corona getestete Personen können - selbstverständlich auf freiwilliger Basis - ihre Bewegungsdaten über die App hochladen, wo sie in unserer Datenbank in anonymisierter Form gespeichert werden. Anschließend können andere Menschen, welche noch nicht positiv getestet wurden, ebenfalls ihre Daten abschicken. Diese werden von uns nicht gespeichert, sondern lediglich dafür genutzt nach Überschneidungen mit den bereits in der Datenbank vorhanden Infizierten-Daten zu suchen. Nur dieser Schnitt wird dem Nutzer zurückgegeben.

### Vorteile
Daten von nicht-positiv getesteten Personen werden nicht gespeichert. Darüber hinaus werden auch nicht die Daten Infizierter offengelegt, sondern lediglich deren Schnittmenge mit den Daten Anfragender Personen, was es erschwert Rückschlüsse über Bewegungsprofile der positiv getesteten Personen zu machen.

## Nächste Schritte

#### Verifizierung der Informationen
Um sicherzugehen, dass sich niemand als positiv getestete Person ausgibt, können Teststationen positiv getesteten Menschen Verifizierungscodes mitgeben. Diese werden beim Hochladen angefordert und im System mit den gültigen Codes gegengecheckt. So werden nur die Positionsdaten positiv getesteter Personen in die Datenbank eingetragen.

#### Unterstützung der Nutzer beim Hochladen der Google Bewegungsdaten
Unsere Anwendung funktioniert und wirkt am Besten, wenn viele positiv getestete Corona Patienten ihre Daten bei uns hinterlegen und nicht getestete häufig nach Berührungspunkten mit Infizierten suchen. Um dies zu fördern, wollen wir die Bedienung für das Hochladen der Google Bewegungsdaten noch intuitiver gestalten. Denkbar wäre beispielsweise das Abfragen der Daten direkt über Google, oder eine tägliche automatische Ausführung der Checks.

#### Skalierbarkeit der Kontaktberechnung
Aktuell werden jedes mal alle hochgeladenen Bewegungsdaten gegen die Infizierten-Datenbank geprüft. Um die Effizienz bei regelmäßigen Checks zu steigern wollen wir die Checks nur mit neu hinzugekommenen Daten durchführen. Außerdem wollen wir die Datenbankabfragen für größere Datenmengen optimieren.

## Technologien
Backend:
 - Java Spring Boot https://spring.io/projects/spring-boot
 - Datenbank: In-Memory. Kann aber sehr leicht gegen eine persistente DB ausgetauscht werden