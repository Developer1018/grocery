import { set, add } from "../../utils/vuexHelpers";

export default {
  setFeedItem: set("feedItem"),
  addSelected: add("selected"),
  removeSelected({ selected }, payload) {
    const itemIndex = selected.findIndex((e) => e.title === payload.title);
    selected.splice(itemIndex, 1);
  },
};
