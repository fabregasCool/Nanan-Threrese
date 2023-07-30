import React from 'react';
import '../Style/Formation.css';
import FormationBanniere from '../Composants/Formation/FormationBanniere';
import FormationNosFilieres from '../Composants/Formation/FormationNosFilieres';
import FormationResultats from '../Composants/Formation/FormationResultats';

export default function Formation() {
  return (
    <div>
      <FormationBanniere />
      <FormationNosFilieres />
      <FormationResultats />
    </div>
  );
}
