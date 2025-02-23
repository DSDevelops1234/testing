import { CheckCircle } from "lucide-react";
import Businessloanimg from "../../../assets/images/Services/businessloan.jpg";

const BusinessLoanContent = () => {
  return (
    <div>
      <img
        src={Businessloanimg}
        alt="Business Loan"
        className="w-full rounded-lg shadow-lg mb-7"
      />
      <h2 className="text-5xl jost-bold">Business Loan</h2>
      <p className="mt-4 text-gray-700">
        A Business Loan is a financial solution designed to help entrepreneurs
        and business owners fund their operations, expand their ventures, or
        manage working capital needs. It provides the necessary financial boost
        without requiring collateral in many cases.
      </p>
      <h3 className="text-2xl font-bold mt-6">
        Key Features of Business Loan:
      </h3>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Get loan amounts up to a
          specified limit based on business needs.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Competitive interest rates
          based on creditworthiness and loan tenure.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Flexible repayment tenure
          ranging from 1 to 5 years.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Can be used for business
          expansion, inventory purchase, equipment financing, or operational
          expenses.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Quick processing with
          minimal documentation.
        </li>
      </ul>
    </div>
  );
};

export default BusinessLoanContent;
