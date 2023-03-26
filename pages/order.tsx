import { useState } from 'react';
import Head from 'next/head';
import { standardFlavors, premiumFlavors, fruitFillings, otherFillings } from '../components/flavorsData';

const Order = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [cakeFlavor, setCakeFlavor] = useState('');
  const [fillingFlavor, setFillingFlavor] = useState('');
  const [frostingFlavor, setFrostingFlavor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the order data
  };

  const frostingFlavors = [
    'Chocolate Buttercream',
    'Vanilla Buttercream',
    'Chocolate Ganache',
    'Cream Cheese',
    'Strawberry Buttercream',
  ];

  return (
    <>
    <Head>
        <title>Tastemonials | A Sprinkle of Sugar Cakes</title>
        <meta name="description" content="Read what our happy customers have to say about our cakes" />
      </Head>
    <div className="container mx-auto mt-8 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
    <div className="container mx-auto mt-8 mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-bold mb-8">Place an Order</h1>
        <p className="mb-4">
          Thank you for considering us for your special occasion! Please fill out the form below with your flavor selections and contact information. We will get back to you within 2 business days to discuss your order.
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
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
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
            <label htmlFor="cakeFlavor" className="block text-sm font-medium">
              Cake Flavor
            </label>
            <select
              id="cakeFlavor"
              value={cakeFlavor}
              onChange={(e) => setCakeFlavor(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a cake flavor</option>
              {standardFlavors.concat(premiumFlavors).map((flavor) => (
            <option key={flavor} value={flavor}>
              {flavor}
            </option>
          ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="fillingFlavor" className="block text-sm font-medium">
              Filling Flavor
            </label>
            <select
              id="fillingFlavor"
              value={fillingFlavor}
              onChange={(e) => setFillingFlavor(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a filling flavor</option>
              {fruitFillings.concat(otherFillings).map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="frostingFlavor" className="block text-sm font-medium">
              Frosting Flavor
            </label>
            <select
              id="frostingFlavor"
              value={frostingFlavor}
              onChange={(e) => setFrostingFlavor(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a frosting flavor</option>
              {frostingFlavors.map((flavor) => (
                <option key={flavor} value={flavor}>
                  {flavor}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
          >
            Submit Order
          </button>
        </form>
         </div>
      </div>
    </div>
      </div>
      </>
  );
};
export default Order;

