import React from "react";
import LupeSVG from "../UI/Buttons/LupeSVG";
import usePublikationenStore from "../stores/usePublikationenStore";
import useDarkModeStore from "../stores/useDarkModeStore";

// Importing the styled components from the separate file
import {
  HeroStartseiteContainer,
  HeadlineContainer,
  SearchBarContainer,
  SearchInput,
  TagTextContainer,
  TagText,
  NoTagFound,
  TagSuggestionsContainer,
  TagSuggestion,
} from "../UI/Hero/HeroPublikationen.styled.tsx";

/**
 * HeroPublikationen Component
 *
 * Displays the headline, description, search bar, and suggested tags for the Publikationen page.
 * Allows users to search for and select suggested tags.
 *
 * @param {string} headline - The main headline of the hero section.
 * @param {string} description - The descriptive text in the hero section.
 * @param {string[]} allTags - An array of suggested tags for filtering publications.
 */
interface HeroPublikationenProps {
  headline: string;
  description: string;
  allTags: string[];
}

const HeroPublikationen: React.FC<HeroPublikationenProps> = ({
  headline,
  description,
  allTags,
}) => {
  const searchValue = usePublikationenStore((state) => state.searchValue);
  const setSearchValue = usePublikationenStore((state) => state.setSearchValue);
  const setSelectedTag = usePublikationenStore((state) => state.setSelectedTag);
  const { isDarkModeOn } = useDarkModeStore();

  // Filter the tags based on search input
  const filteredTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Handle tag click
  const handleTagClick = (tag: string) => {
    setSearchValue(tag);
    setSelectedTag(tag); // Set the selected tag
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Set the search value in store
  };

  return (
    <HeroStartseiteContainer>
      <HeadlineContainer>
        <h1>{headline}</h1>
        <p>{description}</p>
      </HeadlineContainer>

      {/* Search bar for tag input */}
      <SearchBarContainer $isDarkModeOn={isDarkModeOn}>
        <SearchInput
          $isDarkModeOn={isDarkModeOn}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Suchbegriff..."
        />
        <LupeSVG
          color={isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"}
        />
      </SearchBarContainer>

      <TagTextContainer>
        {/* Display instruction text for selecting tags */}
        <TagText $isDarkModeOn={isDarkModeOn}>
          Wähle aus den vorgeschlagenen Tags aus:
        </TagText>

        {/* Handle no tags found scenario */}
        {searchValue && filteredTags.length === 0 && (
          <NoTagFound $isDarkModeOn={isDarkModeOn}>
            Kein Tag gefunden
          </NoTagFound>
        )}

        {/* Handle case where search input is empty */}
        {!searchValue && (
          <NoTagFound $isDarkModeOn={isDarkModeOn}>
            Kein Tag gefunden
          </NoTagFound>
        )}

        {/* Display the filtered tag suggestions */}
        {searchValue && filteredTags.length > 0 && (
          <TagSuggestionsContainer>
            {filteredTags.map((tag, index) => (
              <TagSuggestion key={index} onClick={() => handleTagClick(tag)}>
                {tag}
              </TagSuggestion>
            ))}
          </TagSuggestionsContainer>
        )}
      </TagTextContainer>
    </HeroStartseiteContainer>
  );
};

export default HeroPublikationen;
