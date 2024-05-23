import Leo from "../../assets/images/Leonard Bruns.webp";
import Bene from "../../assets/images/Benedict Saurbier.webp";
import OsnaLogo from "../../assets/images/UOS-Logo_Grau_1C_v01.webp";

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
    id: "Leonard_Bruns",
    title: "Leonard Bruns",
    content: (
      <>
        <p>
          Ist wissenschaftlicher Mitarbeiter im music technology and digital
          musicology lab (mtdml) an der Universität Osnabrück. Nach seinem
          Lehramtsstudium in den Fächern Musik und Mathematik beendete er 2023
          sein Referendariat mit dem 2. Staatsexamen.
        </p>
        <p>
          Neben LEVIKO XR arbeitete Benedict Saurbier an weiteren Forschungs-
          und Lehrprojekten mit, darunter der Virtual Organology, Musical
          Interfaces und NOSTRESS. Darüber hinaus beschäftigte er sich in seinen
          Abschlussarbeiten mit den Themenbereichen Schallquellen in der
          virtuellen und erweiterten Realität sowie zu Mixed-Audio-Reality.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: OsnaLogo,
    logoTwo: "",
    altLogoOne: "Osnabrück Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Profilbild Leonard Bruns",
    imgSrc: Leo,
    linkTo: "mailto:lebruns@uni-osnabrueck.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
  {
    id: "Benedict_Saurbier",
    title: "Benedict Saurbier",
    content: (
      <>
        <p>
          Ist wissenschaftlicher Mitarbeiter im music technology and digital
          musicology lab (mtdml) an der Universität Osnabrück. Nach seinem
          Lehramtsstudium in den Fächern Musik und Mathematik beendete er 2023
          sein Referendariat mit dem 2. Staatsexamen.
        </p>
        <p>
          Neben LEVIKO XR arbeitete Benedict Saurbier an weiteren Forschungs-
          und Lehrprojekten mit, darunter der Virtual Organology, Musical
          Interfaces und NOSTRESS. Darüber hinaus beschäftigte er sich in seinen
          Abschlussarbeiten mit den Themenbereichen Schallquellen in der
          virtuellen und erweiterten Realität sowie zu Mixed-Audio-Reality.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: OsnaLogo,
    logoTwo: "",
    altLogoOne: "Osnabrück Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Profilbild Benedict Saurbier",
    imgSrc: Bene,
    linkTo: "mailto:benedict.saurbier@uni-osnabrueck.de",
    button: "E-Mail",
  },
  {
    id: "Tray_Minh_Voong",
    title: "Tray Minh Voong",
    content: (
      <>
        <p>
          Tray Minh Voong ist nach seinem Abschluss im Master of Education für
          die Fächer Biologie und Musik als wissenschaftlicher Mitarbeiter in
          der Universität Osnabrück tätig und wirkte an unzähligen Projekten im
          Bereich Musiktechnologie mit.
        </p>
        <p>
          Zu den Forschungsschwerpunkten gehört die virtuelle Akustik in Virtual
          Reality – Anwendungen und psychoakustische Wahrnehmungen im virtuellen
          Raum. Er übernahm in dem Lehrprojekten ‚VILLA VR‘ und ‚Objektbasierte
          Musikproduktionen (OBM)‘ die Leitung und war/ist in anderen Projekten
          wie Virtual Organology und LEVIKO-XR tätig.
        </p>
      </>
    ),
    description:
      "Universität Osnabrück Institut für Musikwissenschaft und Musikpädagogik Music Technology & Digital Musicology Lab (MTDML)",
    logoOne: OsnaLogo,
    logoTwo: "",
    altLogoOne: "Osnabrück Logo",
    altLogoTwo: "",
    $objectPosition: "center",
    imgAlt: "Profilbild Prof. Dr. Michael Oehler",
    imgSrc: OsnaLogo,
    linkTo: "mailto:tray.minh.voong@uni-osnabrueck.de",
    button: "E-Mail",
    $buttonVariant: "secondary",
  },
];
