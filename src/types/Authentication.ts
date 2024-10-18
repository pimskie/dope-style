interface Authentication {
  email: string;
  providerId: string;
  uid: string;
  accessToken: string;
  displayName: string | null;
}

export type { Authentication };
