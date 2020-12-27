export type ProfilePhoto = {
  bucketKey: string;
  bucket: string;
  mimeType: string;
  size: number;
}

export type ProfilePhotoLocal = {
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
  profilePhoto?: ProfilePhotoLocal;
}