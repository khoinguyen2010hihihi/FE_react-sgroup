import api from "@/shared/lib/axios";
import type { LoginInput } from "@/features/auth/model/types";

export const loginApi = async (loginInput: LoginInput) => {
  try {
    const res = await api.post("/auth/login", loginInput);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
}