import { toast } from 'react-toastify';

// import {
//   lightTheme,
//   setTheme,
// } from 'tui__theme/index.js';

export const toastSuccess = (text = "Success") => {
  toast.success(text, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const toastError = (text = "something went wrong") => {
  toast.error(text, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

/*=============================================
=            theme                           =
=============================================*/

// let theme = localStorage.getItem("lg2__theme");
// let globalThemeDark: boolean;
// if (theme == "dark") {
//   globalThemeDark = true;
//   setTheme();
//   // themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
// } else if (theme == "light") {
//   globalThemeDark = false;
//   setTheme({ theme: lightTheme });
//   // themeSwitch.setAttribute("src", "/assets/svgs/moon.svg");
// } else {
//   globalThemeDark = true;
//   setTheme();
//   localStorage.setItem("lg2__theme", "dark");
//   // themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
// }
// const themeSwitcher = () => {
//   if (globalThemeDark) {
//     setTheme({ theme: lightTheme });
//     localStorage.setItem("lg2__theme", "light");
//     // themeSwitch.setAttribute("src", "/assets/svgs/moon.svg");
//   } else {
//     setTheme();
//     localStorage.setItem("lg2__theme", "dark");
//     // themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
//   }
//   globalThemeDark = !globalThemeDark;
//   //   console.log(globalThemeDark);
// };

/*=====  End of theme  ======*/
