interface ValidationStatus {
  status: "ok" | "error";
  message: string;
  payload?: any;
}

export type { ValidationStatus };
