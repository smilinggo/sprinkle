// pages/tastemonials.tsx
import Head from 'next/head';

const tastimonials = [
  {
    name: 'Phil Johnson',
    text: 'I absolutely loved the cake! It was not only beautiful but also delicious. Thank you!',
  },
  {
    name: 'Lauren Jackson',
    text: 'The cupcakes were a hit at the party! Everyone kept asking where I got them from.',
  },
  {
    name: 'James Green',
    text: 'I can\'t believe how amazing the cake turned out. It was beyond my expectations!',
  },
];

const Tastemonials = () => {
  return (
    <>
      <Head>
        <title>Tastemonials | A Sprinkle of Sugar Cakes</title>
        <meta name="description" content="Read what our happy customers have to say about our cakes" />
      </Head>
      <main>
        <section className="bg-nude py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-medium text-center mb-8">TASTEMONIALS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tastimonials.map((tastimonial, index) => (
                <div key={index} className="bg-beige rounded-lg p-8 shadow-md">
                  <p className="italic mb-4">{tastimonial.text}</p>
                  <p className="font-medium text-right">- {tastimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tastemonials;
