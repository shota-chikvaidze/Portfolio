import { Howl } from "howler";

export const sounds = {
  click: new Howl({ src: ["../../public/sounds/cardclick.mp3"], volume: 0.1 }),
  hover: new Howl({ src: ["../../public/sounds/hover.mp3"], volume: 0.1 }),
  openLink: new Howl({ src: ["../../public/sounds/openlink.mp3"], volume: 0.1 }),
  openCard: new Howl({ src: ["../../public/sounds/opencard.mp3"], volume: 0.1 }),
  cardHover: new Howl({ src: ["../../public/sounds/cardhover.mp3"], volume: 0.1 }),
  closeCard: new Howl({ src: ["../../public/sounds/closecard.mp3"], volume: 0.1 }),
  cardClick: new Howl({ src: ["../../public/sounds/cardclick.mp3"], volume: 0.1 }),
};

export const play = (name) => {
  const s = sounds[name];
  if (!s) return;
  s.stop();
  s.play();
};