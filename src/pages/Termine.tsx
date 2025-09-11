import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import { Headline } from "../Components/UI/Headline.styled.tsx";
import TerminBildText from "../Components/InfoText/TerminBildText";
import TerminTextBild from "../Components/InfoText/TerminTextBild";
import TextPastDates from "../Components/InfoText/TextPastDates";
import ImageMapNRW from "../assets/images/map_nrw.webp";
import ImageMapBW from "../assets/images/map_bw.webp";
import ImageMapSA from "../assets/images/map_sa.webp";
import ImageMapNS from "../assets/images/map_nisa.webp";
import ImageMapHS from "../assets/images/map_hs.webp";
import ImageManWithHMD from "../assets/images/Mann_mit_VRBrille_und_roten_Pulli.webp";


const TerminPage = () => {
  const refOne = useRef<HTMLDivElement>(null);
  const refTwo = useRef<HTMLDivElement>(null);
  const refThree = useRef<HTMLDivElement>(null);
  const refFour = useRef<HTMLDivElement>(null);

  useStickyScroll([refOne, refTwo, refThree, refFour], {
    onEnter: (entry) => {
      entry.target.classList.add("sticky");
    },
    onLeave: (entry) => {
      entry.target.classList.remove("sticky");
    },
  }); 

  return (
    <div>
	  <HeroProjekt
        $imgSrc={ImageManWithHMD}
        imgAlt="person who plays maestro VR"
        headline="Das Team von LEVIKO XR bietet Workshops und Fortbildungen in ganz Deutschland an."
        description="Das Team von LEVIKO XR bietet Workshops und Fortbildungen in ganz Deutschland an."
        linkTo="/termine"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
	  <TerminBildText
        imgSrc={ImageMapNRW}
        imgAlt="Map of Germany, state of North Rhine-Westphalia highlited"
        headline="Landesmusikakademie NRW"
		date="27.09.2025"
        description="Virtual Reality im Musikunterricht - Tagesworkshop für alle interessierten Lehrkräfte"
        linkTo="https://lma-nrw.de/termindaten/2845/virtual-reality-im-musikunterricht-tagesworkshop-fuer-alle-interessierten-lehrkraefte/"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
	  <TerminTextBild
        imgSrc={ImageMapBW}
        imgAlt="Map of Germany, state of Baden-Württemberg highlited"
        headline="Bundesakademie für musikalische Jugendbildung Trossingen"
		date="10.10. - 12.10.2025"
        description="Musik in Extended Reality"
        linkTo="https://www.bundesakademie-trossingen.de/weiterbildungen/musik-medien/details/musik-in-extended-reality"
        button="Erfahre mehr"
        $objectPosition="30%"
      />
	  <TerminBildText
        imgSrc={ImageMapNS}
        imgAlt="Map of Germany, state of Lower Saxony highlited"
        headline="Bildungsportal Niedersachsen, Kompetenzzentrum Oldenburg"
		date="13.11. - 14.11.2025"
        description="Informationen folgen"
        linkTo=""
        button="Erfahre mehr"
        $objectPosition="30%"
      />
	  <Headline>Bisher angebotene Fortbildungen</Headline>
	  <TextPastDates
        date="29.08. - 31.08.2025"
        headline="Virtual Reality im Musikunterricht - Landesmusikakademie Hessen"
      />
	  <TextPastDates
        date="06.09. - 07.09.2025"
        headline="Virtual Reality im Musikunterricht - Landesmusikakademie Sachsen"
      />
	  <TextPastDates
        date="19.11.2024"
        headline="Virtual Reality im Musikunterricht - Zentrum für Schulqualität und Lehrerbildung Baden-Württemberg, Stuttgart"
      />
	  <TextPastDates
        date="28.02. - 01.03.2025"
        headline="Virtual Reality im Musikunterricht - Impulsworkshop für alle interessierten Lehrkräfte - Landesmusikakademie NRW, Heek"
      />
	  <TextPastDates
        date="28.04.2025"
        headline="Workshops bei den Ateliertagen der Staatlichen Hochschule für Musik Trossingen"
      />
	</div>
  );
};

export default TerminPage;
