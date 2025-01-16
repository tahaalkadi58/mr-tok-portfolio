export interface iData {
  name: string;
  createdAt: Date;
}

export interface iProjectByTypes {
  [key: string]: iProject[];
}

export interface iProject {
  name: string;
  type: string;
  createdAt: Date;
  id: number;
}
