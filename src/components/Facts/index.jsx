import { useState, useEffect } from "react";
import Statisiticsbg from "../../assets/images/Statistics/statistics-bg.png";
import { FaUsers, FaUsersCog, FaCheck, FaAward } from "react-icons/fa";

const Facts = () => {
  const [stats, setStats] = useState({
    clients: 0,
    loans: 0,
    advisors: 0,
    awards: 0,
  });
  const targetStats = { clients: 5000, loans: 3000, advisors: 150, awards: 20 };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const newStats = { ...prevStats };
        Object.keys(targetStats).forEach((key) => {
          if (newStats[key] < targetStats[key]) {
            newStats[key] += Math.ceil(targetStats[key] / 100);
          }
        });
        return newStats;
      });
    }, 30);

    setTimeout(() => clearInterval(interval), 3000);
  }, []);

  return (
    <section
      className="w-full py-14 bg-contain bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(53, 94, 252, .95), rgba(53, 94, 252, .95)), url(${Statisiticsbg})`,
      }}
    >
      <div className="w-11/12 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
          <StatBox
            icon={<FaUsers className="text-5xl mb-3" />}
            value={stats.clients}
            label="Happy Clients"
          />
          <StatBox
            icon={<FaCheck className="text-5xl mb-3" />}
            value={stats.loans}
            label="Loans Approved"
          />
          <StatBox
            icon={<FaUsersCog className="text-5xl mb-3" />}
            value={stats.advisors}
            label="Financial Advisors"
          />
          <StatBox
            icon={<FaAward className="text-5xl mb-3" />}
            value={stats.awards}
            label="Awards Won"
          />
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h1 className="text-5xl jost-bold">{value}</h1>
      <span className="open-sans-regular text-xl">{label}</span>
      <hr className="w-16 border-t-2 border-white mt-4" />
    </div>
  );
};

export default Facts;
