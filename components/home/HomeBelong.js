import Link from "next/link";
import React from "react";
import Image from "next/image";


function HomeBelong() {
  return (
    <div>
      <div className="homebelong-title1">Vi ovde pripadate!</div>
      <div className="homebelong-container">
        <div className="homebelong-img">
        <Image 
          src='/homeBelong1.webp'
          alt='pregled kod stomatologa'
          width={1200}
          height={892}
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

        <div className="homebelong-text">
          <p>
            RADIMO NA TOme DA BUDEMO UVEK PRI RUCI I DA POMOGNEMO U SVIM POTREBAMA
            NAŠIH KLIJENATA. KOD NAS uvek vlada PRIjATNA ATMOSFERA I trudimo se
            da LJUBAZNOŠĆU I PAŽNJOM IZGRADIMO DUGOTRAJNE VEZE. KOD NAS SE LJUDI
            OSEĆAJU KAO KOD KUĆE I POSTAJU DEO NAŠE PORODICE.
          </p>
        </div>
        <div className="homebelong-call">
          <Link href="/Prva_poseta">vaša prva poseta?</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBelong;
