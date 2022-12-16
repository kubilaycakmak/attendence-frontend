const localStorageHelper = (action, key, value) => {
  switch (action) {
    case 'get':
      return JSON.parse(localStorage.getItem(key));
    case 'set':
      return localStorage.setItem(key, JSON.stringify(value));
    case 'remove':
      return localStorage.removeItem(key);
  }
};

export default localStorageHelper;
