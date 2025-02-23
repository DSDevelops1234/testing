import { CheckCircle } from "lucide-react";
import Goldloanimg from "../../../assets/images/Services/goldloan.jpg";

const GoldLoanContent = () => {
  return (
    <div>
      <img
        src={Goldloanimg}
        alt="Gold Loan"
        className="w-full rounded-lg shadow-lg mb-7"
      />
      <h2 className="text-5xl jost-bold">Gold Loan</h2>
      <p className="mt-4 text-gray-700">
        A Gold Loan is a secured loan where borrowers pledge their gold
        ornaments as collateral to obtain funds. It is a quick and convenient
        way to meet financial needs without selling your precious gold assets.
      </p>
      <h3 className="text-2xl font-bold mt-6">Key Features of Gold Loan:</h3>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Get instant loan amounts
          based on gold purity and weight.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Lower interest rates due to
          secured nature of the loan.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Flexible repayment tenure
          ranging from a few months to a few years.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Can be used for personal,
          business, education, or medical emergencies.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Quick loan disbursal with
          minimal documentation.
        </li>
      </ul>
    </div>
  );
};

export default GoldLoanContent;
