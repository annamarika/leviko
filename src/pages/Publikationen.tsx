import { useMemo, useRef, RefObject } from "react";
import HeroPublikationen from "../Components/Hero/HeroPublikationen";
import Publikation from "../Components/Publikationen/Publikation";
import publikationData from "../Components/Publikationen/PublikationData";
import usePublikationenStore from "../Components/stores/usePublikationenStore";
import ParallaxSection from "../Components/UI/Parallax/ParallaxSection.styled";
import { useStickyScroll } from "../Components/customHooks/useStickyScroll";
import MarqueeNews from "../Components/Banner/MarqueeNews";
import { Headline } from "../Components/UI/Headline.styled";

const PublikationenPage = () => {
  const searchValue = usePublikationenStore((state) => state.searchValue);
  const selectedTag = usePublikationenStore((state) => state.selectedTag);

  // Hero section ref
  const heroRef = useRef<HTMLDivElement>(null);

  // Erstelle Referenzen für alle Publikationen einmalig
  const refs = useRef<RefObject<HTMLDivElement>[]>(
    Array(publikationData.length)
      .fill(null)
      .map(() => useRef<HTMLDivElement>(null))
  );

  // Alle verfügbaren Such-Tags extrahieren
  const allSearchTags = useMemo(() => {
    const tags = publikationData.flatMap((pub) => pub.searchTags || []);
    return Array.from(new Set(tags)); // Einzigartige Such-Tags
  }, []);

  // Gefilterte Publikationen basierend auf dem eingegebenen oder geklickten Tag
  const filteredPublikationen = useMemo(() => {
    if (!selectedTag && !searchValue) return publikationData;

    const lowerSearchValue = searchValue.toLowerCase();

    return publikationData.filter((pub) => {
      const combinedTags = [...(pub.tags || []), ...(pub.searchTags || [])];
      return (
        combinedTags.some((tag) =>
          tag.toLowerCase().includes(lowerSearchValue)
        ) || combinedTags.includes(selectedTag)
      );
    });
  }, [selectedTag, searchValue]);

  // Verwende useStickyScroll für Hero und Publikationen
  useStickyScroll([heroRef, ...refs.current], {
    onEnter: (entry) => {
      entry.target.classList.add("sticky");
    },
    onLeave: (entry) => {
      entry.target.classList.remove("sticky");
    },
  });

  return (
    <>
      {/* Parallax-Effekt auf HeroPublikationen */}
      <ParallaxSection ref={heroRef} className="sticky-section">
        <HeroPublikationen
          headline="Unsere Forschungs&shy;ergebnisse und Publikationen"
          description="Entdecke unsere neuesten Forschungsergebnisse und wissenschaftlichen Publikationen, die Einblicke in unsere Arbeit zur Integration von VR/AR-Technologien im Musikunterricht bieten."
          allTags={allSearchTags}
        />
      </ParallaxSection>

      {/* Parallax-Effekt auf alle Publikationen */}
      {filteredPublikationen.map((pub, index) => (
        <ParallaxSection
          ref={refs.current[index]} // Verwende die statisch initialisierten Referenzen
          className="sticky-section"
          key={pub.id}
        >
          <Publikation
            date={pub.date}
            headline={pub.headline}
            subHeadline={pub.subHeadline}
            tags={pub.tags}
            imgAlt={pub.imgAlt}
            imgSrc={pub.imgSrc}
            linkTo={pub.linkTo}
            button={pub.button}
            $buttonVariant={pub.$buttonVariant}
            description={pub.description}
            isEven={index % 2 === 0}
          />
        </ParallaxSection>
      ))}
      <Headline>Newsticker</Headline>
      <MarqueeNews />
    </>
  );
};

export default PublikationenPage;
