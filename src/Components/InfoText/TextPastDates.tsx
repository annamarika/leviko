import React from "react";
import {
  DateHeadlineContainer,
  DateContainer,
  HeadlineContainer,
} from "../UI/InfoText/TextPastDates.styled";

interface TextPastDatesProps {
  date: string; // Format: 'dd. MM. yyyy' oder ähnlich
  headline: string;
}

const TextPastDates: React.FC<TextPastDatesProps> = ({
  date,
  headline,
}) => {
  return (
    <DateHeadlineContainer>
      <DateContainer>{date}</DateContainer>
      <HeadlineContainer>{headline}</HeadlineContainer>
    </DateHeadlineContainer>
  );
};

export default TextPastDates;