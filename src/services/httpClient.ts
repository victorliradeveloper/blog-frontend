import axios from 'axios'

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DEV_API_URL,
  timeout: 30000,
})

export async function fetchFunction(endpoint: string) {
  try {
    const response = await httpClient.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Erro na requisição:`, error);
    throw new Error('Erro ao buscar os dados. Tente novamente mais tarde.');
  }
}