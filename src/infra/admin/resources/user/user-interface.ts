
export type ProfilePhoto = {
  mimeType: string;
  size: number;
  path: String,
  folder: String,
  filename: String
}


export interface UserInterface {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  encryptedPassword: string;
  profilePhoto?: ProfilePhoto;
}