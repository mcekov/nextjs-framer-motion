import todoIcon from "../../public/assets/img/icon-todo.svg";
import calendarIcon from "../../public/assets/img/icon-calendar.svg";
import remainderIcon from "../../public/assets/img/icon-reminders.svg";
import planingIcon from "../../public/assets/img/icon-planning.svg";

export const images = [
  {
    id: "qwe12341234123",
    imgSrc: "/assets/img/scroller_images/image-1.jpg",
    alt: "Image 1",
  },
  {
    id: "qwe134454553423",
    imgSrc: "/assets/img/scroller_images/image-2.jpg",
    alt: "Image 2",
  },
  {
    id: "qwe123345345345789123",
    imgSrc: "/assets/img/scroller_images/image-3.jpg",
    alt: "Image 3",
  },
  {
    id: "qwe12334rwer5345345789123",
    imgSrc: "/assets/img/scroller_images/image-4.jpg",
    alt: "Image 4",
  },
  {
    id: "qwe12334534534345345tdfgd5789123",
    imgSrc: "/assets/img/scroller_images/image-5.jpg",
    alt: "Image 5",
  },
  {
    id: "qwe123345345345789345123",
    imgSrc: "/assets/img/scroller_images/image-6.jpg",
    alt: "Image 6",
  },
  {
    id: "qwe12334rwer5345345787545679123",
    imgSrc: "/assets/img/scroller_images/image-7.jpg",
    alt: "Image 7",
  },
  {
    id: "qwe12334534534345345tdfgd57896643677123",
    imgSrc: "/assets/img/scroller_images/image-8.jpg",
    alt: "Image 8",
  },
];

export const navItems = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Reveal Links",
        link: "/reveal-links",
        iconImage: todoIcon,
      },
      {
        label: "Carousel",
        link: "/carousel",
        iconImage: calendarIcon,
      },
      {
        label: "Heroes",
        link: "/themed-hero",
        iconImage: remainderIcon,
      },
      {
        label: "Parallax",
        link: "/parallax",
        iconImage: planingIcon,
      },
      {
        label: "Animated Border",
        link: "/border",
        iconImage: planingIcon,
      },
    ],
  },
  {
    label: "Company",
    link: "/company",
    children: [
      {
        label: "History",
        link: "/history",
        iconImage: "",
      },
      {
        label: "Our team",
        link: "/team",
        iconImage: "",
      },
      {
        label: "Blog",
        link: "/blog",
        iconImage: "",
      },
    ],
  },
  {
    label: "About us",
    link: "/about-us",
  },
  {
    label: "Contact",
    link: "/contact",
  },
];
