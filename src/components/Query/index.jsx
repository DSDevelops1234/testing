import { PhoneCall } from "lucide-react";
import querybg from "../../assets/images/Query/querybg.jpeg";

const Query = () => {
  return (
    <div
      className="relative py-32 rounded-lg shadow-lg flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${querybg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-50 rounded-lg"></div>
      <div className="relative z-10 text-center open-sans-medium flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4 shadow-lg">
          <PhoneCall className="w-8 h-8 text-orange-600" />
        </div>
        <h2 className="text-3xl">Have any Questions?</h2>
        <p className="text-2xl">Call us Today!</p>
        <p className="text-xl mt-2">+91 80943-39933</p>
      </div>
    </div>
  );
};

export default Query;
