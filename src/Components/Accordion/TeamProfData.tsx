import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import FrauVRBrille from "../../assets/images/frau_mit_VRBrille.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";
import LogoOsna from "../../assets/images/UOS-Logo_Grau_1C_v01.webp";
import LogoTros from "../../assets/images/hfm-trossingen-logo550x274.webp";
import Chris from "../../assets/images/CGEI.webp";
import Phil from "../../assets/images/Philipp Ahner.webp";

export const TeamProfData: Array<{
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
    id: "Verbundkoordination_Prof_Dr_Michael_Oehler",
    title: "Verbundkoordination Prof. Dr. Michael Oehler",
    content: (
      <>
        <p>
          Michael Oehler ist Professor für Systematische Musikwissenschaft an
          der Universität Osnabrück. Er leitet das Music Technology and Digital
          Musicology Lab (MTDML) und ist Geschäftsführer der Forschungsstelle
          Musik- und Medientechnologie (FMT). In den letzten Jahren war er an
          bedeutenden Forschungsprojekten beteiligt, darunter NOSTRESS, PRESET
          und CA/AXR.
        </p>
        <p>
          Als Mitglied verschiedener Fachgesellschaften wie der Gesellschaft für
          Musikforschung (GfM) und der Deutschen Gesellschaft für
          Musikpsychologie (DGM) trägt er aktiv zum musikwissenschaftlichen
          Diskurs bei.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: LogoOsna,
    logoTwo: "",
    altLogoOne: "Osnabrück Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: FrauVRBrille,
    linkTo: "mailto:michael.oehler@uos.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Verbundpartner_Prof_Dr_Philipp_Ahner",
    title: "Verbundpartner Prof. Dr. Philipp Ahner",
    content: (
      <>
        <p>
          Philipp Ahner ist Professor für Musikpädagogik und Musikdidaktik sowie
          Prorektor für Studium, Lehre und Forschung der Staatlichen Hochschule
          für Musik Trossingen.
        </p>
        <p>
          Seine Aufgabenschwerpunkte als Prorektor liegen in der
          Hochschulentwicklung (Studiengänge, Lehrentwicklung, Akkreditierung,
          digitale Transformation, künstlerisch-wissenschaftliche Forschung) und
          als wissenschaftlicher Professor in der musikdidaktischen Forschung im
          Kontext digitaler Medien im Landeszentrum MUSIK–DESIGN–PERFORMANCE der
          Hochschule.
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
    imgAlt: "Profilbild Prof. Dr. Philipp Ahner",
    imgSrc: Phil,
    linkTo: "mailto:p.ahner@doz.hfm-trossingen.de",
    button: "E-Mail",
  },
  {
    id: "Verbundpartner_Prof_Dr_Christian_Geiger",
    title: "Verbundpartner Prof. Dr. Christian Geiger",
    content: (
      <>
        <p>
          Seit November 2004 ist Christian Geiger Professor für Mixed Reality
          und Visualisierung im Fachbereich Medien der HS Düsseldorf und
          arbeitet an innovativen Mensch-Technik-Schnittstellen.
        </p>
        <p>
          Mit seinem interdisziplinären Team und seinen Studentinnen und
          Studenten geht es ihm besonders darum, neue Technologien
          nutzerzentriert, d. h. für den Menschen zu entwickeln und den Transfer
          in die Praxis schon frühzeitig zu unterstützen. <br /> <br />
          Er leitet seit 2015 den Innovationshub, ein Forschungs- und
          Entwicklungslabor nahe des Düsseldorfer Hauptbahnhofs wo Studierende
          mit zwei mittelständischen Firmen gemeinsam an
          Digitalisierungsprojekten arbeiten.
        </p>
        <p>
          Informationen zu Forschung, Lehre und Transfer findet man unter
          www.mirevi.de
        </p>
      </>
    ),
    description:
      "Hochschule Düsseldorf MIREVI (Mixed Reality and Visualization)",
    logoOne: HSDWhite,
    logoTwo: MireviWhite,
    altLogoOne: "HSD Logo",
    altLogoTwo: "Mirevi Logo",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Christian Geiger",
    imgSrc: Chris,
    linkTo: "mailto:geiger@hs-duesseldorf.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
];
