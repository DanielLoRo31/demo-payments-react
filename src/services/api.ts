import axios, { AxiosRequestConfig } from 'axios';
import { IClient, IPayment } from '../entities/IClient';

const baseURL: string = process.env.REACT_APP_API_URL ?? '';

const reqConfig: AxiosRequestConfig = {
  baseURL,
};

export const getClients = async (): Promise<IClient[]> => {
  const resp = await axios.get<IClient[]>(`/clients`, reqConfig);
  return resp.data;
};

export const getClientPayments = async (account: string): Promise<IPayment[]> => {
  const resp = await axios.get<IPayment[]>(`/payments/${account}`, reqConfig);
  return resp.data;
};

export const deletePayment = async (account: string): Promise<any> => {
  const resp = await axios.delete(`/payments/${account}`, reqConfig);
  return resp.data;
};