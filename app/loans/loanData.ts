export type LoanType = {
  accountType: string;
  term: string;
  apr: string;
};

export const Loans = [
  {
    accountType: "Current & Prior Year Vehicle",
    term: "24 - 84* Months",
    apr: "4.75% - 18.00%",
  },
  {
    accountType: "2021-2020 Used Vehicle",
    term: "24 - 84* Months",
    apr: "5.00% - 18.00%",
  },
  {
    accountType: "2019-2016 Used Vehicle",
    term: "24 - 84* Months",
    apr: "6.00% - 18.00%",
  },
  {
    accountType: "Current & Prior Year RV/Boat/Motorcycle/Camper",
    term: "24 - 84* Months",
    apr: "5.50% - 18.00%",
  },
  {
    accountType: "2021-2016 Used RV/Boat/Motorcycle/Camper",
    term: "24 - 84* Months",
    apr: "6.50% - 18.00%",
  },
  {
    accountType: "Personal/Signature Loan",
    term: "1 - 48 Months",
    apr: "11.00% - 18.00%",
  },
  {
    accountType: "Share Secured Loan",
    term: "Variable",
    apr: "7.00%",
  },
];
