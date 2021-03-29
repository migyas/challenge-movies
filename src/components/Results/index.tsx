import React from 'react';

interface ResultsProps {
  results: any;
}

const Results: React.FC<ResultsProps> = ({ results }) => {
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
                src={e.poster_path}
                alt="text img"
                style={{
                  height: '31rem',
                  width: '21rem',
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
