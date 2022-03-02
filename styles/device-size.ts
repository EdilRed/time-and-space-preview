export const SIZE = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export const BREAKPOINTS = {
  mobileS: `only screen and (max-width: ${SIZE.mobileS}px)`,
  mobileM: `only screen and (max-width: ${SIZE.mobileM}px)`,
  mobileL: `only screen and (max-width: ${SIZE.mobileL}px)`,
  tablet: `only screen and (max-width: ${SIZE.tablet}px)`,
  laptop: `only screen and (max-width: ${SIZE.laptop}px)`,
  laptopL: `only screen and (max-width: ${SIZE.laptopL}px)`,
  desktop: `only screen and (max-width: ${SIZE.desktop}px)`,
  desktopL: `only screen and (max-width: ${SIZE.desktop}px)`,
}
