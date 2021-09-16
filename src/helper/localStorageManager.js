import { routes } from "../mainRouter/MainRouter";

export default class LocalStorageManager {
  static sharedInstance = LocalStorageManager.getInstance();

  static createInstance() {
    const object = new LocalStorageManager();
    return object;
  }

  static getInstance() {
    if (!LocalStorageManager.instance) {
      LocalStorageManager.sharedInstance = LocalStorageManager.createInstance();
    }
    return LocalStorageManager.sharedInstance;
  }

  static set(key, data) {
    const value = typeof data === "object" ? JSON.stringify(data) : data;
    localStorage.setItem(key, value);
  }

  static update(key, data) {
    const value = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : {};
    localStorage.removeItem(key);
    localStorage.setItem(
      key,
      JSON.stringify({
        ...value,
        ...data,
      })
    );
  }

  static get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  }

  static clear() {
    localStorage.clear();
    const isRequiredAuthRouts = routes.filter((route) => !route.authorize);
    if (
      isRequiredAuthRouts.findIndex(
        (route) => route.path === window.location.pathname
      ) === -1
    ) {
      window.location.reload();
    }
  }
}

export const cacheData = LocalStorageManager.set;
export const getCachedData = LocalStorageManager.get;
export const clearCache = LocalStorageManager.clear;
