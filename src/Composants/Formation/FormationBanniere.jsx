import React from 'react';
import { HouseDoorFill } from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function FormationBanniere() {
  return (
    <>
      <div className="text-au-dessus-banniere">
        <div>Formation</div>

        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/home">
              <HouseDoorFill color="#000" size={20} className=" mx-2" />
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Formation</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="banner-formation my-5 "></div>
    </>
  );
}
