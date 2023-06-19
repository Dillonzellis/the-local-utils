export type IraType = {
  accountType: string;
  apy: string;
};

export const iraData = [
  {
    accountType: "Traditional IRA",
    apy: "0.25%",
  },
  {
    accountType: "Roth IRA",
    apy: "0.25%",
  },
  {
    accountType: "Education Savings Account",
    apy: "0.25%",
  },
];

export const iraDataTime = [
  {
    accountType: "3 months",
    apy: "0.15%",
  },
  {
    accountType: "6 months",
    apy: "0.25%",
  },
  {
    accountType: "12 months",
    apy: "0.50%",
  },
  {
    accountType: "24 months",
    apy: "0.70%",
  },
  {
    accountType: "36 months",
    apy: "0.85%",
  },
];
