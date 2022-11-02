export interface CommonCategoryType {
  id: number;
  name: string;
  path: string;
  children?: Array<CommonCategoryChildrenType>;
}

export interface CommonCategoryChildrenType {
  id: number;
  name: string;
  parent_id: number;
  path: string;
}
