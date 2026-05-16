import React from 'react';
import './MyComponent.css';

interface Props {
  title: string;
}

const MyComponent: React.FC<Props> = ({ title }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <p>This is a paragraph of text within my component.</p>
    </div>
  );
};

export default MyComponent;
