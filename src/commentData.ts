import type { CommentMap } from "./types/comment";

export const commentsData: CommentMap = {
  "1": { id: 1, parentId: null, value: "Nice product", children: [2, 3] },
  "2": { id: 2, parentId: 1, value: "I agree, quality is good", children: [4] },
  "3": {
    id: 3,
    parentId: 1,
    value: "Could be cheaper though",
    children: [5, 6],
  },
  "4": { id: 4, parentId: 2, value: "Yes, durability is solid", children: [] },
  "5": { id: 5, parentId: 3, value: "True, price is a bit high", children: [] },
  "6": { id: 6, parentId: null, value: "But worth the value", children: [] },
  "7": { id: 7, parentId: 1, value: "Exactly, good investment", children: [] },
  "8": { id: 8, parentId: null, value: "Delivery was fast", children: [9] },
  "9": {
    id: 9,
    parentId: 8,
    value: "Same here, got it in 2 days",
    children: [10],
  },
  "10": {
    id: 10,
    parentId: 9,
    value: "That’s impressive service",
    children: [],
  },
};
