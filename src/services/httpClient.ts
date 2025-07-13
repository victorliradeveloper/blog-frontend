import axios from 'axios'
import { DEV_API_URL, PROD_API_URL } from '@/constants/endpoints'

const API_URL = process.env.NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL

export const httpClient = axios.create({
  baseURL: API_URL,
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