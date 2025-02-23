import { useState } from "react";
import { Dot } from "lucide-react"; // Ensure you have lucide-react installed

const GoldLoanTabs = () => {
  const [activeTab, setActiveTab] = useState("Eligibility");

  const tabContent = {
    Eligibility: (
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Individuals with Gold
              Assets
            </td>
            <td className="p-3 open-sans-regular">
              Anyone owning gold jewelry or ornaments can apply.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> No Income Proof Required
            </td>
            <td className="p-3 open-sans-regular">
              No need for income documents; loan amount depends on gold
              valuation.
            </td>
          </tr>
        </tbody>
      </table>
    ),
    Purpose: (
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Emergency Financial
              Needs
            </td>
            <td className="p-3 open-sans-regular">
              Get quick cash for medical emergencies, education, or other urgent
              needs.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Business & Agriculture
            </td>
            <td className="p-3 open-sans-regular">
              Use the loan amount to support your business or farming needs.
            </td>
          </tr>
        </tbody>
      </table>
    ),
    Documents: (
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Identity Proof
            </td>
            <td className="p-3 open-sans-regular">
              Aadhaar Card, PAN Card, Passport, or Voter ID.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Address Proof
            </td>
            <td className="p-3 open-sans-regular">
              Utility bills, Aadhaar Card, or Passport.
            </td>
          </tr>
        </tbody>
      </table>
    ),
    "Schedule of Charges": (
      <table className="w-full text-left text-gray-800">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 open-sans-medium flex items-center gap-2">
              <Dot className="w-7 h-7 text-blue-900" /> Processing Fee
            </td>
            <td className="p-3 open-sans-regular">
              0.5-1% of the loan amount.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  };

  return (
    <div className="mt-8 w-full max-w-2xl">
      <div className="flex flex-wrap border-b-2 border-orange-500">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`flex-1 px-6 py-3 text-lg font-semibold focus:outline-none transition-all duration-300 
                ${
                  activeTab === tab
                    ? "bg-blue-900 text-white border-b-4 border-orange-500"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="whitespace-nowrap open-sans-medium ">{tab}</span>
          </button>
        ))}
      </div>
      <div className="p-6 bg-gray-100 rounded-b-lg mt-0 border border-gray-300 overflow-x-auto">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default GoldLoanTabs;
