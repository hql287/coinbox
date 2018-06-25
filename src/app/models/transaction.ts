export interface Transaction {
  id:          string;
  payeeID:     number;
  accountID:   number;
  catID:       number;
  inflow:      number;
  outflow:     number;
  description: string;
  clear:       boolean;
}
