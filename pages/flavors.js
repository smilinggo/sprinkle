import Head from 'next/head';
import {
  standardFlavors,
  premiumFlavors,
  fruitFillings,
  otherFillings,
} from "../components/flavorsData";
const Flavors = () => {
  standardFlavors,
  premiumFlavors,
  fruitFillings,
  otherFillings

  return (
    <>
      <Head>
        <title>Flavors | A Sprinkle of Sugar Cakes</title>
        <meta name="description" content="Our delicious cake flavors" />
      </Head>
      <main>
        <section className="bg-nude py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium text-center mb-8">CAKE FLAVORS</h1>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-beige rounded-lg p-8 shadow-md w-full md:w-1/2">
                <h2 className="font-medium mb-4 text-black">Standard</h2>
                <ul className="list-disc list-inside">
                  {standardFlavors.map((flavor) => (
                    <li key={flavor}>{flavor}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-cream rounded-lg p-8 shadow-md w-full md:w-1/2">
                <h2 className="font-medium mb-4 text-black">Premium</h2>
                <ul className="list-disc list-inside">
                  {premiumFlavors.map((flavor) => (
                    <li key={flavor}>{flavor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-medium mb-8">Filling Flavors</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="bg-beige rounded-lg p-8 shadow-md w-full md:w-1/2">
                <h3 className="font-medium mb-2">Fruit</h3>
                <ul className="list-disc list-inside">
                  {fruitFillings.map((flavor) => (
                <li key={flavor}>{flavor}</li>
              ))}
            </ul>
          </div>
          <div className="bg-cream rounded-lg p-8 shadow-md w-full md:w-1/2">
            <h3 className="font-medium mb-2">All the rest</h3>
            <ul className="list-disc list-inside">
              {otherFillings.map((flavor) => (
                <li key={flavor}>{flavor}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-ivory py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-medium mb-8">Frosting Flavors</h2>
        <div className="bg-nude rounded-lg p-8 shadow-md text-black">
          <h3 className="font-medium mb-2">Standard</h3>
          <ul className="list-disc list-inside">
            <li>Chocolate Buttercream</li>
            <li>Vanilla Buttercream</li>
          </ul>
        </div>
        <div className="bg-ivory rounded-lg p-8 shadow-md text-black mt-8">
          <h3 className="font-medium mb-2">Premium</h3>
          <ul className="list-disc list-inside">
            <li>Chocolate Ganache</li>
            <li>Cream Cheese</li>
            <li>Strawberry Buttercream</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</>
);
};

export default Flavors;