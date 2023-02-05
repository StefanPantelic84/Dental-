import Link from "next/link";
import React, { useRef, useState } from "react";

function ArticlesArticles() {

  const artArray = [
    {
      id: "Habits",
      texth1: "PET NAVIKA KOJE OŠTEĆUJU VAŠE ZUBE",
      textp:
        "Naši zubi igraju ključnu ulogu u našim životima. Pomažu nam da žvaćemo i varimo hranu i razgovaramo jasno. Oni takođe doprinose našem izgledu. Zdravi zubi takođe pomažu u sprečavanju mnogih zdravstvenih stanja kao što su bolesti srca i dijabetes.",
      url: "/habits.webp",
    },
    {
      id: "Benefits",
      texth1: "NAJVEĆE PREDNOSTI BELIH ZUBA",
      textp:
        "ZA SVE VIŠE LJUDI IZBJELJIVANJE ZUBA POSTALO JE POTREBA, POTREBA KOJA IM POMAŽE DA IZGLEDAJU I DA SE OSEĆAJU BOLJE. KUDA GOD POGLEDATE, OD SLIKA IZ ČASOPISA DO VAŠEG INSTAGRAMA, PRIMEĆUJETE VELIKU VAŽNOST DA IMATE ČISTE, BELE ZUBE.",
      url: "/whiteTheeth.webp",
    },
    {
      id: "Whitening",
      texth1: "Izbeljivanje zuba",
      textp: "Izbeljivanje zuba je postupak koji se obično obavlja u stomatološkoj ordinaciji i uključuje korišćenje laserskog ili LED svetla da bi se aktivirao izbeljivač. Ovaj postupak je efikasniji od kućnog izbeljivanja, ali je i skuplji.",
      url: "/whitee.webp",
    },
    {
      id: "Paradentoza",
      texth1: "Paradentoza",
      textp: "Parodontoza je bolest koja utiče na tkiva oko zuba, uključujući desni, vezivno tkivo koje povezuje zub sa čeljusti (parodont) i koren zuba. Ova bolest se obično razvija postepeno i može dovesti do gubitka zuba ako se ne leči na vreme.",
      url: "/paradentoza.webp",
    },
    {
      id: "Implants",
      texth1: "Zubni Implanti",
      textp: "Zubni implantati su stalni zubni nadomjestci koji se ugrađuju u tijelo kao zamjena za izgubljene ili uklonjene zube.Obično se koriste za zamjenu pojedinačnih izgubljenih zuba, ali također se mogu koristiti i za zamjenu višestrukih zuba ili čak cijelih gornjih ili donjih redova zuba.",
      url: "/implant.webp",
    },
    {
      id: "SinusLift",
      texth1: "Sinus Lift",
      textp: "Sinus lift ili sinus augmentacija je hirurški zahvat koji se izvodi kada se pacijentu želi ugraditi zubni implantat u prednjem dijelu gornje čeljusti, ali nema dovoljno kosti da bi se implantat ugradio. Ova procedura se obično izvodi kada je sinus maksilaris, šupljina ispod očiju, previsoko i blizu površine zuba, što otežava ugradnju implantata.",
      url: "/lift.webp",
    },
    {
      id: "VestackaKost",
      texth1: "Vestacka kost",
      textp: "Veštačka kost se često koristi u stomatologiji za zamjenu ili regeneraciju kosti u vilici.Posle vađenja zuba neminovno dolazi do gubitka kosti.Nakon nekog vremena nećemo više imati dovoljno kosti u koju možemo da ugradimo implant.",
      url: "/kost.webp",
    },
    {
      id: "FiksnaProteza",
      texth1: "Fiksna Proteza",
      textp: "Fiksna proteza za ispravljanje zuba je umjetni zubni nakit koji se stavlja na postojeće zube ili implantate kako bi se popravio izgled i funkcija zuba. Fiksna proteza se obično sastoji od više zuba koji su povezani zajedno i učvršćeni za zube ili implantate pomoću cementa ili nekog drugog ljepila.",
      url: "/proteza.webp",
    },
    {
      id: "Apikotomija",
      texth1: "Apikotomija",
      textp: "Apikotomija je hirurška procedura koja se obično sprovodi na korijenu zuba kako bi se uklonio oštećeni dio korijena. Cilj ove procedure je da se spasi zub i da se izbjegne potreba za uklanjanjem zuba.Apikotomija se obično sprovodi kada je korijen zuba oštećen ili inficiran.",
      url: "/resica.webp",
    },
    {
      id: "Frenulektomija",
      texth1: "Frenulektomija",
      textp: "Frenulektomija je hirurška procedura koja se sprovodi kako bi se uklonio mali živčani snop (frenulum) koji se nalazi na donjem dijelu usne šupljine. Frenulum je mali snop mišića koji spaja neka tkiva ili organe na određenom mjestu u tijelu.",
      url: "/frenu.webp",
    },
    {
      id: "Desni",
      texth1: "Povlačenje desni",
      textp: "Povlačenje desni se obično događa kada se gornje ili donje desna povuku prema unutra, prema ždrijelu. To se može dogoditi zbog različitih razloga.Ono može da zahvati jedan zub ili, u nekim slučajevima, sve zube.Vrlo često, mogu biti crvene, upaljene, otečene i da na dodir krvare. ",
      url: "/desni.webp",
    },
    {
      id: "Kamenac",
      texth1: "Zubni Kamenac",
      textp: "Zubni kamenac su naslage na zubima koje se sastoje od mikroskopskih čestica minerala. One najčešće nastaju od kalcija i fosfata u kombinaciji sa bakterijama i mogu se pojaviti na zubnim krunicama, ispod gumline i u interdentalnim prostorima.Može dovesti do problema sa zubima i desnima.",
      url: "/kamenac.webp",
    },
    {
      id: "Kiretaza",
      texth1: "Kiretaža",
      textp: "Kiretaža je parodontološki postupak kojim se usklanjaju naslage koje su se godinama taložile ispod desni na zubu.Ove naslage mogu napraviti ogroman problem jer stvaraju kamenac. Zubni kamenac je odlično tlo za stvaranje bakterija koje uzrokuju upalu, gubitak koštane mase i, naravno, gubitak celog zuba.",
      url: "/kiretaza.webp",
    },
    {
      id: "Splint",
      texth1: "Splint",
      textp: "Splint je dentalni aparat koji se koristi za liječenje bruksizma. Bruksizam je stanje u kojem se pacijentovi zubi stresuju, škripe ili zgnječe, najčešće noću dok spavaju. Ovo ponašanje može dovesti do oštećenja zuba i desni, kao i bolova u vilicama i vratu.",
      url: "/splint.webp",
    },

  ];

  return (
    <div className="articles-container">
      
      {artArray.map((art) => {
          return (
            <Link
              href={"/Articles/" + art.id}
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
