import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const textContent = event.currentTarget.textContent;

    this.setState(prevState => {
      return { [textContent]: prevState[textContent] + 1 };
    });
  };

  total = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={
          {
            // height: '100vh',
            //   display: 'flex',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   fontSize: 40,
            //   color: '#010101',
          }
        }
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.total() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}
