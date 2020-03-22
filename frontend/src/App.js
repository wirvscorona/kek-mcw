import React from 'react';

import { Card, Button, CardDeck } from 'react-bootstrap';

function App() {
  return (
  <CardDeck className="mt-3 ml-3 mr-3">
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title>Matching Map</Card.Title>
        <Card.Text>
          TODO MatchingMap description<br/><br/>
          Locationtracking mit Datenschutz vereinen:
          Eine App, die die Geolocation des Nutzers kontinuierlich aufzeichnet, aber so verschlüsselt,
          dass nur der Nutzer selbst Zugang zu seinem Bewegungsprofil hat ("Zero-Knowledge"). Falls der Nutzer positiv auf COVID19 getestet wird,
          kann er den relevanten Ausschnitt seines Bewegungsprofils freischalten und in eine zentrale Datenbank legen. 
          Die App prüft kontinuierlich alle auf diese Art neu freigegebene Profile gegen das lokales Profil und warnt den Nutzer,
          wenn sie/er sich in der Nähe eines auf positiv getesteten aufgehalten hat.
        </Card.Text>
        <Button className="mt-auto" variant="primary">Goto Matching Map</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title>Symptom Heatmap</Card.Title>
        <Card.Text>
          TODO UPDATE Heatmap description!!!<br/><br/>
          Ärzte und andere Arbeiter im Gesundheitssystem bekommen eine App in der (nur) Symptome und der Ort angegeben werden.
          Ein Machine Learning Ansatz versucht Cluster zu erkennen und sendet einen Alarm falls eine ansteckende Krankheit erkannt wird.
        </Card.Text>
        <Button className="mt-auto" variant="primary">Goto Symptom Heatmap</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title>Kontakttagebuch</Card.Title>
        <Card.Text>
          TODO UPDATE description!!!<br/><br/>
          Kontakt Tagebücher digitalisieren: Aktuelle Situation:
          Infizierte Leute geben eine excel Datei ab mit Kontaktdaten der getroffenen Leute der letzten 2 Wochen,
          das RKI ruft die dann alle an (oder so ähnlich) Idee:
          man kann online die Kontaktdaten der Leute angeben und diese werden automatisch kontaktiert mit Nachricht und Information was jetzt zu tun ist
          -> nimmt dem RKI einiges an Arbeit fürs rumtelefonieren ab<br/>
        </Card.Text>
        <Button className="mt-auto" variant="primary">Goto Matching Map</Button>
      </Card.Body>
    </Card> 
    <Card>
      <Card.Body className="d-flex flex-column">
        <Card.Title>Future Compeoments</Card.Title>
        <Card.Text>
          TODO descripe futurework?
        </Card.Text>
      </Card.Body>
    </Card>
  </CardDeck>
  );
}

export default App;
