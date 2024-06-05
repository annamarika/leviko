import Tobi from "../../assets/images/TobiasRotsch.webp";
import Sandro from "../../assets/images/Sandro.webp";
import LogoTros from "../../assets/images/hfm-trossingen-logo550x274.webp";
import LogoTrosWhite from "../../assets/images/logo-hochschule-fuer-musik-trossingen.webp";

export const TeamTrosData: Array<{
  id: string;
  title: string;
  description: string;
  logoOne: string;
  logoTwo: string;
  altLogoOne: string;
  altLogoTwo: string;
  content: JSX.Element | string;
  $objectPosition?: string;
  imgAlt: string;
  imgSrc: string;
  linkTo: string;
  button: string;
  $buttonVariant?: "secondary" | "tertiary";
}> = [
  {
    id: "Tobias_Rotsch",
    title: "Tobias Rotsch",
    content: (
      <>
        <p>
          Tobias Rotsch ist als wissenschaftlicher Mitarbeiter vor allem für die
          didaktische Konzeptionierung und Entwicklung der Lehrkräftebildung und
          Lehr-Lern-Designs zuständig.
        </p>
        <p>
          Nach seinem Studium im Hauptfach Keyboards & Musicproduction an der
          Musikhochschule Münster ist er seit 2007 gefragter Dozent in Fort- und
          Weiterbildung und Lehre zu digitalen Themen mit musikdidaktischem
          Bezug und bringt so die idealen Voraussetzungen für unser Projekt mit,
          um an der Schnittstelle von Schule, künstlerischer Praxis und
          Musikdidaktik innovative Lehr-Lern-Konzepte zu gestalten.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: LogoTrosWhite,
    logoTwo: "",
    altLogoOne: "Trossingen Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Profilbild Tobias Rotsch",
    imgSrc: Tobi,
    linkTo: "mailto:t.rotsch@doz.hfm-trossingen.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Sandro_Dalfovo",
    title: "Sandro Dalfovo",
    content: (
      <>
        <p>
          Als wissenschaftlicher Mitarbeiter ist Sandro Dalfovo für
          pädagogisch-didaktische als auch künstlerisch-praktische Thematiken
          zuständig.
        </p>
        <p>
          Im Rahmen seines abgeschlossenen Lehramtsstudiums und dem Master of
          Music im Hauptfach Klavier an der Hochschule für Musik Trossingen, mit
          Virtual Reality als essentiellem Kernelement seines Examens, konnte er
          schon zahlreiche praktische und wissenschaftliche Erfahrung sammeln um
          diese unterstützend für die Gestaltung der Lehr-Lern-Designs
          einzusetzen.
        </p>
      </>
    ),
    description:
      "Staatliche Hochschule für Musik Trossingen Landeszentrum MUSIK–DESIGN–PERFORMANCE",
    logoOne: LogoTros,
    logoTwo: "",
    altLogoOne: "Trossingen Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Sandro Dalfovo",
    imgSrc: Sandro,
    linkTo: "mailto:s.dalfovo@doz.hfm-trossingen.de",
    button: "E-Mail",
  },
];
