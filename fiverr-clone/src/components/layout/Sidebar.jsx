
import Link from "next/link";

const menuItems = [
  {
    title: "My Profile",
    href: "/profile",
  },
  {
    title: "My Orders",
    href: "/orders",
  },
  {
    title: "Seller Dashboard",
    href: "/seller",
  },
  {
    title: "Manage Services",
    href: "/seller",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-full rounded-lg border border-gray-200 bg-white p-5 md:w-64">
      <h2 className="mb-5 text-lg font-bold text-gray-900">
        My Account
      </h2>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block rounded-md px-4 py-3 text-sm text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
