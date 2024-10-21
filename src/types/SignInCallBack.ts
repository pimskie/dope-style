import type { AuthUser } from "./AuthUser";

type SignInCallBack = (auth: AuthUser) => void;

export type { SignInCallBack };
