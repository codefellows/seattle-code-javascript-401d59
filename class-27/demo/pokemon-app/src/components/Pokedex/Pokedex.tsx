import React from 'react';
import { Pokemon } from '../../index';
import { prettyPrintJson } from 'pretty-print-json'

export interface PokedexProps {
  data: Array<Pokemon>
}

function Pokedex(props: PokedexProps): React.ReactElement {

  const html = prettyPrintJson.toHtml(props.data);

  return (
    <div>
      <pre dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  )
}

export default Pokedex;
