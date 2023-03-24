import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | My Bakery</title>
      </Head>
      <div className="bg-yellow-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Family-Owned Bakery
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              hendrerit, ipsum vel tempus fermentum, massa justo lacinia arcu,
              et auctor enim nibh at orci.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Our History
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce hendrerit, ipsum vel tempus fermentum, massa justo
                    lacinia arcu, et auctor enim nibh at orci.
                  </dd>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Our Mission
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce hendrerit, ipsum vel tempus fermentum, massa justo
                    lacinia arcu, et auctor enim nibh at orci.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Team
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <div className="overflow-hidden rounded-lg h-80">
                <img
                  src="https://images.unsplash.com/photo-1579697410491-6d5a6f5da6b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                John Doe
              </h3>
              <p className="text-gray-500">Head Baker</p>
            </div>
            <div className="group relative">
              <div className="overflow-hidden rounded-lg h-80">
                <img
                  src="https://images.unsplash.com/photo-1605312893034-e4f8a59c4a80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                Jane Smith
              </h3>
              <p className="text-gray-500">Pastry Chef</p>
            </div>
            <div className="group relative">
              <div className="overflow-hidden rounded-lg h-80">
                <img
                  src="https://images.unsplash.com/photo-1564564296102-2c86bbf02a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt=""
                  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-500"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                Mike Johnson
              </h3>
              <p className="text-gray-500">Sous Chef</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
