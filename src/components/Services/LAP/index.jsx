import { CheckCircle } from "lucide-react";
import Lapimg from "../../../assets/images/Services/lap.jpg";
const LAPContent = () => {
  return (
    <div>
      <img
        src={Lapimg}
        alt="Loan Against Property"
        className="w-full rounded-lg shadow-lg mb-7"
      />
      <h2 className="text-5xl jost-bold">Loan Against Property</h2>
      <p className="mt-4 text-gray-700">
        A Loan Against Property (LAP) is a secured loan that allows individuals
        or businesses to borrow funds by pledging their residential or
        commercial property as collateral. It is a great way to unlock the value
        of your property while still retaining ownership.
      </p>
      <h3 className="text-2xl font-bold mt-6">Key Features of LAP:</h3>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Get up to 70% of the
          property’s market value as a loan.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Since it’s a secured loan,
          the interest rates are lower compared to personal loans.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Choose a tenure of up to
          15-20 years.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Can be used for business
          expansion, education, medical expenses, debt consolidation, or
          personal needs.
        </li>
        <li className="flex items-center gap-2 mb-2">
          <CheckCircle className="text-blue-600" /> Faster loan approval with
          minimal documentation.
        </li>
      </ul>
    </div>
  );
};

export default LAPContent;
