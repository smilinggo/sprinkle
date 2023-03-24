import Head from 'next/head';
import Link from 'next/link';


const Home = () => {
  return (
    <>
      <Head>
        <title>My Bakery - Home</title>
        <script
          src="https://www.google.com/recaptcha/api.js?render=YOUR_RECAPTCHA_SITE_KEY"
          async
          defer
        ></script>
      </Head>
      <main>
        <section
          className="bg-gradient-to-b from-yellow-200 via-pink-200 to-purple-200 
          text-center py-12 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
            text-gray-900 mb-4"
            >
              Welcome to My Bakery
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8">
              Delicious cakes, pastries, and more - made with love, just for
              you.
            </p>
            <div className="flex justify-center">
              <Link href="/order">
                <a
                  className="text-xl md:text-2xl font-medium text-white bg-gray-800 
                  hover:bg-gray-700 rounded-lg px-6 py-3 md:px-8 md:py-4"
                >
                  Order Now
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                Our Specialties
              </h2>
              <p className="text-lg text-gray-500 mb-8">
                We make all of our specialties fresh daily, with only the best
                ingredients. Check out some of our customer favorites below!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg px-6 py-8">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.4 4.4a1 1 0 00-1.4 0L2 5.6V8a1 1 0 102 0V6.4l.4-.4h4.2l.4.4V8a1 1 0 102 0V6.4l.4-.4h2.2a1 1 0 01.7.3l1 1a1 1 0 010 1.4l-1 1a1 1 0 01-.7.3H6a2 2 0 01-2-2V5.6l-.6-.6zM16 12a1 1 0 10-2 0v1.6l-.4.4h-4.2l-.4-.4V12a1 1 0 00-2 0v1.6l-.4.4H4.4l-.4-.4V12a2 2 0 012-2h8a2 2 0 012 2v1.6l-.4.4H16z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mt-4 mb-2">
                Chocolate Cake
              </h3>
              <p className="text-gray-700 mb-4">
                Rich, moist chocolate cake, topped with creamy chocolate
                frosting.
              </p>
              <div className="flex justify-center">
                <Link href="/menu">
                  <a
                    className="text-lg font-medium text-white bg-gray-800 
                  hover:bg-gray-700 rounded-lg px-6 py-3 md:px-8 md:py-4"
                  >
                    View Menu
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-8">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.4 4.4a1 1 0 00-1.4 0L2 5.6V8a1 1 0 102 0V6.4l.4-.4h4.2l.4.4V8a1 1 0 102 0V6.4l.4-.4h2.2a1 1 0 01.7.3l1 1a1 1 0 010 1.4l-1 1a1 1 0 01-.7.3H6a2 2 0 01-2-2V5.6l-.6-.6zM16 12a1 1 0 10-2 0v1.6l-.4.4h-4.2l-.4-.4V12a1 1 0 00-2 0v1.6l-.4.4H4.4l-.4-.4V12a2 2 0 012-2h8a2 2 0 012 2v1.6l-.4.4H16z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mt-4 mb-2">
                Fruit Tart
              </h3>
              <p className="text-gray-700 mb-4">
                A buttery crust, filled with creamy vanilla custard, and topped
                with fresh fruit.
              </p>
              <div className="flex justify-center">
                <Link href="/menu">
                  <a
                    className="text-lg font-medium text-white bg-gray-800 
                  hover:bg-gray-700 rounded-lg px-6 py-3 md:px-8 md:py-4"
                  >
                    View Menu
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg px-6 py-8">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.4 4.4a1 1 0 00-1.4 0L2 5.6V8a1 1 0 102 0V6.4l.4-.4h4.2l.4.4V8a1 1 0 102 0V6.4l.4-.4h2.2a1 1 0 01.7.3l1 1a1 1 0 010 1.4l-1 1a1 1 0 01-.7.3H6a2 2 0 01-2-2V5.6l-.6-.6zM16 12a1 1 0 10-2 0v1.6l-.4.4h-4.2l-.4-.4V12a1 1 0 00-2 0v1.6l-.4.4H4.4l-.4-.4V12a2 2 0 012-2h8a2 2 0 012 2v1.6l-.4.4H16z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 mt-4 mb-2">
                Croissants
              </h3>
              <p className="text-gray-700 mb-4">
                Flakey, buttery croissants, baked fresh daily.
              </p>
              <div className="flex justify-center">
                <Link href="/menu">
                  <a
                    className="text-lg font-medium text-white bg-gray-800 
                  hover:bg-gray-700 rounded-lg px-6 py-3 md:px-8 md:py-4"
                  >
                    View Menu
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;