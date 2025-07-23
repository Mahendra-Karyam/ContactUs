import { useState } from "react";
import "./input.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [branch, setBranch] = useState("");
  const [passedOutYear, setPassedOutYear] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/contactus",
        {
          name,
          email,
          phone,
          collegeName,
          collegeAddress,
          branch,
          passedOutYear,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200 || res.status === 201) {
        navigate("/thankyou");
        alert("Details submitted successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setCollegeName("");
        setCollegeAddress("");
        setBranch("");
        setPassedOutYear("");
        setMessage("");
      } else {
        const responseData = res.data;
        setMessage(responseData.message);
      }
    } catch (error: any) {
      setMessage("An unexpected error occurred. Please try again!");
      console.error("Request failed:", error);
    }
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center py-6 px-4 border-2 border-black rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl text-gray-900 font-semibold pb-4">
            Contact Us
          </h2>
          <form
            className="flex flex-col gap-3 w-full"
            onSubmit={handleLoginSubmit}
          >
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                College Name
              </label>
              <input
                type="text"
                placeholder="Enter your college name"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                College Address
              </label>
              <input
                type="text"
                placeholder="Enter your college address"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={collegeAddress}
                onChange={(e) => setCollegeAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Branch
              </label>
              <input
                type="text"
                placeholder="Enter your branch"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Passed Out Year
              </label>
              <input
                type="number"
                placeholder="Enter year of passing"
                className="w-full border border-gray-300 rounded px-3 py-1 mt-1"
                required
                value={passedOutYear}
                onChange={(e) => setPassedOutYear(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-800 hover:bg-blue-950 text-white font-semibold py-2 rounded cursor-pointer"
            >
              Submit
            </button>
            {message && (
              <div className="mt-2 text-red-500 bg-white px-2 rounded-sm text-center">
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
