export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BrimaxHQ</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Modern tech services focused on SaaS Development, Freelancing, and Software Solutions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Freelancing
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Software Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Legal</h4>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} BrimaxHQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 