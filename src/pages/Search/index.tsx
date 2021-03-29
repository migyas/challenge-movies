import React, { useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import Grid from '../../components/Grid';

import * as S from './styled';
import Results from '../../components/Results';

const Search: React.FC = () => {
  const [results, setResults] = useState([]);
  const apiKey = '17d590edad1d1b5dc2e7686fcbf28aff';

  async function getResults(title: any) {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${title}`,
      )
      .then((response: any) => {
        setResults(response.data.results);
        console.log(response.data);
      });
  }

  return (
    <>
      <Header />
      <Grid>
        <S.Container>
          <S.Input
            type="text"
            onChange={(e: any) => getResults(e.target.value)}
            placeholder="Busque o filme pelo nome"
          />
          <Results results={results} />
        </S.Container>
      </Grid>
    </>
  );
};

export default Search;
