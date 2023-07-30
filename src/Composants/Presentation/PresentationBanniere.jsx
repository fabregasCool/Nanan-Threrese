import React from 'react';
import { HouseDoorFill } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function PresentationBanniere() {
  return (
    <>
      <div className="text-au-dessus-banniere">
        <div>Presentation</div>

        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">
              <HouseDoorFill color="#000" size={20} className=" mx-2" />
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Présentation</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="banner-presentation my-5 "></div>
    </>
  );
}
