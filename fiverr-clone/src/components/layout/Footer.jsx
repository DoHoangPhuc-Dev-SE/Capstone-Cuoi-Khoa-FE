
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">

        {/* Categories */}
        <div>
          <h3 className="mb-4 font-bold text-gray-900">
            Categories
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/jobs">Graphics & Design</Link></li>
            <li><Link href="/jobs">Programming & Tech</Link></li>
            <li><Link href="/jobs">Digital Marketing</Link></li>
            <li><Link href="/jobs">Video & Animation</Link></li>
          </ul>
        </div>

        {/* For Clients */}
        <div>
          <h3 className="mb-4 font-bold text-gray-900">
            For Clients
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/jobs">Explore Services</Link></li>
            <li><Link href="/orders">My Orders</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* For Sellers */}
        <div>
          <h3 className="mb-4 font-bold text-gray-900">
            For Sellers
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/seller">Become a Seller</Link></li>
            <li><Link href="/seller">Seller Dashboard</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-4 font-bold text-gray-900">
            About Fiverr
          </h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
            <li><Link href="/">Terms of Service</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © 2026 Fiverr Clone. All rights reserved.
          </p>
          <p>
            Built with Next.js and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
