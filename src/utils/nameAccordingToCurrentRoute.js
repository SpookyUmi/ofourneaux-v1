// This function will return the correct tab name for the mobile view of the admin space
// according to the current route.
function nameAccordingToCurrentRoute(currentRoute) {
  if (currentRoute === '/admin/gestion-recettes') {
    return ('Gérer les recettes');
  } if (currentRoute === '/admin/gestion-labels') {
    return ('Gérer les labels');
  } if (currentRoute === '/admin/gestion-utilisateurs') {
    return ('Gérer les utilisateurs');
  }
  return ('erreur dans tabNameAccordingToRoute');
}

export default nameAccordingToCurrentRoute;
