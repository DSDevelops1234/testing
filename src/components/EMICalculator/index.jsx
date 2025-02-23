import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [tenureType, setTenureType] = useState("Yr");

  const tenureInMonths = tenureType === "Yr" ? loanTenure * 12 : loanTenure;
  const monthlyInterestRate = interestRate / 100 / 12;

  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
    (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
  const totalPayment = emi * tenureInMonths;
  const totalInterest = totalPayment - loanAmount;

  const data = [
    { name: "Principal Loan Amount", value: loanAmount, color: "#7CB342" },
    { name: "Total Interest", value: totalInterest, color: "#FFA726" },
  ];

  return (
    <div className="mt-5">
      <h2 className="text-xl open-sans-medium  text-center bg-blue-950 text-white p-3 rounded-t-lg">
        EMI Calculator
      </h2>
      <div className="flex flex-col lg:flex-row">
        {/* Input Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg">
          <label className="block open-sans-medium ">Loan Amount</label>
          <div className="flex items-center rounded-md border border-gray-300 p-2">
            <span className="mr-2">₹</span>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full open-sans-regular  outline-none"
            />
          </div>

          <label className="block open-sans-medium  mt-4">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 open-sans-regular  rounded-md border border-gray-300 outline-none"
          />

          <label className="block open-sans-medium  mt-4">Loan Tenure</label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="number"
              value={loanTenure}
              onChange={(e) => setLoanTenure(Number(e.target.value))}
              className="w-full p-2 open-sans-regular  outline-none"
            />
            <button
              onClick={() => setTenureType("Yr")}
              className={`px-4 py-2 open-sans-regular  ${
                tenureType === "Yr" ? "bg-blue-700 text-white" : "bg-gray-300"
              }`}
            >
              Yr
            </button>
            <button
              onClick={() => setTenureType("Mo")}
              className={`px-4 py-2  open-sans-regular ${
                tenureType === "Mo" ? "bg-blue-700 text-white" : "bg-gray-300"
              }`}
            >
              Mo
            </button>
          </div>
        </div>

        {/* Result Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg text-center">
          <p className="open-sans-medium  text-lg">Loan EMI</p>
          <p className="text-2xl font-bold text-blue-700">₹ {emi.toFixed(0)}</p>
          <hr className="my-3" />
          <p className="open-sans-medium  text-lg">Total Interest Payable</p>
          <p className="text-xl text-orange-600">
            ₹ {totalInterest.toFixed(0)}
          </p>
          <hr className="my-3" />
          <p className="open-sans-medium  text-lg">
            Total Payment (Principal + Interest)
          </p>
          <p className="text-xl font-bold">₹ {totalPayment.toFixed(0)}</p>
        </div>

        {/* Pie Chart Section */}
        <div className="flex-1 bg-gray-100 p-6 rounded-lg flex flex-col items-center">
          {/* Chart Title */}
          <h2 className="text-lg open-sans-medium  mb-4">
            Break-up of Total Payment
          </h2>

          {/* Pie Chart */}
          <PieChart width={280} height={280}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={3}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(2)}%`} // Data labels in %
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ marginTop: 20 }}
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
