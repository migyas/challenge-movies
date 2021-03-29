import React from 'react';

import Container from './Container';
import Content from './Content';

const Grid: React.FC = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default Grid;
