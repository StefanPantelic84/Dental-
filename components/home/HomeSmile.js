import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function HomeSmile() {
  return (
    <div className="homesmile-container">
      <div className="homesmile-img">
      <Image 
          src='/homeSmile1.webp'
          alt='zubar i pacijent'
          width={800}
          height={533}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 50%'
          }}
        />
      </div>
      <div className="homesmile-text">
        <div className="homesmile-title">
          <h6>ZA NAJLEPŠI OSMEH</h6>
        </div>
        <p>
          SMATRAMO DA ZASLUŽUJTE NAJBOLJU STOMATOLOŠKU NEGU. ZATO NUDIMO ŠIROK
          SPEKTAR KOZMETIČKIH REŠENJA, PORODIČNE NEGE I TRETMANE SKROJENE PO
          MERI KOJI NAJBOLJE ODGOVARAJU VAMA I VAŠOJ PORODICI. MI UČESTVUJEMO U
          STVARANJU ZDRAVIH, LEPIH OSMEHA KOJI MENJAJU ŽIVOT U POTPUNOSTI.
        </p>
      </div>
      <div className="homesmile-call">
        <Link href="/Osmeh">ŽELITE LEPŠI OSMEH?</Link> 
      </div>
    </div>
  );
}

export default HomeSmile;
