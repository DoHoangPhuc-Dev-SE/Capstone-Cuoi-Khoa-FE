
"use client";

import { useState } from "react";

const MOCK_ORDERS = [
  {
    id: "ORD-101",
    serviceName: "Thiết kế giao diện Landing Page Next.js & Tailwind",
    clientName: "Nguyễn Minh Khoa",
    status: "IN_PROGRESS",
    dueDate: "22/11/2026",
    price: 120,
  },
  {
    id: "ORD-102",
    serviceName: "Xây dựng REST API & tích hợp database",
    clientName: "Trần Thu Hà",
    status: "DELIVERED",
    dueDate: "18/11/2026",
    price: 250,
  },
  {
    id: "ORD-103",
    serviceName: "Tối ưu responsive & sửa lỗi UI ReactJS",
    clientName: "Lê Hoàng Nam",
    status: "COMPLETED",
    dueDate: "10/11/2026",
    price: 80,
  },
];

const STATUS_LABELS = {
  ALL: "Tất cả",
  IN_PROGRESS: "Đang làm",
  DELIVERED: "Đã giao",
  COMPLETED: "Hoàn thành",
};

const STATUS_STYLES = {
  IN_PROGRESS: "bg-blue-100 text-blue-700",
  DELIVERED: "bg-yellow-100 text-yellow-700",
  COMPLETED: "bg-green-100 text-green-700",
};

export default function OrdersPage() {
  const [orders] = useState(MOCK_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const filteredOrders =
    selectedStatus === "ALL"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Quản lý đơn hàng
          </h1>
          <p className="mt-2 text-gray-500">
            Theo dõi và quản lý các đơn hàng dịch vụ của bạn.
          </p>
        </div>

        {/* Status Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {Object.entries(STATUS_LABELS).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedStatus(key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                selectedStatus === key
                  ? "bg-green-600 text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-xs uppercase text-gray-500">
                <th className="px-5 py-4">Mã đơn</th>
                <th className="px-5 py-4">Dịch vụ</th>
                <th className="px-5 py-4">Khách hàng</th>
                <th className="px-5 py-4">Hạn giao</th>
                <th className="px-5 py-4">Giá</th>
                <th className="px-5 py-4">Trạng thái</th>
                <th className="px-5 py-4">Thao tác</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-900">
                      {order.id}
                    </td>

                    <td className="max-w-xs px-5 py-4">
                      <p className="font-medium text-gray-800">
                        {order.serviceName}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      {order.clientName}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      {order.dueDate}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-green-700">
                      ${order.price}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          STATUS_STYLES[order.status] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {STATUS_LABELS[order.status] || order.status}
                      </span>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4">
                      <a
                        href={`/orders/${order.id}`}
                        className="font-medium text-blue-600 transition hover:text-blue-800 hover:underline"
                      >
                        Xem chi tiết
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-gray-500"
                  >
                    Không tìm thấy đơn hàng nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Orders Count */}
        <p className="mt-4 text-sm text-gray-500">
          Hiển thị {filteredOrders.length} / {orders.length} đơn hàng
        </p>
      </div>
    </main>
  );
}
