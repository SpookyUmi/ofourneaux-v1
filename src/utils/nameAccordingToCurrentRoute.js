// This function will return the correct tab name for the mobile view of the admin space
// according to the current route.
function nameAccordingToCurrentRoute(currentRoute) {
  if (currentRoute === '/admin/ajout-recettes') {
    return ('Ajouter une recette');
  } if (currentRoute === '/admin/modification-recettes/:id') {
    return ('Modifier une recette');
  } if (currentRoute === '/admin/modification-recettes') {
    return ('Modifier une recette');
  } if (currentRoute === '/admin/gestion-labels') {
    return ('Gérer les labels');
  } if (currentRoute === '/admin/gestion-utilisateurs') {
    return ('Gérer les utilisateurs');
  }
  return ('erreur dans tabNameAccordingToRoute');
}
export default nameAccordingToCurrentRoute;
