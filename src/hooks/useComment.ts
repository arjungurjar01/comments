import { useState } from "react";
import type { CommentType, CommentMap } from "../types/comment";
import commentsData from "../CommentData.json";

export function useComment(initialComments: CommentMap = commentsData.comment) {
  const [comments, setComments] = useState<CommentMap>(initialComments);

  /** Add a new comment */
  const addComment = (value: string, parentId: number | null) => {
    const newId = Date.now();
    const newComment: CommentType = {
      id: newId,
      value,
      parentId,
      children: [],
    };

    setComments((prev) => {
      const updated: CommentMap = {
        ...prev,
        [newId]: newComment,
      };

      if (parentId !== null && updated[parentId]) {
        updated[parentId] = {
          ...updated[parentId],
          children: [newId,...updated[parentId].children],
        };
      }

      return updated;
    });
  };

  /** Delete a comment and all its children */
  const deleteComment = (id: number) => {
    setComments((prev) => {
      const updated = { ...prev };
      const parentId = updated[id]?.parentId ?? null;

      if (parentId !== null && updated[parentId]) {
        updated[parentId] = {
          ...updated[parentId],
          children: updated[parentId].children.filter((childId) => childId !== id),
        };
      }

      // BFS delete
      const queue: number[] = [id];
      while (queue.length > 0) {
        const nodeId = queue.shift();
        if (nodeId !== undefined && updated[nodeId]) {
          queue.push(...updated[nodeId].children);
          delete updated[nodeId];
        }
      }

      return updated;
    });
  };

  /** Get only root-level comments */
  const rootComments = Object.values(comments).filter(
    (c) => c.parentId === null
  ).sort((a, b) => b.id - a.id);;

  return { comments, rootComments, addComment, deleteComment };
}
