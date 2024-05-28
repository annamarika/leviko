import { Headline } from "../Components/UI/Headline.styled";
import styled from "styled-components";

const Impressum = () => {
  return (
    <ImpressumWrapper>
      <Headline>Impressum</Headline>
      <h3>
        Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik
      </h3>
      <p>
        Prof. Dr. Michael Oehler
        <br />
        Neuer Graben/Schloss
        <br />
        49074 Osnabrück
        <br />
        Deutschland
      </p>
      <h3>Kontaktinformationen</h3>
      <p>
        Prof. Dr. Michael Oehler
        <br />
        E-Mail: michael.oehler@uos.de
      </p>
      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen. Wir sind gemäß den allgemeinen Gesetzen
        für eigene Inhalte auf diesen Seiten verantwortlich. In diesem
        Zusammenhang möchten wir darauf hinweisen, dass wir nicht verpflichtet
        sind, übermittelte oder gespeicherte fremde Informationen zu überwachen
        oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt,
        gemäß §§ 8 bis 10 des Telemediengesetzes (TMG).
      </p>
      <h3>Haftung für Links</h3>
      <p>
        Für den Inhalt externer Links (zu Webseiten Dritter) sind ausschließlich
        die Betreiber der verlinkten Seiten verantwortlich. Zum Zeitpunkt der
        Verlinkung waren uns keine Rechtsverstöße erkennbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>
      <h3>Urheberrecht</h3>
      <p>
        Unsere Webseiten und deren Inhalte unterliegen dem deutschen
        Urheberrecht. Sofern nicht ausdrücklich gesetzlich erlaubt, bedarf jede
        Art der Verwertung, Vervielfältigung oder Verarbeitung von
        urheberrechtlich geschützten Werken auf unseren Webseiten der vorherigen
        Zustimmung des jeweiligen Rechteinhabers. Einzelne Vervielfältigungen
        eines Werkes sind nur für den privaten Gebrauch gestattet. Die
        Materialien auf diesen Seiten sind urheberrechtlich geschützt und jede
        unbefugte Nutzung kann gegen Urheberrechtsgesetze verstoßen.
      </p>
    </ImpressumWrapper>
  );
};
export default Impressum;

export const ImpressumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  background-color: var(--leviko-blue);
  color: var(--leviko-white);

  padding: 160px 160px;

  @media (max-width: 1330px) {
    padding: 160px 24px;
  }

  @media (max-width: 1024px) {
    padding: 140px 23px;
  }

  @media (max-width: 430px) {
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding: 132px 20px;
  }
`;
