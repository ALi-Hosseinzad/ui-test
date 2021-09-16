import { parseCookies, setCookie, destroyCookie } from "nookies";

export const cacheData = (key, data) => {
  const value = typeof data === "object" ? JSON.stringify(data) : data;
  setCookie(null, key, value, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
};
export const getCachedData = (key) => {
  const cookies = parseCookies();
  return cookies[key];
};
export const clearCache = (key) => {
  destroyCookie(null, key, {
    path: "/",
  });
};
