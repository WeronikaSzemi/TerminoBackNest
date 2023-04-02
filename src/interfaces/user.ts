export interface UserInterface {
  email: string;
  hash: string;
  currentTokenId: string | null;
}

export interface RegisteredUserRes {
  userId: string;
  email: string;
}