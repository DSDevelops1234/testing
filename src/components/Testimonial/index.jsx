import Person1 from "../../assets/images/Testimonials/person1.jpg";
import Person2 from "../../assets/images/Testimonials/person2.jpg";
import Person3 from "../../assets/images/Testimonials/person3.jpg";
import Person4 from "../../assets/images/Testimonials/person4.jpg";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container px-10 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <p className="inline-block border-2 border-blue-900 rounded text-blue-900 open-sans-medium text-base py-1 px-3">
              Testimonial
            </p>
            <h2 className="text-5xl jost-bold">What Our Clients Say</h2>
            <p className="text-gray-600 open-sans-regular text-base">
              We strive to provide the best financial solutions tailored to your
              needs. Here’s what our customers say about their experience with
              us.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-white">
                  <p className="open-sans-regular text-base">
                    "The loan approval process was seamless and quick. Thanks to
                    their flexible repayment options, I was able to manage my
                    finances with ease."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Person1}
                      alt="Client"
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-2xl jost-semi-bold">Rahul Sharma</p>
                      <p className="open-sans-regular text-base text-gray-600">
                        Small Business Owner
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-white">
                  <p className="open-sans-regular text-base">
                    "I needed urgent funds for medical expenses. Their personal
                    loan service was a lifesaver. The support team was
                    incredibly helpful."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Person2}
                      alt="Client"
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-2xl jost-semi-bold">Priya Mehta</p>
                      <p className="open-sans-regular text-base text-gray-600">
                        IT Professional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-white">
                  <p className="open-sans-regular text-base">
                    "I was hesitant about applying for a loan, but they made the
                    process stress-free. Transparent policies and great customer
                    service!"
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Person3}
                      alt="Client"
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-2xl jost-semi-bold">Amit Verma</p>
                      <p className="open-sans-regular text-base text-gray-600">
                        Entrepreneur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-white">
                  <p className="open-sans-regular text-base">
                    "Their investment advisory services helped me make informed
                    decisions. I now feel more confident about my financial
                    future."
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src={Person4}
                      alt="Client"
                      className="w-12 h-12 bg-center bg-cover rounded-full"
                    />
                    <div>
                      <p className="text-2xl jost-semi-bold">Neha Kapoor</p>
                      <p className="open-sans-regular text-base text-gray-600">
                        Finance Consultant
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
