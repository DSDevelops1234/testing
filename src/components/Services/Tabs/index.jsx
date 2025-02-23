import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const ServiceTabs = () => {
  return (
    <div className="flex flex-col gap-3 mb-12">
      {[
        { path: "/loanagainstproperty", label: "Loan Against Property" },
        { path: "/goldloan", label: "Gold Loan" },
        { path: "/businessloan", label: "Business Loan" },
      ].map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `text-lg font-medium text-white py-4 rounded flex items-center justify-between px-5 ${
              isActive ? "bg-blue-950" : "bg-orange-500"
            }`
          }
        >
          {label}
          <FaAngleRight />
        </NavLink>
      ))}
    </div>
  );
};

export default ServiceTabs;
