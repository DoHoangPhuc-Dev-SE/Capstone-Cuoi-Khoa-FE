'use client';
import React from 'react';

export default function SellerDashboard() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Người Bán (Seller)</h1>

      {/* Thẻ thông tin nhanh Seller */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            P
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Đỗ Hoàng Phúc</h2>
            <p className="text-sm text-gray-500">@dohoangphuc • <span className="text-yellow-600 font-semibold">★ Top Rated Seller</span></p>
          </div>
        </div>
        <div className="flex gap-6 text-center">
          <div className="bg-gray-50 px-4 py-2 rounded-lg border">
            <span className="block text-xs text-gray-500">Đơn hoàn thành</span>
            <span className="text-lg font-bold text-gray-800">34</span>
          </div>
          <div className="bg-gray-50 px-4 py-2 rounded-lg border">
            <span className="block text-xs text-gray-500">Điểm thành công</span>
            <span className="text-lg font-bold text-green-600">10/10</span>
          </div>
        </div>
      </div>

      {/* Khu vực thống kê biểu đồ / hiệu suất */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Thu nhập tháng này</h3>
          <div className="text-3xl font-extrabold text-green-600 mb-2">$1,240.00</div>
          <p className="text-sm text-gray-500">Tăng 15% so với tháng trước.</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Hiệu suất phản hồi</h3>
          <div className="text-3xl font-extrabold text-blue-600 mb-2">98%</div>
          <p className="text-sm text-gray-500">Thời gian phản hồi trung bình: Dưới 1 giờ.</p>
        </div>
      </div>
    </div>
  );
}