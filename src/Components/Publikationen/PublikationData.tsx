// data/publikationen.ts
import Kick_off from "../../assets/images/LEVIKO_Poster_Kickoff.webp";
import poster_dublin from "../../assets/images/LEVIKO_poster_dublin.webp";
import paper_ieee_24 from "../../assets/images/LEVIKO_Paper_IEEE_24.webp";
import poster_ampf_24 from "../../assets/images/LEVIKO_poster_ampf_24.webp";
import poster_eas_25 from "../../assets/images/LEVIKO_poster_eas_25.webp";
import paper_ieee_25 from "../../assets/images/LEVIKO_Paper_IEEE_25.webp";

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
        Das entstandene Poster kann hier heruntergeladen werden.
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
    linkTo:
      "https://www.researchgate.net/publication/381310972_Virtual_and_Augmented_Reality_in_the_classroom_The_Project_LEVIKO-XR#fullTextFileContent:~:text=View%20full--,text,-Similar%20research",
    button: "Dublin Poster",
    $buttonVariant: "secondary",
    description: (
      <p>
        Poster Einreichung für die 31. Konferenz der “European Association for
        Music”.
        <br /> <br />
        Das entstandene Poster kann hier heruntergeladen werden.
      </p>
    ),
  },
  {
    id: 3,
    date: "September 2024",
    headline: "Jahrestagung Arbeitskreis Musikpädagogische Forschung 2024",
    subHeadline: "Poster",
    tags: ["Poster", "Konferenzbeitrag"],
    searchTags: ["Poster", "AMPF", "Musikpädagogik", "Conference", "2024"],
    imgSrc: poster_ampf_24,
    imgAlt: "Vorschau Poster",
    linkTo:
	  "https://www.researchgate.net/publication/384690945_Untersuchung_der_sozialen_Prasenz_in_der_kollaborativen_VR-Musikanwendung_PatchWorld_in_Bezug_auf_die_Verwendung_im_schulischen_Kontext",
    button: "AMPF Poster",
    $buttonVariant: "secondary",
    description: (
      <p>
        Poster für die Jahrestagung Arbeitskreis Musikpädagogische Forschung 2024 mit dem Thema "Untersuchung der (sozialen) Präsenz in der kollaborativen VR-Musikanwendung
		PatchWorld in Bezug auf die Verwendung im schulischen Kontext"
        <br /> <br />
        Das Poster kann hier heruntergeladen werden.
      </p>
    ),
  },
  {
    id: 4,
    date: "September 2024",
    headline: "2024 IEEE 5th International Symposium on the Internet of Sounds (IS2)",
    subHeadline: "Conference Paper",
    tags: ["Paper", "Konferenzbeitrag"],
    searchTags: ["Paper", "IEEE", "Internet of Sounds", "IS2", "Conference", "2024"],
    imgSrc: paper_ieee_24,
    imgAlt: "Vorschau Paper",
    linkTo:
	  "https://www.researchgate.net/publication/384713983_Presence_and_Flow_in_Virtual_and_Mixed_Realities_for_Music-Related_Educational_Settings",
    button: "IEEE Paper",
    $buttonVariant: "secondary",
    description: (
      <p>
        Paper-Einreichung für das 5. Symposium über das "Internet of Sounds" der IEEE mit dem Thema "Presence and Flow in Virtual and Mixed Realities for Music-Related Educational Settings".
        <br /> <br />
        Das entstandene Conference Paper kann hier heruntergeladen werden.
      </p>
    ),
  },
  {
    id: 5,
    date: "März 2025",
    headline: "2025 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
    subHeadline: "Conference Paper",
    tags: ["Paper", "Konferenzbeitrag"],
    searchTags: ["Paper", "IEEE", "Virtual Reality", "Workshop", "Conference", "2025", "VRW"],
    imgSrc: paper_ieee_25,
    imgAlt: "Volltext noch nicht veröffentlicht",
    linkTo:
	  "https://www.researchgate.net/publication/391126615_Impact_of_Spatial_and_Communication_Environments_on_Collaborative_Music-Making_in_Virtual_Reality_Insights_for_Music_Education",
    button: "IEEE Paper",
    $buttonVariant: "secondary",
    description: (
      <p>
        Paper-Einreichung für den IEEE VR Workshop "Sonic Interaction in Virtual Environments" 2025.
        <br /> <br />
        Der Volltext des Papers kann hier heruntergeladen werden.
      </p>
    ),
  },
  {
    id: 6,
    date: "Juni 2025",
    headline: "2025 Learning Designs for Music Lessons in Extended Reality (XR)",
    subHeadline: "Conference Poster",
    tags: ["Poster", "Konferenzbeitrag"],
    searchTags: ["Poster", "EAS", "Extended Reality", "Music", "Conference", "2025"],
    imgSrc: poster_eas_25,
    imgAlt: "EAS Poster",
    linkTo:
	  "https://www.researchgate.net/publication/392323746_Learning_Designs_for_Music_Lessons_in_Extended_Reality_XR",
    button: "EAS Poster",
    $buttonVariant: "secondary",
    description: (
      <p>
        Poster-Einreichung für die EAS Conference 2025.
        <br /> <br />
        Das entstandene Conference-Poster kann hier heruntergeladen werden.
      </p>
    ),
  },
  // Weitere Publikationen ...
];

export default publikationData;
