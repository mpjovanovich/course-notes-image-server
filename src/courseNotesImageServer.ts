const NEVER_USED_DATE = new Date("1900-01-01").toISOString();

const images = [
  {
    src: "https://as2.ftcdn.net/v2/jpg/05/49/70/05/1000_F_549700511_HTmXBL6Uqhgc2B6PlzCvsxLoC5kvje4s.jpg",
    alt: "Nature image",
    lastUsed: NEVER_USED_DATE,
  },
  {
    src: "https://wallpapers.com/images/high/samurai-jack-pink-vector-art-6ttd2h971c0ivqyh.webp",
    alt: "Samurai Jack",
    lastUsed: NEVER_USED_DATE,
  },
  {
    src: "https://i.pinimg.com/736x/f3/69/40/f36940c4fa69871b1f1b0e27e430a9b1.jpg",
    alt: "Palm trees",
    lastUsed: NEVER_USED_DATE,
  },
];

console.log("image0", images[0]);
console.log("image1", images[1]);
