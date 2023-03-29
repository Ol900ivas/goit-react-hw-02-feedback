import PropTypes from 'prop-types';
import { Children } from 'react';
import { SectionWrap, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    // <h2>{title}</h2>
    <SectionWrap>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrap>
  );
};

SectionTitle.propTypes = { title: PropTypes.string };
