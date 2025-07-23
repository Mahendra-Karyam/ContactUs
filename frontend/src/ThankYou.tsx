export default function ThankYou() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center py-6 px-4 border-2 border-black rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-gray-900 font-semibold pb-4">
          Thank You!
        </h2>
        <p className="text-gray-700 text-center">
          Your message has been successfully sent. We will get back to you soon.
        </p>
      </div>
    </div>
  );
}
