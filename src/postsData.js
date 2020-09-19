import { shuffleArray } from "./utils";

export const postsCategories = ["music", "movie", "autumn", "animals", "it", "auto"];

export const postsData = {
  "music": {
    "highEnergy": {
      "id": "-iZDR7bRKXcMdAZt9JqE-",
      "category": "music",
      "mood": "highEnergy",
      "preview": "https://cdn.photosight.ru/img/f/a9a/5315298_xlarge.jpg",
      "content": "Класс! Давно не видел таких талантливых уличных музыкантов, ребята играли Nirvana, Joy Division и другую годную музыку! Поддержал ребят морально и материально, и с крутым настроением пошел на работу ^^)"
    },
    "lowEnergy": {
      "id": "b4huYDpS5MSE6ncLiEbvF",
      "category": "music",
      "mood": "lowEnergy",
      "preview": "https://www.omfil.ru/upload/news_16/%D0%A1%D0%B8%D0%BC%D1%84%D0%BE%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BE%D1%80%D0%BA%D0%B5%D1%81%D1%82%D1%80_1.jpg",
      "content": "Обожаю слушать подборки классической музыки на ютубе"
    },
    "neutral": {
      "id": "N56-UC1KgNYGfEln-rEOP",
      "category": "music",
      "mood": "neutral",
      "preview": "https://i.ytimg.com/vi/Du-rh2EY948/maxresdefault.jpg",
      "content": "Не понимаю, почему приход спотифай в РФ, считают чем-то особенным"
    },
    "negative": {
      "id": "jB5K-q2YP41l_gE67ADQM",
      "category": "music",
      "mood": "negative",
      "preview": "https://pbs.twimg.com/media/DSWwc9sXcAALA0u.jpg:large",
      "content": "Объясните, как вы вообще можете слушать рэп? Это же говно а не музыка!"
    },
    "positive": {
      "id": "ipQRKcWzgKkOWIoavHK0I",
      "category": "music",
      "mood": "positive",
      "preview": "https://i.ytimg.com/vi/O5WKd_d9Iuw/maxresdefault.jpg",
      "content": "Очень веселый басист) Сидит в чат-рулетке и играет по заявкам собеседников"
    }
  },
  "movie": {
    "highEnergy": {
      "id": "9wneA1YExLnXdKj6_symj",
      "category": "movie",
      "mood": "highEnergy",
      "preview": "https://media.kg-portal.ru/production/avengers4/avengers4_37.jpg",
      "content": "Был с мамой в кино на мстителях! Очень крутая концовка, MARVEL Топ!"
    },
    "lowEnergy": {
      "id": "OJtAD8OyjsrM5om4Kpm5f",
      "category": "movie",
      "mood": "lowEnergy",
      "preview": "https://funart.pro/uploads/posts/2020-05/1590056732_2-p-moskva-slezam-ne-verit-film-4.jpg",
      "content": "Пересмотрел Москву слезам не верит, фильм на все времена"
    },
    "neutral": {
      "id": "Y6BRrnkJWO9LR2brDd5h4",
      "category": "movie",
      "mood": "neutral",
      "preview": "https://g.foolcdn.com/editorial/images/576307/movie-theater-horror-getty.jpeg",
      "content": "Чтобы посмотреть этим осенним вечером? Накидайте советов пожалуйста"
    },
    "negative": {
      "id": "3JJqHL6g-yoh0NxC3YqCm",
      "category": "movie",
      "mood": "negative",
      "preview": "https://l-files.livejournal.net/og_image/15022095/1490?v=1599294151",
      "content": "Довод как и Джокер очень переоценены. Говно, не советую смотреть"
    },
    "positive": {
      "id": "oXrTdf0tY9UuCF_1boY0r",
      "category": "movie",
      "mood": "positive",
      "preview": "https://ovideo.ru/images/gallery/0001/0129/0002.png",
      "content": "Лол, вспомнил школьные времена и пересмотрел Американский Пирог. Давненько так не ржал)00"
    }
  },
  "autumn": {
    "highEnergy": {
      "id": "FQ4s0Y4TXi3jungckLdDx",
      "category": "autumn",
      "mood": "highEnergy",
      "preview": "https://lifeo.ru/wp-content/uploads/oboi-na-rabochiy-stol-osen-5.jpg",
      "content": "Обожаю осень! Самое кайфовое время года для новых проектов и отложенных планов ^_^"
    },
    "lowEnergy": {
      "id": "TVvKdqj5OEc6OcANECYM7",
      "category": "autumn",
      "mood": "lowEnergy",
      "preview": "http://s3.favim.com/orig/38/autumn-beautiful-blonde-cute-dream-Favim.com-313718.jpg",
      "content": "Сильно устаю на работе, еще и осень за окном, постоянно тянет в сон, а у вас как дела?"
    },
    "neutral": {
      "id": "AEUsYQ_4MFc6-akBEkMvI",
      "category": "autumn",
      "mood": "neutral",
      "preview": "https://photocentra.ru/images/main62/628394_main.jpg",
      "content": "Внезапно уже половина сентября за плечами"
    },
    "negative": {
      "id": "xnuOYZHfC1pTKh_kITcDj",
      "category": "autumn",
      "mood": "negative",
      "preview": "https://b.radikal.ru/b20/1811/e4/fe2d96f50bf2.jpg",
      "content": "Брр, нелюблю осень, сегодня утром ужасно замерз пока шел на работу, наверное первые заморозки ударили"
    },
    "positive": {
      "id": "cQW5CkN1FUMjhlNW_6lCl",
      "category": "autumn",
      "mood": "positive",
      "preview": "http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkUBZE8XstUDBXfeOk78M836aKTM5SRkZCeTgDn6uOyic",
      "content": "Ходили с девушкой в Сокольники, осенью это одно из самых крутых мест в Москве, также катались на лошадях."
    }
  },
  "animals": {
    "highEnergy": {
      "id": "irnPHvIQ_iftxS0QYcm3Y",
      "category": "animals",
      "mood": "highEnergy",
      "preview": "https://w-dog.ru/wallpapers/16/16/309823773006286/terer-sobaka-trava-myachik.jpg",
      "content": "Первый раз водили Шкуру гулять в парк. Поражаюсь, откуда в такой маленькой собачке столько сил бегать прыгать и гавкать?! :D"
    },
    "lowEnergy": {
      "id": "rr5xq72tFtWXe70eqFz4A",
      "category": "animals",
      "mood": "lowEnergy",
      "preview": "https://www.cbtravel.com/wp-content/uploads/2016/11/52916170_ml.jpg",
      "content": "Едем с Чаком домой, через 3 часа будем на месте, хочется спать"
    },
    "neutral": {
      "id": "1NZ8aPm-8eloB2grT0kwv",
      "category": "animals",
      "mood": "neutral",
      "preview": "https://i1.wallbox.ru/wallpapers/main2/201744/150960884459facd8c79bfb6.10289155.jpg",
      "content": "Как дела кошатники? Может давайте поделимся фотографиями наших любимцев?"
    },
    "negative": {
      "id": "phELpyU-F_FOUlHbKqS2s",
      "category": "animals",
      "mood": "negative",
      "preview": "https://yandex.ru/images/_crpd/9gfP8M401/d137fewnm6/vQMTlz_vSpNih_T5MpIkueFCtl1FfBAqETlLgNLakcI9Xtd_7XBzIhVjVqF-P3G88TjtrTopDpwiXfdTx85ur6tBHY0n6AnBLtbjs0PKJvj_CuQDR31QNEs5DpuA3d3ZJAqOFeswY25HOQvOeTVyo94SzrNNEHP-WimOL9vLY6qoCAfKZdFj0luB4NpVjAm4qXaveUpvC34lMlf9x_Wzuw113GvObn9_dCQnyThOIOv4J9-ddj16zkIolBjs7XmNoQRDz1rCe4d9rO3adbMMmrVTrXhXXxtPBxpewsLNp6IAd8taw31XW0Q2P9I7VSrczCT5l34oa-BSJ6AQydxGpakKR95k-WmBTIr_806XFJujQZZyU18MQSk2SeDf0oq5E1D6ZOhVfFRnGhv7HX8VxMkB3JlqLUvvWh6wE8PcZoG3CEDAQe9ThVuq88domDqyq1ylS3NoK3cpMmrBx9yEvy1x_HDPXEZPbAAj9jptJ8LDKum8XSpU1HoUtjXh-lmHpyRR01P7SbBFqNbPdI4Ogo11olVZfCBACApTy_bmn6ENV-5IwH5dbmU4KPwOcAXd6RXbo146VdZANq0j1dJAuLcYXNJX_Ua3ZqDOxkycL4GKTpN6R3ggYR0tRcz0y4OMA2voZeFWVENtMyzCLH4O0eoF-IRhC0nAYiiJAsfHVJ-BKEfcYt5dm1-W5P9MrQOLq1-2Q0R0KUoLBWvWzc-IrgZO-3rAWEB9XwYE4T5zBcPbCN2gfjhQ6XchqxPk70O_vQZ6wH7kWaNHrvXCaqwTsp9atFxjaRpCFS1y-d7etKUraP1o5GZ2fnEfJekbbwj_6yrHmXwcVcRFCpMw9dBBr5cATexY71udf6zA7XGJE4C-VKZHVF0naTE_XcHlz4adPXnfRPBGQ0ZMNxfSMmIl1uY-6aREAWbjUT6vNejpXaq0NU35UsxamnGu1eVZmhiMrn-tYmtqJlYNMEvr1OY",
      "content": "Я когда-нибудь придушу Персика за то что он ходит в туалет в неположенном месте! >_<"
    },
    "positive": {
      "id": "-pFDxJiaIM589Q_u6qr_S",
      "category": "animals",
      "mood": "positive",
      "preview": "https://avatars.mds.yandex.net/get-pdb/963318/3ed46bd8-27e3-46ab-bf5e-b37bbd9c82b4/s1200",
      "content": "Наш попугайчик Сеня научился говорить \"Тян не нужны\" :D Продолжаем обучение!"
    }
  },
  "it": {
    "highEnergy": {
      "id": "XIK68uK-NBvfopZHMfYEg",
      "category": "it",
      "mood": "highEnergy",
      "preview": "https://sun9-11.userapi.com/DACigwd70BvyJG9V_aLsCWUdGH7lKCoHdKfCAA/cNRcmgPwGlo.jpg",
      "content": "Делаем новое задание Вездекода! Работа кипит!"
    },
    "lowEnergy": {
      "id": "gckJuq2dZ-1JxoDsy667s",
      "category": "it",
      "mood": "lowEnergy",
      "preview": "https://pbs.twimg.com/media/ELGzItwWwAAjmb7.jpg",
      "content": "Кажется я снова выгорел, блевануть хочется от кода >_<"
    },
    "neutral": {
      "id": "9ElzwntNlK7Zo5bZ9vK0_",
      "category": "it",
      "mood": "neutral",
      "preview": "https://habr.com/share/publication/119934/8d98ae166c49ba9b640858c72d1d60c8/?v=1",
      "content": "Как пропатчить  KDE под FreeBSD?"
    },
    "negative": {
      "id": "n1eSoll3bkhbnYx2hrg8v",
      "category": "it",
      "mood": "negative",
      "preview": "https://avatars.mds.yandex.net/get-zen_doc/1101877/pub_5b1b8428a936f40d7c87cc48_5b1b94e13c50f7e2e1f56379/scale_1200",
      "content": "Черт, у меня джун на работе снова прод положил... Третий раз за неделю!"
    },
    "positive": {
      "id": "Z9KqrcIpPYBr9lhuDClde",
      "category": "it",
      "mood": "positive",
      "preview": "https://club-mi.ru/wp-content/uploads/2019/03/xiaomi_redmi_5_plus_3_32_blue_images_2552477375.jpg",
      "content": "Народ, видели новый Xiaomi вышел? Думаю пришло время купить топовый телефон за свои деньги."
    }
  },
  "auto": {
    "highEnergy": {
      "id": "4h7nbR7DecHoPPcvEK9_7",
      "category": "auto",
      "mood": "highEnergy",
      "preview": "https://funart.pro/uploads/posts/2019-10/1570460524_formula-1-10.jpg",
      "content": "Последний Гран При по Формуле 1 просто пушка! Фотофиниш порешал!"
    },
    "lowEnergy": {
      "id": "p0OyErgi-8FESXagB_8_h",
      "category": "auto",
      "mood": "lowEnergy",
      "preview": "https://www.volvotrucks.kz/content/dam/volvo/volvo-trucks/masters/magazine/inside-volvo-vds/VTM3_13_Inside_Volvo_VDS_0_1860x1050.jpg",
      "content": "Блин, снова нужно пьяных друзей из-за города подвозить :("
    },
    "neutral": {
      "id": "nRm9VznCp6-gO-FEP00pq",
      "category": "auto",
      "mood": "neutral",
      "preview": "https://static.tildacdn.com/tild3139-3263-4632-a166-643361346661/Mercedes-Benz-otzove.jpg",
      "content": "Как вам новый Мерс? Стоит покупать или нет?"
    },
    "negative": {
      "id": "QsCcr74V9DaoT5JGMKDYh",
      "category": "auto",
      "mood": "negative",
      "preview": "https://a.d-cd.net/f862f08s-960.jpg",
      "content": "Datsun не машина а ведро с болтами! Второй раз за неделю в автосервисе("
    },
    "positive": {
      "id": "Yb20wseXiJL3v2NOmKUtO",
      "category": "auto",
      "mood": "positive",
      "preview": "https://data.junkee.com/wp-content/uploads/2018/08/pimpmyride.jpg",
      "content": "Cпасибо пацанам из \"Тачка на прокачку\" за то что поставили мне монитор в машину, чтобы я могу следить за пабликом Вездекода прямо за рулем"
    }
  }
}

export const getAllPosts = () => {
  let data = [];
  
  for (let i = 0; i < Object.keys(postsData).length; i++) {
    const key = Object.keys(postsData)[i];
  
    data.push(
      postsData[key]["highEnergy"],
      postsData[key]["lowEnergy"],
      postsData[key]["negative"],
      postsData[key]["positive"]
    );
  }

  data = shuffleArray(data)

  return data;
}


