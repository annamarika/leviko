import styled from "styled-components";
import LupeSVG from "../UI/Buttons/LupeSVG";
import usePublikationenStore from "../stores/usePublikationenStore";
import useDarkModeStore from "../stores/useDarkModeStore";

interface DarkModeProps {
  $isDarkModeOn: boolean;
}

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

  // Handle when a tag is clicked
  const handleTagClick = (tag: string) => {
    setSearchValue(tag);
    setSelectedTag(tag); // Set selected tag
  };

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Set the search value in store
  };

  return (
    <HeroStartseiteContainer>
      <HeadlineContainer>
        <h1>{headline}</h1>
        <p>{description}</p>
      </HeadlineContainer>
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
        <TagText $isDarkModeOn={isDarkModeOn}>
          Wähle aus den vorgeschlagenen Tags aus:
        </TagText>

        {/* Show "Kein Tag gefunden" if searchValue exists but no tags are found */}
        {searchValue && filteredTags.length === 0 && (
          <NoTagFound $isDarkModeOn={isDarkModeOn}>
            Kein Tag gefunden
          </NoTagFound>
        )}

        {/* Show nothing if no searchValue is entered */}
        {!searchValue && (
          <NoTagFound $isDarkModeOn={isDarkModeOn}>
            Kein Tag gefunden
          </NoTagFound>
        )}

        {/* Display suggested tags if searchValue exists and filteredTags are found */}
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

export const HeroStartseiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 48px;
  margin-right: 160px;
  margin-left: 160px;
  margin-top: 50px;

  padding-top: 100px;

  height: 100vh;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-right: 24px;
    margin-left: 24px;
    padding-top: 80px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    margin-top: 0;
    padding-top: 56px;
    flex-direction: column;
    align-items: start;
    gap: 0;
    height: 100vh;
    margin-bottom: 0;
  }
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

const SearchBarContainer = styled.div<DarkModeProps>`
  display: flex;
  align-items: center;
  border: ${({ $isDarkModeOn }) =>
    $isDarkModeOn
      ? "3px solid var(--leviko-green)"
      : "3px solid var(--leviko-blue)"};

  border-radius: 50px;
  width: 50%;
  padding: 20px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    padding: 10px 20px;
  }
`;

const SearchInput = styled.input<DarkModeProps>`
  border: none;
  outline: none;
  flex-grow: 1;
  font-family: Blatant;
  font-size: 18px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  background-color: transparent;

  &::placeholder {
    color: ${({ $isDarkModeOn }) =>
      $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-top: -30px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

const TagText = styled.p<DarkModeProps>`
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  font-size: 16px;
`;

const TagSuggestionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const TagSuggestion = styled.span`
  padding: 8px 16px;
  border: 2px solid var(--leviko-blue);
  border-radius: 50px;
  font-size: 14px;
  color: var(--leviko-blue);
  background-color: var(--leviko-white);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--leviko-blue);
    color: var(--leviko-white);
  }
`;

// New styled component for "No Tag Found" placeholder
const NoTagFound = styled.span<DarkModeProps>`
  padding: 8px 16px;
  border: ${({ $isDarkModeOn }) =>
    $isDarkModeOn
      ? "2px solid var(--leviko-green)"
      : "2px solid var(--leviko-blue)"};
  border-radius: 50px;
  font-size: 14px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-blue)"};
  background-color: var(--leviko-white);
  cursor: default;
  opacity: 0.6;
`;
