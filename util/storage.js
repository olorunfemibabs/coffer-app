import {decodeString, encodeString} from "./helpers";

const storage = {
  get(key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(decodeString(item)) : null;
  },
  set(key, value) {
    localStorage.setItem(key, encodeString(JSON.stringify(value)));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default storage;