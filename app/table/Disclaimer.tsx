const Disclaimer = () => {
  return (
    <div className="flex flex-col gap-4 border-t-2 border-primaryBlue-300 px-4 py-4 text-black">
      <div className="text-xs text-black">
        The above rates include 3 tiers based on the applicants credit
        worthiness and amount of down payment, if any. The maximum annual
        percentage rate will never be greater than 18.00%. The Annual Percentage
        Rate, corresponding daily periodic rates, late payment charges, amount
        and due date of payments, and other charges that may be imposed will be
        determined at the time of each advance and disclosed on the Advance
        Request Voucher. *72 month contract available for loans over $25,000 -
        84 month contract available for loans over $30,000.
      </div>
      <div className="font-medium">*APR is accurate as of January 9, 2023</div>
    </div>
  );
};

export default Disclaimer;
