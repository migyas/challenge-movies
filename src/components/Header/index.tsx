import React from 'react';
import Grid from '../Grid';

import * as S from './styled';

const Header: React.FC = () => (
  <S.Container>
    <Grid>
      <S.Text>Movies</S.Text>
    </Grid>
  </S.Container>
);

export default Header;
