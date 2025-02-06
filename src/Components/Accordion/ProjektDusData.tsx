import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import MireviBlack from "../../assets/images/MIREVI.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";
import HSDBlack from "../../assets/images/HSD_Marke_v1_HSD_Schw.png";
import Jochen from "../../assets/images/JOFE.webp";
import Charlotte from "../../assets/images/CHTR.webp";
import Anna from "../../assets/images/anna.webp";
import Julia from "../../assets/images/Julia.webp";

export const TeamDusData: Array<{
  id: string;
  title: string;
  description: string;
  logoOne: string;
  logoOneDarkMode?: string;
  logoTwo: string;
  logoTwoDarkMode?: string;
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
    id: "Jochen_Feitsch",
    title: "Jochen Feitsch",
    content: (
      <p>
        Jochen Feitsch ist wissenschaftlicher Mitarbeiter und Laborleiter im
        Team MIREVI der Hochschule Düsseldorf. Er besitzt einen Master of
        Science in Medieninformatik und lehrt unter anderem Mathematik 3 im
        Bachelorstudiengang Medieninformatik. Zusätzlich betreut er
        Studierendenprojekte, die sich vor allem mit medialen Inszenierungen
        befassen. <br /> <br />
        In seiner wissenschaftlichen Arbeit koordiniert er verschiedene
        Forschungsprojekte des Teams und bringt umfangreiche Kenntnisse in den
        Bereichen kreative Codierung, Motion Capturing und digitale Performance
        ein. Seine Arbeit verbindet technologische Innovation mit künstlerischer
        Kreativität, was sich in zahlreichen Projekten und Installationen
        widerspiegelt.
      </p>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDWhite,
    logoTwo: MireviWhite,
    altLogoOne: "HSD Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Jochen Feitsch",
    imgSrc: Jochen,
    linkTo: "mailto:jochen.feitsch@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Anna_Holtmann",
    title: "Anna Holtmann",
    content: (
      <p>
        Anna Holtmann ist studierte Produktdesignerin und arbeitet seit 2022 bei
        Mirevi als UX/UI-Designerin und Frontend-Entwicklerin mit dem Fokus auf
        Web XR. <br /> <br />
        Schon während ihres Studiums spezialisierte sich Anna auf
        3D-Modellierung und 3D-Scan zur Anwendung für AR-Anwendungen. <br />
        <br />
        Mit ihrem Design-Hintergrund legt sie großen Wert auf
        Benutzerfreundlichkeit und die Integration neuer Technologien, um
        innovative und zugängliche Benutzererfahrungen zu schaffen.
      </p>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDBlack,
    logoOneDarkMode: HSDWhite,
    logoTwo: MireviBlack,
    logoTwoDarkMode: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Anna Holtmann",
    imgSrc: Anna,
    linkTo: "mailto:anna-maria.holtmann@hs-duesseldorf.de",
    button: "E-Mail",
  },
  {
    id: "Julia_Lueckhof",
    title: "Julia Lückhof",
    content: (
      <p>
        Julia Lückhof ist wissenschaftliche Mitarbeiterin bei MIREVI (Mixed
        Reality and Visualization) an der Hochschule Düsseldorf und studiert an
        selbiger im Masterstudiengang Medieninformatik. <br /> <br />
        Neben LEVIKO XR arbeitet sie bei MIREVI an weiteren Forschungsprojekten
        mit Bezug auf VR und Medialen Inszenierungen wie Rokit, Akzente und
        diversen Studienprojekten. Außerdem gestaltet sie Workshops für VR. In
        ihrem Forschungsfokus erarbeitet sie das Thema Projection Mapping und
        geht dabei sowohl auf technische, als auch auf gestalterische
        Herausforderungen ein.
      </p>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDWhite,
    logoTwo: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Julia Lückhof",
    imgSrc: Julia,
    linkTo: "mailto:julia.lueckhof@hs-duesseldorf.de",
    button: "E-Mail",
	$buttonVariant: "secondary",
  },
  {
    id: "Charlotte_Triebus",
    title: "Charlotte Triebus",
    content: "",
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDBlack,
    logoOneDarkMode: HSDWhite,
    logoTwo: MireviBlack,
    logoTwoDarkMode: MireviWhite,
    altLogoOne: "HSD Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Charlotte Triebus",
    imgSrc: Charlotte,
    linkTo: "mailto:chralotte.triebus@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
];
