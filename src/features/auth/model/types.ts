export interface LoginResponse {
  success: boolean;
  message: string;
  responseObject?: {
    tokens?: {
      accessToken: string;
      refreshToken: string;
    };
    user?: {
      email: string;
      fullName: string;
    };
  };
}

export interface LoginInput {
  email: string;
  password: string;
}