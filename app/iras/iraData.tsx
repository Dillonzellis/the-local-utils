export type IraType = {
  accountType: string;
  apy: string;
};

export const iraData = [
  {
    accountType: "Traditional IRA >=$2,500",
    apy: "0.25%",
  },
  {
    accountType: "Roth IRA >=$2,500",
    apy: "0.25%",
  },
  {
    accountType: "Education Savings Account >=$2,500",
    apy: "0.25%",
  },
];

export const iraDataTime = [
  {
    accountType: "3 months",
    apy: "0.25%",
  },
  {
    accountType: "6 months",
    apy: "0.75%",
  },
  {
    accountType: "12 months",
    apy: "1.00%",
  },
  {
    accountType: "24 months",
    apy: "1.25%",
  },
  {
    accountType: "36 months",
    apy: "1.50%",
  },
];
