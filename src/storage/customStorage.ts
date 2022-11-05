const ACCESS_TOKEN_KEY = "VOLUNTEERS_ACCESS_TOEKN";

export function setItem(item: string) {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, item);
}

export function getItem() {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

export function removeItem() {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function clearItem() {
  sessionStorage.clear();
}
