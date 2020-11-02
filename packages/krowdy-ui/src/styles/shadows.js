const shadowKeyUmbraOpacity     = 0.07
const shadowKeyPenumbraOpacity  = 0.06
const shadowAmbientShadowOpacity = 0.1

function createShadow(...px) {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,39,102,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,39,102,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,39,102,${shadowAmbientShadowOpacity})`
  ].join(',')
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = [
  'none',
  createShadow(0, 1, 2, 0, 0, 3, 4, 0, 0, 0, 0, 0), // 1
  createShadow(0, 2, 4, 0, 0, 3, 4, 0, 0, 1, 5, 0), // 2
  createShadow(0, 3, 3, 0, 0, 3, 4, 0, 0, 1, 8, 0), // 3
  createShadow(0, 2, 4, 0, 0, 4, 5, 0, 0, 1, 10, 0), // 4
  createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
  createShadow(0, 6, 10, 0, 0, 1, 18, 0, 0, 3, 5, 0), // 6
  createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), // 8
  createShadow(0, 9, 12, 0, 0, 3, 16, 0, 0, 5, 6, 0), // 9
  createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
  createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
  createShadow(0, 12, 17, 0, 0, 5, 22, 0, 0, 7, 8, 4), // 12
  createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
  createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
  createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
  createShadow(0, 16, 24, 0, 0, 6, 30, 0, 0, 8, 10, 0), // 16
  createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
  createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
  createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
  createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
  createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
  createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
  createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
  createShadow(0, 24, 38, 0, 0, 9, 46, 0, 0, 11, 15, 0) // 24
]

export default shadows
