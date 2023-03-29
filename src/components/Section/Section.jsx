import PropTypes from 'prop-types';
import { SectionWrap, SectionTitle } from './Section.styled.js';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

SectionTitle.propTypes = { title: PropTypes.string };
