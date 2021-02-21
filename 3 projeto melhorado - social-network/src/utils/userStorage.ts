import { User } from '../models/User';

const userKey = '@aula-react/user';

export function saveUserToStorage(user: User): void {
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function resetUserInStorage(): void {
  localStorage.removeItem(userKey);
}

export function getUser(): null | User {
  const stringUser = localStorage.getItem(userKey);

  if (!stringUser) {
    return null;
  }

  return JSON.parse(stringUser);
}
