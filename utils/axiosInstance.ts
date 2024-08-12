import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 100000000,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface ApiResponse<T> {
    data: T;
    message: string;
    success: number;
}

export const api = {
    // GET request
    get: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(endpoint);
        return response.data;
    },

    // POST request
    post: async <T>(endpoint: string, data: any): Promise<ApiResponse<T>> => {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(endpoint, data);
        return response.data;
    },

    // PUT request
    put: async <T>(endpoint: string, putData: any): Promise<ApiResponse<T>> => {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(endpoint, putData);
        return response.data;
    },

    // PATCH request
    patch: async <T>(endpoint: string, patchData: any): Promise<ApiResponse<T>> => {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.patch(endpoint, patchData);
        return response.data;
    },

    // DELETE request
    delete: async (endpoint: string): Promise<void> => {
        await axiosInstance.delete(endpoint);
    },
};
