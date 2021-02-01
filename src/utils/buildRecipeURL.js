import slugify from 'slugify';

// we slugify the URL => we remove spaces and we specify
// in paramater that we want to use only lowercase letters
export const slugifyTitle = (title) => {
  const modifiedTitle = title.replace('_', '-').replace('&', '');

  return (slugify(modifiedTitle, {
    lower: true,
  }));
};

// we export the slugified URL so that the CardRecipe component can retrieve it
export const buildRecipeURL = (title) => `/recettes/${slugifyTitle(title)}`;
