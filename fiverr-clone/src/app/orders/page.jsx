'use client';
import React, { useState, useEffect } from 'react';

const MOCK_ORDERS = [
  {
    id: 'ORD-101',
    serviceName: 'Thiết kế giao diện Landing Page Next.js & Tailwind',
    clientName: 'Nguyễn Minh Khoa',
    status: 'IN_PROGRESS',
    dueDate: '22/11/2026',
    price: 120,
  },
  {
    id: 'ORD-102',
    serviceName: 'Xây dựng REST API & tích hợp database',
    clientName: 'Trần Thu Hà',
    status: 'DELIVERED',
    dueDate: '18/11/2026',
    price: 250,
  },
  {
    id: 'ORD-103',
    serviceName: 'Tối ưu responsive & sửa lỗi UI ReactJS',
    clientName: 'Lê Hoàng Nam',
    status: 'COMPLETED',
    dueDate: '10/11/2026',
    price: 80,
  },
];

const STATUS_LABELS = {
  ALL: 'Tất cả',
  IN_PROGRESS: 'Đang làm',
  DELIVERED: 'Đã giao',
  COMPLETED: 'Hoàn thành',
};

export default function OrdersPage() {
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token') || '';
        const response = await fetch('https://fiverrnew.cybersoft.edu.vn/api/thue-cong-viec', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'YOUR_TOKEN_CYBERSOFT',
            'Authorization': `Bearer ${token}`,
          },
        });

        const result = await response.json();
        if (response.ok && Array.isArray(result.content) && result.content.length > 0) {
          setOrders(result.content);
        }
      } catch (error) {
        console.warn('Chưa có token hoặc lỗi API đơn hàng, dùng dữ liệu mẫu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders =
    selectedStatus === 'ALL'
      ? orders
      : orders.filter((item) => item.status === selectedStatus);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Quản Lý Đơn Hàng</h1>
        {loading && <span className="text-sm text-gray-500">Đang đồng bộ...</span>}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(STATUS_LABELS).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSelectedStatus(key)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              selectedStatus === key
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b text-xs uppercase text-gray-600">
              <th className="py-3 px-4">Mã đơn</th>
              <th className="py-3 px-4">Dịch vụ</th>
              <th className="py-3 px-4">Khách hàng</th>
              <th className="py-3 px-4">Hạn giao</th>
              <th className="py-3 px-4">Giá</th>
              <th className="py-3 px-4">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{order.id}</td>
                <td className="py-3 px-4">{order.serviceName}</td>
                <td className="py-3 px-4">{order.clientName}</td>
                <td className="py-3 px-4">{order.dueDate}</td>
                <td className="py-3 px-4 font-semibold text-green-700">${order.price}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {STATUS_LABELS[order.status] || order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}