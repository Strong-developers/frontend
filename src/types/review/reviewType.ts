export interface ReviewType {
  User: {
    id: number;
    nickname: string;
    profileUrl: string;
    role: number;
  };
  id: number;
  title: string;
  description: string;
  createdAt: string;
}
