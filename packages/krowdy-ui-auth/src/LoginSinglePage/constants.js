
export const IMAGES_SOCIAL = (cdnLink, key) => {
  const social = {
    facebook: `${cdnLink}/iconFb.svg`,
    google  : `${cdnLink}/iconGoogle.svg`,
    linkedin: `${cdnLink}/iconLink.svg`,
    twitter : `${cdnLink}/twitter.png`
  }

  return social[key]
}
