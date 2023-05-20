export const getFromLocalStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? value : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}