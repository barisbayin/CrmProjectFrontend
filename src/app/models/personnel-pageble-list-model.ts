import { Personnel } from "./personnel";

export class PersonnelPagebleListModel {
  index: number;
  size: number;
  count: number;
  pages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  items: Personnel[]
}