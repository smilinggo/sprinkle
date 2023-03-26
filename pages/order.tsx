import { useState } from "react";
import Head from "next/head";

const Order = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the order data
  };

  return (
    <>
      <Head>
        <title>Place an Order | A Sprinkle of Sugar Cakes</title>
        <meta
          name="description"
          content="Order a custom cake from A Sprinkle of Sugar Cakes"
        />
      </Head>
      <div className="mx-auto mt-8 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg">
            <h1 className="text-2xl font-bold mb-8">
              Want a cake? Send us a message!
            </h1>
            <p className="mb-4">
              Please include flavors, basic design, date and number of servings.
              Once we receive your message we will be in contact within 2
              business days.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
              >
                Submit
              </button>
            </form>
            <div className="mt-8 text-sm">
              <p>Please be aware…</p>
              <ul className="list-disc pl-5">
                <li>
                  -To secure an order, a 25% non-refundable deposit is required
                  to reserve the date and cake.
                </li>
                <li>
                  -Remaining balance must be paid before picking up the cake or
                  delivery.
                </li>
                <li>
                  -Full payment will be required for any last-minute orders.
                </li>
                <li>
                  -No last-minute changes can be made on the cake design or
                  flavors within 3 days of delivery or pickup.
                </li>
                <li>-We deliver! Additional fee may apply.</li>
                <li>-Please order a cake first, before making any payments.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
