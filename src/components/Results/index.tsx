/* eslint-disable import/no-duplicates */
import React from 'react';
import { parseISO, format } from 'date-fns';

interface ResultsProps {
  results: any;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  // const formattedDate = (date: any): any => {
  //   if (date) {
  //     const dateData = parseISO(date);
  //     console.log(dateData);
  //     const dateFormated = format(dateData, 'dd-MM-yyyy', { locale: pt });
  //     console.log(dateFormated);
  //   }
  // };
  console.log(results);
  return (
    <>
      {results.length > 0 ? (
        results.map((e: any) => (
          <div
            style={{
              display: 'flex',
              justifyItems: 'center',
              backgroundColor: '#EBEBEB',
              marginBottom: '4.4rem',
            }}
          >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                alt="text img"
                style={{
                  height: '31rem',
                  width: '25rem',
                  backgroundColor: '#116193',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '7rem',
                  backgroundColor: '#116193',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <h2
                  style={{
                    color: '#00E8E4',
                    fontSize: '3.5rem',
                    fontWeight: 'lighter',
                    marginLeft: '15rem',
                  }}
                >
                  {e.title}
                </h2>
              </div>
              <span>
                {e.release_date.length
                  ? format(parseISO(e.release_date), 'dd-MM-yyyy')
                  : 'Sem data cadastrada'}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div style={{ fontSize: '2.5rem', marginTop: '2rem' }}>
          Nenhum resultado encontrado!
        </div>
      )}
    </>
  );
};

export default Results;
