export const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 50,
  breakpoints: {
    480: {
      slidesPerView : 1
    },
    600: {
      slidesPerView : 2
    },
    750: {
      slidesPerView : 3
    },
    1100: {
      slidesPerView : 4
    }
  }
}

export const updateFavorites = (id, favorites) => {
  if (favorites?.includes(id)) {
    return favorites.filter((resId) => resId !== id)
  }
  else{
    return [...favorites, id]
  }
}

export const checkFavorites = (id, favorites) => {
  return favorites?.includes(id) ? "#FF0000" : "#0000FF";
}

export const validateString = (value) => {
 return value?.length < 3 || value === null ? "Must have a minimum of 3 characters" : null;
}