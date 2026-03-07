export interface WaitlistFormData {
  email: string;
  name: string;
  stores: string[];
  wants_beta: boolean;
  referral_source: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error" | "duplicate";
