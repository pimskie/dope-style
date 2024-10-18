interface AuthUser {
  email: string;
  providerId: string;
  uid: string;
  accessToken: string;
  displayName: string | null;
}

export type { AuthUser };
