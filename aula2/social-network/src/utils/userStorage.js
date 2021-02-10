const userKey = '@aula-react/user';

export function saveUserToStorage(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function getUser() {
  const stringUser = localStorage.getItem(userKey);

  if (!stringUser) {
    return null;
  }

  return JSON.parse(stringUser);
}
