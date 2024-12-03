export type Transaction = {
    id: number;
    amount: number;
    country: string;
    currency: string;
    date: string;
    orderId: string;
    taxCode: number;
    taxRate: number;
    type: string;
  };

  const data: Transaction[] = [
    {
      id: 139235,
      amount: 60,
      country: "usa",
      currency: "usd",
      date: "2018-12-30",
      orderId: "21213627",
      taxCode: 0,
      taxRate: 0,
      type: "VISA",
    },
    {
      id: 139236,
      amount: 35,
      country: "usa",
      currency: "usd",
      date: "2018-12-30",
      orderId: "21213448",
      taxCode: 0,
      taxRate: 0,
      type: "VISA",
    },
  ];
  