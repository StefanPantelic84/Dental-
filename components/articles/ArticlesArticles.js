import Link from "next/link";
import React, { useRef, useState } from "react";

function ArticlesArticles() {
  const [displayArray, setDisplayArray] = useState(1);
  const articleRef = useRef();
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 110,
      behavior: "smooth",
    });
  };
  const previousPage = () => {
    if (displayArray > 1) {
      setDisplayArray(displayArray - 1);
      scrollToSection(articleRef);
    } else {
      setDisplayArray(3);
      scrollToSection(articleRef);
    }
  };

  console.log(displayArray);

  const nextPage = () => {
    if (displayArray < 3) {
      setDisplayArray(displayArray + 1);
      scrollToSection(articleRef);
    } else {
      setDisplayArray(1);
      scrollToSection(articleRef);
    }
  };

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
      texth1: "3332233ddadwa333sgrgr",
      textp: "33333333333333",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "44d444444sgr",
      textp: "444444444444444444",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "55555555sf",
      textp: "5555555555555555",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "666awdad66sd",
      textp: "666666666666",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "7dwada777sdaw",
      textp: "777777777777777",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "8dawdwa8sewe",
      textp: "888888888888",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "9999sewew",
      textp: "1111111111111111111",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "99999sew",
      textp: "2222222222222222222222222",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "9999sda",
      textp: "33333333333333",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "99999sdwa",
      textp: "444444444444444444",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "1111111sdaw",
      textp: "1111111111111111111",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "22222222222222sdwa",
      textp: "2222222222222222222222222",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "3332233ddadwa333sdaw",
      textp: "33333333333333",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "44d444444sdw",
      textp: "444444444444444444",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "55555555sas",
      textp: "5555555555555555",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "666awdad66ss",
      textp: "666666666666",
      url: "/smeh.jpg",
    },
    {
      id: "Habits",
      texth1: "1111111sas",
      textp: "1111111111111111111",
      url: "/smeh.jpg",
    },
    {
      texth1: "2222222222222222sas",
      textp: "2222222222222222222222222",
      url: "/smeh.jpg",
    },
    {
      texth1: "3332233ddadwada333s",
      textp: "33333333333333",
      url: "/smeh.jpg",
    },
    {
      texth1: "44d444444sf",
      textp: "444444444444444444",
      url: "/smeh.jpg",
    },
    {
      texth1: "55555555sf",
      textp: "5555555555555555",
      url: "/smeh.jpg",
    },
    {
      texth1: "666awdad66sf",
      textp: "666666666666",
      url: "/smeh.jpg",
    },
  ];

  return (
    <div className="articles-container" ref={articleRef}>
      {displayArray == 1 &&
        artArray.slice(0, 8).map((art) => {
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
      {displayArray == 2 &&
        artArray.slice(8, 16).map((art) => {
          return (
            <div
              key={art.texth1}
              className="articles-box"
              style={{ backgroundImage: `url(${art.url})` }}
            >
              <div className="articles-text">
                <h1>{art.texth1}</h1>
                <p>{art.textp}</p>
              </div>
            </div>
          );
        })}
      {displayArray == 3 &&
        artArray.slice(16, 24).map((art) => {
          return (
            <div
              onClick={() => {}}
              key={art.texth1}
              className="articles-box"
              style={{ backgroundImage: `url(${art.url})` }}
            >
              <div className="articles-text">
                <h1>{art.texth1}</h1>
                <p>{art.textp}</p>
              </div>
            </div>
          );
        })}
      <div className="arrows">
        <div onClick={previousPage} className="articles-previous">
          <a>{"< prethodna"}</a>
        </div>
        <div onClick={nextPage} className="articles-next">
          <a>{"sledeca >"}</a>
        </div>
      </div>
    </div>
  );
}

export default ArticlesArticles;
