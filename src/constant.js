

export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
    subRoutes: [
      {
        name: "Pomodoro",
        link: "/services/pomodoro",
      },
      {
        name: "Short Break",
        link: "/services/short-break",
      },
      {
        name: "Long Break",
        link: "/services/long-break",
      },
    ],
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];
