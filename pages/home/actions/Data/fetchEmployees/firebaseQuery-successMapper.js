return Object.entries({{data}}).map(([userId, userData]) => {
  userData.id = userId;
  return userData;
});