import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import MireviBlack from "../../assets/images/MIREVI.webp";
import FrauVRBrille from "../../assets/images/frau_mit_VRBrille.webp";

export const TeamOsnaData: Array<{
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
    id: "Verbundkoordination Prof. Dr. Michael Oehler",
    title: "Verbundkoordination Prof. Dr. Michael Oehler",
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
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: MireviWhite,
    logoTwo: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:michael.oehler@uos.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Verbundpartner Prof. Dr. Philipp Ahner",
    title: "Verbundpartner Prof. Dr. Philipp Ahner",
    content: (
      <p>
        Im Rahmen des Projekts werden verschiedene Methodiken angewandt, um die
        Projektziele zu erreichen <br /> <br />
        Hierzu zählen unter anderem die Analyse und Identifikation möglicher
        Einsatzgebiete von VR/AR im Musikunterricht mithilfe von etablierten
        Modellen und Werkzeugen wie TPACK, SAMR, CAMIL sowie dem Modell nach
        Kerres et al. <br /> <br /> Die Entwicklung der Prototypen und
        Konzeption der VR/AR Lehr-Lern-Designs erfolgt in einem iterativen
        Prozess, der sich an Design-Based Research und dem
        S.P.E.C.I.A.L-Framework orientiert. Dabei wird kontinuierlich die User
        Experience betrachtet und die Designs entsprechend angepasst.
      </p>
    ),
    description:
      "Staatliche Hochschule für Musik Trossingen Landeszentrum MUSIK–DESIGN–PERFORMANCE",
    logoOne: MireviBlack,
    logoTwo: MireviBlack,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:p.ahner@doz.hfm-trossingen.de",
    button: "E-Mail",
  },
  {
    id: "Verbundpartner Prof. Dr. Christian Geiger",
    title: "Verbundpartner Prof. Dr. Christian Geiger",
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
    logoOne: MireviWhite,
    logoTwo: MireviWhite,
    altLogoOne: "Mirevi Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:geiger@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
];
