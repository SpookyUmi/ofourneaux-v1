// This function will return the correct tab name for the mobile view of the admin space
// according to the current route.
function nameAccordingToCurrentRoute(currentRoute, id) {
  console.log('id:', id);
  if (currentRoute === '/admin/ajout-recette') {
    return ('Ajouter une recette');
  } if (currentRoute === `/admin/modification-recette/${id}`) {
    return ('Modifier une recette');
  } if (currentRoute === '/admin/gestion-labels') {
    return ('Gérer les labels');
  } if (currentRoute === '/admin/gestion-utilisateurs') {
    return ('Gérer les utilisateurs');
  }
  return ('erreur dans NameAccordingToRoute');
}
export default nameAccordingToCurrentRoute;
