import Link from "next/link";
import React, { useState } from "react";

function HomeSmile() {
  return (
    <div className="homesmile-container">
      <div className="homesmile-img"></div>
      <div className="homesmile-text">
        <div className="homesmile-title">
          <h6>NAJLEPSI OSMEH</h6>
        </div>
        <p>
          SMATRAMO DA ZASLUŽUJTE NAJBOLJU STOMATOLOŠKU NEGU. ZATO NUDIMO ŠIROK
          SPEKTAR KOZMETIČKIH REŠENJA, PORODIČNE NEGE I TRETMANE SKROJENE PO
          MERI KOJI NAJBOLJE ODGOVARAJU VAMA I VAŠOJ PORODICI. MI UČESTVUJEMO U
          STVARANJU ZDRAVIH, LEPIH OSMEHA KOJI MENJAJU ŽIVOT U POTPUNOSTI.
        </p>
      </div>
      <div className="homesmile-call">
        <Link href="/Najlepsi_osmeh">ŽELITE LEPŠI OSMEH?</Link> 
      </div>
    </div>
  );
}

export default HomeSmile;
