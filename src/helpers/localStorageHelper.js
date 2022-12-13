const localStorageHelper = (action, key, value) => {
  console.log(action);
  switch (action) {
    case 'get':
      return JSON.parse(localStorage.getItem(key));
    case 'set':
      return localStorage.setItem(key, JSON.stringify(value));
  }
};

export default localStorageHelper;
