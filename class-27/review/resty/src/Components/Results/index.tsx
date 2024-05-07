import React from 'react';

interface ResultsProps {
  data?: {
    count: number;
    results: Array<{ name: string, url: string}>;
  } | null;
}

const Results: React.FunctionComponent<ResultsProps> = ({ data }) => {

    return (
      <section>
        <pre>
          {data ? JSON.stringify(data, undefined, 2) : null}
        </pre>
      </section>
    );
}

export default Results;
