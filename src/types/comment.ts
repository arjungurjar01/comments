
export type CommentType = {
  id: number;
  parentId: number | null; 
  value: string;
  children: number[];     
};
export type CommentMap = Record<string, CommentType>;