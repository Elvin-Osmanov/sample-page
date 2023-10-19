export default interface IUser {
  id: number;
  fullName: string;
  profilePicture: string;
  userName: string;
  isVerified: boolean;
  isProMember: boolean;
  progress: number;
  level: number;
  createdAt: Date;
  modifiedAt: Date;
}
