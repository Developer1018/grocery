export const set = (property) => (state, payload) =>
  (state[property] = payload);

export const add = (property) => (state, payload) =>
  (state[property] = [...state[property], payload]);
