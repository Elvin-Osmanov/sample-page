import IUser from "./IUser";

export default interface IPost {
  id: number;
  user: IUser;
  postImage: string;
  activity: string;
  content: string;
  comments: [];
  shares: number;
  reactions: number;
  createdAt: Date;
  modifiedAt: Date;
}
