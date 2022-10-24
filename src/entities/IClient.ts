export interface IClient {
  account: string;
  user: string;
  password: string;
  createAt: Date;
  availableMoney: number;
  payments: IPayment[];
}

export interface IPayment {
  id: string;
  establishmentAccount: string;
  paymentDetail: IPaymentDetail[];
  total: number;
  createAt: Date;
}

export interface IPaymentDetail {
  method: string;
  form: string;
  total: number;
}
