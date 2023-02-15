let scores = [
  [
    "Puck(NIJMEGEN)",
    5,
    5,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.9748590714853!2d5.8591428157823335!3d51.84315487969163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c709433d74d021%3A0x5e881f78d23d6d73!2sPUCK%20specialty%20coffee!5e0!3m2!1snl!2sde!4v1675537983954!5m2!1snl!2sde",
  ],
  [
    "Hotel Credible(NIJMEGEN)",
    3,
    0,
    4,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.798593166528!2d5.864710672611976!3d51.846373928529076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7084583d21fc1%3A0x9b608da7c1406308!2sHotel%20Credible!5e0!3m2!1snl!2sde!4v1675538864502!5m2!1snl!2sde",
  ],
  [
    "Bairro Alto(NIJMEGEN)",
    3,
    0,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.798593166528!2d5.864710672611976!3d51.846373928529076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c708440b7d9793%3A0xedf8adf8e5742c0e!2sBairro%20Alto!5e0!3m2!1snl!2sde!4v1675538894926!5m2!1snl!2sde",
  ],
  [
    "Downtown (NIJMEGEN)",
    3,
    0,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.71204858043!2d5.861624851794782!3d51.847954393466196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c708440cb86217%3A0xa8a5db3ec8df3630!2sDOWN%20TOWN!5e0!3m2!1snl!2sde!4v1675538913979!5m2!1snl!2sde",
  ],
  [
    "Puck(ARNHEM)",
    5,
    0,
    4,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2457.408117325066!2d5.909188551797648!3d51.98121468366928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7a5b5324af635%3A0x843d2484810fdffa!2sNieuwstad%202%2C%206811%20BL%20Arnhem%2C%20Nederland!5e0!3m2!1snl!2sde!4v1675538825550!5m2!1snl!2sde",
  ],
  [
    "Café Solo(KLEVE)",
    1,
    2,
    4,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.9742347647103!2d6.138567938818967!3d51.78976978764245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c776a79d0009e7%3A0xb4e15368738c7181!2sCafe%20Solo%20Kleve!5e0!3m2!1snl!2sde!4v1675539510662!5m2!1snl!2sde",
  ],
  [
    "Die Koffie Kompanie GmbH(KLEVE)",
    3,
    3,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d308.4885734170506!2d6.138601333495992!3d51.78955690050456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c777c9c4dc2a27%3A0x773e795f655daf93!2sDie%20Koffie%20Kompanie%20GmbH!5e0!3m2!1snl!2sde!4v1675539562232!5m2!1snl!2sde",
  ],
  [
    "Sprout Coffee Roasters(EINDHOVEN)",
    4,
    5,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.082638227617!2d5.486803516312891!3d51.43827622357508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d994abb053d1%3A0x851f30b7bbf0302e!2sSprout%20Coffee%20Roasters!5e0!3m2!1snl!2sde!4v1675540327088!5m2!1snl!2sde",
  ],
  [
    "Drupa Coffee Roasters(AMSTERDAM)",
    4,
    5,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.5754673848687!2d4.881125516330951!3d52.378117454485924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609cffe505ed1%3A0x97d808325cd9468a!2sDrupa%20Coffee%20Roasters!5e0!3m2!1snl!2sde!4v1675539778696!5m2!1snl!2sde",
  ],
  [
    "Manufact Coffee Roasters(HAMBURG)",
    4,
    3,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.884762279301!2d9.964876951832215!3d53.55982456630182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18fea6fbbc66f%3A0xa0f0107513961b6d!2sManufact%20Coffee%20Roasters!5e0!3m2!1snl!2sde!4v1675539950434!5m2!1snl!2sde",
  ],
  [
    "blooming coffee roastery & coffee-bar(KÖLN)",
    4,
    4,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.4377521189363!2d6.950116151775239!3d50.93411696017584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf257ee6eb7281%3A0x4989601b59bc00e1!2sblooming%20coffee%20roastery%20%26%20coffee-bar!5e0!3m2!1snl!2sde!4v1675538936966!5m2!1snl!2sde",
  ],
  [
    "Ernst Kaffeeröster(KÖLN)",
    5,
    4,
    5,
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40244.919780061704!2d6.960376125018023!3d50.91802874735761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf244642c7bc5f%3A0xf10ca03d5821bb94!2sErnst%20Kaffeer%C3%B6ster!5e0!3m2!1snl!2sde!4v1675540159709!5m2!1snl!2sde",
  ],
];

let grid = document.querySelector("#coffee-grid");
for (let score of scores) {
  let elements = buildScoreRow(score);
  for (let element of elements) {
    grid.appendChild(element);
  }
}

function buildScoreRow(score) {
  let placeElement = document.createElement("div");
  placeElement.classList.add("grid-item");
  placeElement.setAttribute("href", score[4]);
  placeElement.innerHTML += `<a href=${score[4]} target="myiframe">${score[0]}</a>`;
  let stfnzElement = buildScore(score[1]);
  let companionElement = buildScore(score[2]);
  let googleElement = buildScore(score[3]);

  return [placeElement, stfnzElement, companionElement, googleElement];
}

function buildScore(score) {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  let enabledcoffee = document.createElement("img");
  enabledcoffee.classList.add("enabled");
  enabledcoffee.src = "img/coffee-light-32.png";
  let disabledcoffee = document.createElement("img");
  disabledcoffee.classList.add("disabled");
  disabledcoffee.src = "img/coffee-dark-32.png";
  for (let i = 0; i < 5; i++) {
    if (score > i) {
      gridItem.appendChild(enabledcoffee.cloneNode());
    } else {
      gridItem.appendChild(disabledcoffee.cloneNode());
    }
  }

  return gridItem;
}
