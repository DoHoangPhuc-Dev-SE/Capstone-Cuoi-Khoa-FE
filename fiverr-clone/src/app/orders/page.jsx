'use client';
import React, { useState } from 'react';

export default function OrdersPage() {
  // Dữ liệu mẫu đơn hàng
  const [orders, setOrders] = useState([
    { id: 'ORD-101', client: 'Nguyễn Văn A', status: 'In progress', dueDate: '12h, 9m', service: 'Design Website Next.js', price: '$150' },
    { id: 'ORD-102', client: 'Trần Thị B', status: 'Delivered', dueDate: 'Completed', service: 'Fix Bug ReactJS', price: '$80' },
    { id: 'ORD-103', client: 'Lê Văn C', status: 'Active', dueDate: '2 days', service: 'Landing Page Tailwind', price: '$120' },
  ]);

  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Active', 'In progress', 'Delivered', 'Cancelled'];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quản Lý Đơn Hàng (Orders)</h1>

      {/* Các tab trạng thái đơn hàng */}
      <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab
                ? 'bg-green-600 text-white shadow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Bảng danh sách đơn hàng */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-gray-700 text-sm">
              <th className="py-3 px-4">MÃ ĐƠN</th>
              <th className="py-3 px-4">KHÁCH HÀNG</th>
              <th className="py-3 px-4">DỊCH VỤ</th>
              <th className="py-3 px-4">HẠN CHÓT</th>
              <th className="py-3 px-4">TRẠNG THÁI</th>
              <th className="py-3 px-4 text-right">GIÁ TIỀN</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium text-gray-800">{order.id}</td>
                <td className="py-3 px-4 text-gray-600">{order.client}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">{order.service}</td>
                <td className="py-3 px-4 text-gray-500">{order.dueDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'In progress' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-bold text-gray-800">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}