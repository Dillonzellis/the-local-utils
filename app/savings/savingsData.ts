export type SavingsDataType = {
  accountType: string;
  mintoEarn: string;
  apy: string;
};

export const savingsData = [
  {
    accountType: "Savings Share Account",
    mintoEarn: "<$100",
    apy: "0.00",
  },
  {
    accountType: "",
    mintoEarn: "<$1000",
    apy: "0.01",
  },
  {
    accountType: "",
    mintoEarn: "<$2,500",
    apy: "0.05",
  },
  {
    accountType: "",
    mintoEarn: "<$5,000",
    apy: "0.10",
  },
  {
    accountType: "",
    mintoEarn: ">=$5,000",
    apy: "0.15",
  },
  {
    accountType: "Money Market Account",
    mintoEarn: ">=$2,500",
    apy: "0.25",
  },
  {
    accountType: "",
    mintoEarn: ">=$25,000",
    apy: "0.75",
  },
  {
    accountType: "Christmas Club",
    mintoEarn: ">=$2,500",
    apy: "0.05",
  },
  {
    accountType: "Vacation/Special Savings",
    mintoEarn: ">=$2,500",
    apy: "0.05",
  },
  {
    accountType: "Checking Account",
    mintoEarn: ">=$2,500",
    apy: "0.01",
  },
];
