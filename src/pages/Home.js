import React from 'react';
import styled from 'styled-components';

const Unlisted = styled.h2`

margin: 0 auto;
text-align: center;
display: inline;
color: green;

`;

export default function Home() {
  return (
    <Unlisted>
      <div>
        <h2>My Website</h2>
      </div>
    </Unlisted>
  );
}
