import Link from "next/link";
import React, { useRef, useState } from "react";

function ArticlesArticles() {

  const artArray = [
    {
      id: "Habits",
      texth1: "PET SVAKODNEVNIH NAVIKA KOJE OŠTEĆUJU VAŠE ZUBE",
      textp:
        "Naši zubi igraju ključnu ulogu u našim životima. Pomažu nam da žvaćemo i varimo hranu i razgovaramo jasno. Oni takođe doprinose našem izgledu. Zdravi zubi takođe pomažu u sprečavanju mnogih zdravstvenih stanja kao što su bolesti srca i dijabetes. Međutim,prema istraživanjima, skoro 20 odsto odraslih starijih od 65 godina izgubilo je sve zube.",
      url: "/smeh.jpg",
    },
    {
      id: "Benefits",
      texth1: "NAJVEĆE PREDNOSTI BELIH ZUBA",
      textp:
        "ZA SVE VIŠE LJUDI IZBJELJIVANJE ZUBA POSTALO JE POTREBA, POTREBA KOJA IM POMAŽE DA IZGLEDAJU I DA SE OSEĆAJU BOLJE. KUDA GOD POGLEDATE, OD SLIKA IZ ČASOPISA DO VAŠEG INSTAGRAMA, PRIMEĆUJETE VELIKU VAŽNOST DA IMATE ČISTE, BELE ZUBE.",
      url: "/smeh.jpg",
    },
    {
      id: "Whitening",
      texth1: "Izbeljivanje zuba",
      textp: "Izbeljivanje zuba je postupak koji se obično obavlja u stomatološkoj ordinaciji i uključuje korišćenje laserskog ili LED svetla da bi se aktivirao izbeljivač. Ovaj postupak je efikasniji od kućnog izbeljivanja, ali je i skuplji.",
      url: "/smeh.jpg",
    },
    {
      id: "Paradentoza",
      texth1: "Paradentoza",
      textp: "Parodontoza je bolest koja utiče na tkiva oko zuba, uključujući desni, vezivno tkivo koje povezuje zub sa čeljusti (parodont) i koren zuba. Ova bolest se obično razvija postepeno i može dovesti do gubitka zuba ako se ne leči na vreme.",
      url: "/smeh.jpg",
    },
    {
      id: "Implants",
      texth1: "Zubni Implanti",
      textp: "Zubni implantati su stalni zubni nadomjestci koji se ugrađuju u tijelo kao zamjena za izgubljene ili uklonjene zube.Obično se koriste za zamjenu pojedinačnih izgubljenih zuba, ali također se mogu koristiti i za zamjenu višestrukih zuba ili čak cijelih gornjih ili donjih redova zuba",
      url: "/smeh.jpg",
    },
    {
      id: "SinusLift",
      texth1: "Sinus Lift",
      textp: "Sinus lift ili sinus augmentacija je hirurški zahvat koji se izvodi kada se pacijentu želi ugraditi zubni implantat u prednjem dijelu gornje čeljusti, ali nema dovoljno kosti da bi se implantat ugradio. Ova procedura se obično izvodi kada je sinus maksilaris, šupljina ispod očiju, previsoko i blizu površine zuba, što otežava ugradnju implantata.",
      url: "/smeh.jpg",
    },
    {
      id: "VestackaKost",
      texth1: "Vestacka kost",
      textp: "Veštačka kost se često koristi u stomatologiji za zamjenu ili regeneraciju kosti u vilici.Posle vađenja zuba neminovno dolazi do gubitka kosti.Nakon nekog vremena nećemo više imati dovoljno kosti u koju možemo da ugradimo implant.",
      url: "/smeh.jpg",
    },
    {
      id: "FiksnaProteza",
      texth1: "Fiksna Proteza",
      textp: "Fiksna proteza za ispravljanje zuba je umjetni zubni nakit koji se stavlja na postojeće zube ili implantate kako bi se popravio izgled i funkcija zuba. Fiksna proteza se obično sastoji od više zuba koji su povezani zajedno i učvršćeni za zube ili implantate pomoću cementa ili nekog drugog ljepila.",
      url: "/smeh.jpg",
    },
    {
      id: "Apikotomija",
      texth1: "Apikotomija",
      textp: "Apikotomija je hirurška procedura koja se obično sprovodi na korijenu zuba kako bi se uklonio oštećeni dio korijena. Cilj ove procedure je da se spasi zub i da se izbjegne potreba za uklanjanjem zuba.Apikotomija se obično sprovodi kada je korijen zuba oštećen ili inficiran.",
      url: "/smeh.jpg",
    },
    {
      id: "Frenulektomija",
      texth1: "Frenulektomija",
      textp: "Frenulektomija je hirurška procedura koja se sprovodi kako bi se uklonio mali živčani snop (frenulum) koji se nalazi na donjem dijelu usne šupljine. Frenulum je mali snop mišića koji spaja neka tkiva ili organe na određenom mjestu u tijelu.",
      url: "/smeh.jpg",
    },
    {
      id: "Desni",
      texth1: "Povlačenje desni",
      textp: "Povlačenje desni se obično događa kada se gornje ili donje desna povuku prema unutra, prema ždrijelu. To se može dogoditi zbog različitih razloga.Ono može da zahvati jedan zub ili, u nekim slučajevima, sve zube.Vrlo često, mogu biti crvene, upaljene, otečene i da na dodir krvare. ",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "99999sdwa",
      textp: "444444444444444444",
      url: "/smeh.jpg",
    },

  ];

  return (
    <div className="articles-container">
      
      {artArray.map((art) => {
          return (
            <Link
              href={"/Articles/" + art.id} target="_blank"
              key={art.texth1}
              className="articles-box"
              style={{ backgroundImage: `url(${art.url})` }}
            >
              <div className="articles-text">
                <h1>{art.texth1}</h1>
                <p>{art.textp}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ArticlesArticles;