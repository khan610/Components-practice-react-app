import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Khan"
        timeAgo="Today at 6:30"
        content="I am the best!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        time="Today at 7:30"
        content="Yes you are Khan!!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        time="Today at 8:30"
        content="I am honoured to be in the presence of the Khan!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
