import { is } from "@react-three/fiber/dist/declarations/src/core/utils";
import getRandomDate from "./random-time";
import { iData, iProject, iProjectByTypes } from "client/types/app-type";

let dataServer: any = [
  {
    name: "project-music-player-web",
  },
  {
    name: "project-xo-game-app",
  },
  {
    name: "project-portfolio-web",
  },
  {
    name: "project-e-commerce-web",
  },
  {
    name: "project-task-manger-app",
  },
  {
    name: "idontknow",
  },
];

(dataServer as iData[]).forEach((item) => {
  if (!item.createdAt) {
    item.createdAt = getRandomDate(new Date(2020, 0, 1), new Date(2025, 0, 1));
  }
});

export class Project implements iProject {
  public id: number;
  static lastId = -1;
  constructor(
    public name: string,
    public type: string,
    public createdAt: Date,
    public isProject: boolean,
  ) {
    this.id = ++Project.lastId;
  }
}

export const result: iProject[] = (dataServer as iData[])
  .map(({ name, createdAt }) => {
    const isProject = name.startsWith("project");
    if (isProject) {
      const [project, ...rest] = name.split("-");
      const type = rest.pop(); // آخر عنصر هو النوع
      const projectName = rest.join("-"); // باقي العناصر تشكل الاسم
      return new Project(projectName, type as string, createdAt, isProject);
    }
    return null;
  })
  .filter((el) => el !== null);

export const projectByTypes = result.reduce<iProjectByTypes>(
  (acc, project) => {
    const { type } = project; // استخراج النوع من المشروع
    if (!acc[type]) {
      acc[type] = []; // إذا لم يكن النوع موجودًا في المجمع، أضف مصفوفة فارغة
    }
    acc[type].push(project); // أضف المشروع إلى المصفوفة المناسبة
    acc.all.push(project);
    return acc;
  },
  { all: [] },
);
