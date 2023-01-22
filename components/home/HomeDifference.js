import React from "react";
import Link from "next/link";

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
      <div className="homedifference-img"></div>
      <div className="homedifference-call">
        <Link href="/O_nama">NAŠA UVERENJA</Link>
      </div>
    </div>
  );
}

export default HomeDifference;
