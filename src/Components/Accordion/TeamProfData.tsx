import MireviWhite from "../../assets/images/MIREVI_weiss.webp";
import Michael from "../../assets/images/foto_oehler_uos_neu.webp";
import HSDWhite from "../../assets/images/HSD_Marke_v1_HSD_weiss.png";
import MTDMLWhite from "../../assets/images/MTDML Logo ohne Bildunterschrift invertiert 300px.webp";
import LogoOsnaGrau from "../../assets/images/UOS-Logo_Grau_1C_v01.webp";
import LogoTros from "../../assets/images/hfm-trossingen-logo550x274.webp";
import LogoTrosWithBackground from "../../assets/images/logo-hochschule-fuer-musik-trossingen.webp";

import Chris from "../../assets/images/CGEI.webp";
import Phil from "../../assets/images/Philipp Ahner.webp";

export const TeamProfData: Array<{
  id: string;
  title: JSX.Element | string;
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
    id: "Verbundkoordination_Prof_Dr_Michael_Oehler",
    title: (
      <>
        <span>
          Verbundkoordination <br />
          Prof. Dr. Michael Oehler
        </span>
      </>
    ),
    content: (
      <>
        <p>
          Michael Oehler ist seit 2017 Professor für Systematische
          Musikwissenschaft mit dem Schwerpunkt Musik- und Medientechnologie am
          Institut für Musikwissenschaft und Musikpädagogik (IMM) der
          Universität Osnabrück. Zuvor war er Professor für Musikalische Akustik
          an der Hochschule Düsseldorf sowie Professor für Musik- und
          Medienmanagement an der Macromedia Hochschule Köln.
        </p>
        <p>
          Er ist Geschäftsführer der Forschungsstelle Musik- und
          Medientechnologie (FMT) sowie Leiter des Music Technology and Digital
          Musicology Lab (MTDML) an der Universität Osnabrück
          (mtdml.uni-osnabrueck.de).
        </p>
        <p>
          Für die Deutsche Gesellschaft für Musikpsychologie (DGM) saß er 12
          Jahre lang im Vorstand und war von 2014 bis 2021 ihr Präsident. Seine
          Forschungsinteressen liegen im Bereich Musikalische Akustik,
          Musikinformatik, Musiktechnologie, 3D Audio und
          Wahrnehmungspsychologie. Er ist Verbundkoordinator von LEVIKO-XR.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: LogoOsnaGrau,
    logoTwo: MTDMLWhite,
    altLogoOne: "Osnabrück Logo",
    altLogoTwo: "MTDML Logo",
    $objectPosition: "30%",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: Michael,
    linkTo: "mailto:michael.oehler@uos.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Verbundpartner_Prof_Dr_Philipp_Ahner",
    title: (
      <>
        <span>
          Verbundpartner <br />
          Prof. Dr. Philipp Ahner
        </span>
      </>
    ),
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
    logoOneDarkMode: LogoTrosWithBackground,
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
    title: (
      <>
        <span>
          Verbundpartner <br />
          Prof. Dr. Christian Geiger
        </span>
      </>
    ),
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
