export interface UserType {
  id: number;
  email?: string;
  mobile: string;
  role: "user" | "admin";
}
