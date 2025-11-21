import { useRef } from "react";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import HeroProjekt from "../Components/Hero/HeroProjekt.tsx";
import TextPastDates from "../Components/InfoText/TextPastDates";
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
        headline="Das Team von LEVIKO XR hat Workshops und Fortbildungen in ganz Deutschland angeboten."
        description="Das Team von LEVIKO XR hat Workshops und Fortbildungen in ganz Deutschland angeboten."
        linkTo="/termine"
        button="Erfahre mehr"
        $objectPosition="center 20%"
      />
	  <TextPastDates
        date="20.11.2025"
        headline="Virtual Reality im Musikunterricht - ZfsL Düsseldorf"
      />
	  <TextPastDates
        date="13.11. - 14.11.2025"
        headline="Musik in Extended Reality - Bildungsportal Niedersachsen, Kompetenzzentrum Oldenburg"
      />
	  <TextPastDates
        date="10.10. - 12.10.2025"
        headline="Musik in Extended Reality - Bundesakademie für musikalische Jugendbildung Trossingen"
      />
	  <TextPastDates
        date="27.09.2025"
        headline="Virtual Reality im Musikunterricht - Landesmusikakademie NRW"
      />
	  <TextPastDates
        date="29.08. - 31.08.2025"
        headline="Virtual Reality im Musikunterricht - Landesmusikakademie Hessen"
      />
	  <TextPastDates
        date="06.09. - 07.09.2025"
        headline="Virtual Reality im Musikunterricht - Landesmusikakademie Sachsen"
      />
	  <TextPastDates
        date="28.04.2025"
        headline="Workshops bei den Ateliertagen der Staatlichen Hochschule für Musik Trossingen"
      />
	  <TextPastDates
        date="28.02. - 01.03.2025"
        headline="Virtual Reality im Musikunterricht - Impulsworkshop für alle interessierten Lehrkräfte - Landesmusikakademie NRW, Heek"
      />
	  <TextPastDates
        date="19.11.2024"
        headline="Virtual Reality im Musikunterricht - Zentrum für Schulqualität und Lehrerbildung Baden-Württemberg, Stuttgart"
      />
	</div>
  );
};

export default TerminPage;
