import React from "react";
import Image from "next/image";

function SmileCare() {
  return (
    <div className="smilecare-container">
      <div className="smilecare-text">
        <div className="smilecare-title">
          <h6>PORODIČNA NEGA ZUBA</h6>
        </div>
        <div>
        <p>
        NUDIMO DIJAGNOSTIČKU, PREVENTIVNU I RESTORATIVNU STOMATOLOŠKU NEGU ZA CELU PORODICU.
        </p>
          <ul>
            <li>PROFILAKSA(ČIŠĆENJE ZUBA)</li>
            <li>TRETMAN FLUORIDOM</li>
            <li>PLOMBE</li>
            <li>KRUNICE</li>
            <li>MOSTOVI</li>
            <li>RESTAURACIJA ZUBNIH IMPLANTATA</li>
            <li>PROTEZE</li>
            <li>ČIŠĆENJE KANALA</li>
          </ul>
        </div>
      </div>
      <div className="smilecare-img">
      <Image 
          src='/smileCare.jpg'
          alt='osmeh nakon nege zuba kod zubara'
          width={800}
          height={800}
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
    </div>
  );
}

export default SmileCare;
