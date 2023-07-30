import '../Style/Presentation.css';

import React from 'react';
import PresentationBanniere from '../Composants/Presentation/PresentationBanniere';
import PresentationSlogan from '../Composants/Presentation/PresentationSlogan';
import PresentationNosAtouts from '../Composants/Presentation/PresentationNosAtouts';

export default function Presentation() {
  return (
    <div>
      <PresentationBanniere />
      <PresentationSlogan />
      <PresentationNosAtouts />
    </div>
  );
}
