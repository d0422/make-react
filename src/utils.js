export const getLongerArrayLength = (array1, array2) => {
  if (array1.length > array2.length) return array1.length;
  return array2.length;
};

export const createArray = (length) => {
  return Array.from({ length }, (_, i) => i);
};

export const getDiffKeysObject = (oldOne, newOne) => {
  const changedKeys = {};

  for (const key of Object.keys(oldOne)) {
    if (oldOne[key] !== newOne[key] && newOne[key]) {
      changedKeys[key] = newOne[key];
    }
  }

  return changedKeys;
};

export const getNewKeysObject = (oldOne, newOne) => {
  const changedKeys = {};

  for (const key of Object.keys(newOne)) {
    if (!oldOne[key] && newOne[key]) {
      changedKeys[key] = newOne[key];
    }
  }

  return changedKeys;
};

export const getDeleteKeysArray = (oldOne, newOne) => {
  const oldKeys = Object.keys(oldOne);
  const newKeys = Object.keys(newOne);

  return oldKeys.filter((key) => !newKeys.includes(key));
};
