import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRequest = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const res = await api.get<T>(url, config);
  return res.data;
};

// export const postRequest = async <T, B = unknown>(
//   url: string,
//   body: B
// ): Promise<T> => {
//   const res = await api.post<T>(url, body);
//   return res.data;
// };

// export const patchRequest = async <T, B = unknown>(
//   url: string,
//   body: B
// ): Promise<T> => {
//   const res = await api.patch<T>(url, body);
//   return res.data;
// };

// export const deleteRequest = async <T>(
//   url: string
// ): Promise<T> => {
//   const res = await api.delete<T>(url);
//   return res.data;
// };
