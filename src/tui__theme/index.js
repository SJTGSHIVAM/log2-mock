export const lightTheme = {
  "--tui-theme-primary-col": "var(--primary-col)",
  "--tui-theme-secondary-col": "var(--secondary-col)",
  "--tui-theme-dark": "var(--white)",
  "--tui-theme-dark-light": "var(--white-dark)",
  "--tui-theme-gray": "var(--gray-light)",
  "--tui-theme-gray-light": "var(--gray)",
  "--tui-theme-white": "var(--dark)",
  "--tui-theme-white-dark": "var(--dark-light)",
  "--tui-theme-green": "var(--green)",
  "--tui-theme-green-light": "var(--green-light)",
  "--tui-theme-red": "var(--red)",
  "--tui-theme-red-light": "var(--red-light)",
  "--tui-theme-yellow": "var(--yellow)",
  "--tui-theme-yellow-light": "var(--yellow-light)",
  "--tui-theme-blue": "var(--blue)",
  "--tui-theme-blue-light": "var(--blue-light)",
  "--tui-theme-primary-col-fil": "var(--primary-col-fil)",
  "--tui-theme-secondary-col-fil": "var(--secondary-col-fil)",
  "--tui-theme-dark-fil": "var(--white-fil)",
  "--tui-theme-dark-ligt-fil": "var(--white-light-fil)",
  "--tui-theme-gray-fil": "var(--gray-light-fil)",
  "--tui-theme-gray-light-fil": "var(--gray-fil)",
  "--tui-theme-white-dark-fil": "var(--dark-dark-fil)",
  "--tui-theme-white-fil": "var(--dark-fil)",
};

export const themeFields = [
  "--tui-theme-primary-col",
  "--tui-theme-secondary-col",
  "--tui-theme-dark",
  "--tui-theme-dark-light",
  "--tui-theme-gray",
  "--tui-theme-gray-light",
  "--tui-theme-white",
  "--tui-theme-white-dark",
  "--tui-theme-green",
  "--tui-theme-green-light",
  "--tui-theme-red",
  "--tui-theme-red-light",
  "--tui-theme-yellow",
  "--tui-theme-yellow-light",
  "--tui-theme-blue",
  "--tui-theme-blue-light",
  "--tui-theme-primary-col-fil",
  "--tui-theme-secondary-col-fil",
  "--tui-theme-dark-fil",
  "--tui-theme-dark-ligt-fil",
  "--tui-theme-gray-fil",
  "--tui-theme-gray-light-fil",
  "--tui-theme-white-dark-fil",
  "--tui-theme-white-fil",
];

export function setTheme({ theme, themeField = themeFields } = {}) {
  themeField.map((property) => {
    theme && theme[property]
      ? document.documentElement.style.setProperty(property, theme[property])
      : document.documentElement.style.setProperty(property, "");
  });
}
