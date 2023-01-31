import React from "react";
import Link from "next/link";
import Image from "next/image";
import { calculateOverrideValues } from "next/dist/server/font-utils";

function HomeDifference() {
  return (
    <div className="homedifference-container">
      <div className="homedifference-text">
        <div className="homedifference-title">
          <h6>USPEH I USAVRŠAVANJE</h6>
        </div>
        <p>
          Verujemo da je put ka uspehu konstantno učenje, usavršavanje i potraga
          za novim tehnologijama.Kao tim, trudimo se da vaše iskustvo bude uvek
          pozitivno, da naš posao obavimo na način koji je opušten, umirujući i
          izuzetan.
        </p> 
      </div>
      <div className="homedifference-img">
        <Image 
          src='/homeDiff1.jpg'
          alt='zubar i pacijent'
          width={1200}
          height={1015}
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
      <div className="homedifference-call">
        <Link href="/O_nama">NAŠA UVERENJA</Link>
      </div>
    </div>
  );
}

export default HomeDifference;
