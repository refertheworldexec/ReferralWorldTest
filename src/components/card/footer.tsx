export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-l from-green-500 via-green-100 to-white
     font-light border-t border-gray-200 mt-16"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h5 className="text-2xl font-semibold 900 mb-4">Section</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-2xl font-semibold 900 mb-4">Section</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-2xl  font-semibold 900 mb-4">Section</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:900">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className=" hover:900">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-2xl font-semibold 900 mb-4">
              Subscribe to our newsletter
            </h5>
            <p className=" text-sm mb-3">
              Monthly digest of whats new and exciting from us.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
              />
              <button
                type="button"
                className="rounded-md bg-green- px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-6">
          <p className="500 text-sm">
            © 2025 Company, Inc. All rights reserved.
          </p>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a href="#" className="500 hover:900">
              <i className="bi bi-instagram"></i>{" "}
              {/* Replace with Lucide or Heroicons */}
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="500 hover:900">
              <i className="bi bi-facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
