// data/publikationen.ts
import Kick_off from "../../assets/images/LEVIKO_Poster_Kickoff.webp";
import poster_dublin from "../../assets/images/LEVIKO_poster_dublin.webp";

// Definiere den Typ für deine Publikationen-Daten
const publikationData: Array<{
  id: number;
  date: string;
  headline: string;
  subHeadline: string;
  tags: string[]; // Tags für die Anzeige unter der Subheadline
  searchTags?: string[]; // Optionales Feld für Such-Tags
  imgSrc: string;
  imgAlt: string;
  linkTo: string;
  button: string;
  $buttonVariant?: "secondary" | "tertiary"; // Optionales Button-Variant
  description: JSX.Element;
}> = [
  {
    id: 1,
    date: "22. November 2023",
    headline: "Lernen:digital Kick-offs",
    subHeadline: "Projekt-Pitch und Poster",
    tags: ["Poster", "Projekt-Pitch"],
    searchTags: [
      "Poster",
      "Kick-Off",
      "Kompetenzverbund lernen:digital",
      "Pitch",
      "2023",
    ],
    imgSrc: Kick_off,
    imgAlt: "Vorschau Poster",
    linkTo: "/pdf/LEVIKO_Poster_Kickoff.pdf",
    button: "Kick-Off Poster",
    $buttonVariant: "secondary",
    description: (
      <p>
        Im Rahmen eines Projekt-Pitches wurden alle 24 Projektverbünde
        vorgestellt. Mit dem Raum “Meet the Kompetenzzentren” gab es die
        Möglichkeit einer interaktiven Posterausstellung.
        <br /> <br />
        Das entstandene Poster kann hier runtergeladen werden.
      </p>
    ),
  },
  {
    id: 2,
    date: "12. Juni 2024",
    headline: "EAS Dublin 2024",
    subHeadline: "Poster",
    tags: ["Poster", "Konferenzbeitrag"],
    searchTags: ["Poster", "Dublin", "European Association for Music", "2024"],
    imgSrc: poster_dublin,
    imgAlt: "Vorschau Poster",
    linkTo: "/pdf/LEVIKO_Poster_Dublin.pdf",
    button: "Dublin Poster",
    $buttonVariant: "secondary",
    description: (
      <p>
        Poster Einreichung für die 31. Konferenz der “European Association for
        Music”.
        <br /> <br />
        Das entstandene Poster kann hier runtergeladen werden.
      </p>
    ),
  },
  // Weitere Publikationen ...
];

export default publikationData;
