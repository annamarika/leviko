import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import MireviBlack from "../../assets/images/MIREVI.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";
import HSDBlack from "../../assets/images/HSD_Marke_v1_HSD_Schw.png";
import FrauVRBrille from "../../assets/images/frau_mit_VRBrille.webp";

export const TeamDusData: Array<{
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
    id: "Jochen Feitsch",
    title: "Jochen Feitsch",
    content: (
      <p>
        Michael Oehler ist Professor für Systematische Musikwissenschaft an der
        Universität Osnabrück. Er leitet das Music Technology and Digital
        Musicology Lab (MTDML) und ist Geschäftsführer der Forschungsstelle
        Musik- und Medientechnologie (FMT). In den letzten Jahren war er an
        bedeutenden Forschungsprojekten beteiligt, darunter NOSTRESS, PRESET und
        CA/AXR. <br /> <br />
        Als Mitglied verschiedener Fachgesellschaften wie der Gesellschaft für
        Musikforschung (GfM) und der Deutschen Gesellschaft für Musikpsychologie
        (DGM) trägt er aktiv zum musikwissenschaftlichen Diskurs bei.
      </p>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDWhite,
    logoTwo: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:jochen.feitsch@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Anna Holtmann",
    title: "UX/Ui Designerin Anna Holtmann",
    content: (
      <p>
        Anna Holtmann ist eine studierte Produktdesignerin und arbeitet seit
        2022 bei Mirevi als UX/UI-Designerin und Frontend-Entwicklerin mit dem
        Fokus auf Web XR. <br /> <br />
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
    logoTwo: MireviBlack,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:anna-maria.holtmann@hs-duesseldorf.de",
    button: "E-Mail",
  },
  {
    id: "Charlotte Triebus",
    title: "Charlotte Triebus",
    content: (
      <p>
        Seit November 2004 ist Christian Geiger Professor für Mixed Reality und
        Visualisierung im Fachbereich Medien der HS Düsseldorf und arbeitet an
        innovativen Mensch-Technik-Schnittstellen.
        <br /> <br />
        Mit seinem interdisziplinären Team und seinen Studentinnen und Studenten
        geht es ihm besonders darum, neue Technologien nutzerzentriert, d. h.
        für den Menschen zu entwickeln und den Transfer in die Praxis schon
        frühzeitig zu unterstützen. <br /> <br />
        Er leitet seit 2015 den Innovationshub, ein Forschungs- und
        Entwicklungslabor nahe des Düsseldorfer Hauptbahnhofs wo Studierende mit
        zwei mittelständischen Firmen gemeinsam an Digitalisierungsprojekten
        arbeiten.
        <br /> <br />
        Informationen zu Forschung, Lehre und Transfer findet man unter
        www.mirevi.de
      </p>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDWhite,
    logoTwo: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:chralotte.triebus@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
];
