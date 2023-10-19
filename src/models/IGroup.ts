import IUser from "./IUser";

export default interface IGroup {
  id: number;
  name: string;
  image: string;
  isPublic: boolean;
  members: IUser[];
  topics: string[];
  membersCount: number;
  createdAt: Date;
  modifiedAt: Date;
}
