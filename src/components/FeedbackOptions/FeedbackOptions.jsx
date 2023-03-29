import { Component } from 'react';
import PropTypes from 'prop-types';
// import { CgSmile, CgSmileNone, CgSmileSad } from 'react-icons/cg';
import { Button, FeedbackWrap } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  options,
  onLeaveFeedback,
  // buttonOptions,
}) => {
  // static defaultProps = this.props.onLeaveFeedback;

  return (
    <FeedbackWrap>
      {options.map(button => (
        <li key={button}>
          <Button type="button" onClick={onLeaveFeedback}>
            {/* {button === Object.keys(buttonOptions) &&
              Object.value(buttonOptions)} */}
            {button}
          </Button>
        </li>
      ))}
    </FeedbackWrap>
  );
};
{
  /* <Button type="button" text="Good" onClick={onLeaveFeedback}>
        <CgSmile />
        Good
      </Button>
      <Button type="button" text="Neutral">
        <CgSmileNone />
        Neutral
      </Button>
      <Button type="button" text="Bad">
        <CgSmileSad />
        Bad
      </Button>
    </FeedbackWrap> */
}
