// Waffle
import waffleThumb from "./assets/images/image-waffle-thumbnail.jpg";
import waffleMobile from "./assets/images/image-waffle-mobile.jpg";
import waffleTablet from "./assets/images/image-waffle-tablet.jpg";
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";

// Crème Brûlée
import cremeThumb from "./assets/images/image-creme-brulee-thumbnail.jpg";
import cremeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import cremeTablet from "./assets/images/image-creme-brulee-tablet.jpg";
import cremeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";

// Macaron
import macaronThumb from "./assets/images/image-macaron-thumbnail.jpg";
import macaronMobile from "./assets/images/image-macaron-mobile.jpg";
import macaronTablet from "./assets/images/image-macaron-tablet.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";

// Tiramisu
import tiramisuThumb from "./assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import tiramisuTablet from "./assets/images/image-tiramisu-tablet.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";

// Baklava
import baklavaThumb from "./assets/images/image-baklava-thumbnail.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import baklavaTablet from "./assets/images/image-baklava-tablet.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";

// Pie
import pieThumb from "./assets/images/image-meringue-thumbnail.jpg";
import pieMobile from "./assets/images/image-meringue-mobile.jpg";
import pieTablet from "./assets/images/image-meringue-tablet.jpg";
import pieDesktop from "./assets/images/image-meringue-desktop.jpg";

// Cake
import cakeThumb from "./assets/images/image-cake-thumbnail.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import cakeTablet from "./assets/images/image-cake-tablet.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";

// Brownie
import brownieThumb from "./assets/images/image-brownie-thumbnail.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import brownieTablet from "./assets/images/image-brownie-tablet.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";

// Panna Cotta
import pannaThumb from "./assets/images/image-panna-cotta-thumbnail.jpg";
import pannaMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import pannaTablet from "./assets/images/image-panna-cotta-tablet.jpg";
import pannaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";

export interface Product {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

const products: Product[] = [
  {
    image: { thumbnail: waffleThumb, mobile: waffleMobile, tablet: waffleTablet, desktop: waffleDesktop },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5
  },
  {
    image: { thumbnail: cremeThumb, mobile: cremeMobile, tablet: cremeTablet, desktop: cremeDesktop },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0
  },
  {
    image: { thumbnail: macaronThumb, mobile: macaronMobile, tablet: macaronTablet, desktop: macaronDesktop },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0
  },
  {
    image: { thumbnail: tiramisuThumb, mobile: tiramisuMobile, tablet: tiramisuTablet, desktop: tiramisuDesktop },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5
  },
  {
    image: { thumbnail: baklavaThumb, mobile: baklavaMobile, tablet: baklavaTablet, desktop: baklavaDesktop },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0
  },
  {
    image: { thumbnail: pieThumb, mobile: pieMobile, tablet: pieTablet, desktop: pieDesktop },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0
  },
  {
    image: { thumbnail: cakeThumb, mobile: cakeMobile, tablet: cakeTablet, desktop: cakeDesktop },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5
  },
  {
    image: { thumbnail: brownieThumb, mobile: brownieMobile, tablet: brownieTablet, desktop: brownieDesktop },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.0
  },
  {
    image: { thumbnail: pannaThumb, mobile: pannaMobile, tablet: pannaTablet, desktop: pannaDesktop },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5
  }
];

export default products;
