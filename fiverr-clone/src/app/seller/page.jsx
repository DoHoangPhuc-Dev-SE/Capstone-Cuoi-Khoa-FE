'use client';

import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://fiverrnew.cybersoft.edu.vn/api';
const CYBERSOFT_TOKEN = 'YOUR_TOKEN_CYBERSOFT';

const FALLBACK_STATS = {
  sellerName: 'Đỗ Hoàng Phúc',
  sellerHandle: '@dohoangphuc',
  badge: '★ Top Rated Seller',
  completedOrders: 34,
  successScore: '10/10',
  monthlyIncome: '$1,240.00',
  incomeNote: 'Tăng 15% so với tháng trước.',
  responseRate: '98%',
  responseNote: 'Thời gian phản hồi trung bình: Dưới 1 giờ.',
};

function buildAuthHeaders() {
  const headers = {
    tokenCybersoft: CYBERSOFT_TOKEN,
  };

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token') || localStorage.getItem('accessToken');
    if (token) {
      headers.Authorization = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    }
  }

  return headers;
}

function mapSellerStatsFromOrders(ordersData, currentStats) {
  if (!Array.isArray(ordersData) || ordersData.length === 0) {
    return currentStats;
  }

  const totalOrders = ordersData.length;
  const completedCount = ordersData.filter(
    (item) => item?.hoanThanh === true || item?.status === 'COMPLETED'
  ).length;

  return {
    ...currentStats,
    completedOrders: completedCount > 0 ? completedCount : totalOrders,
  };
}

export default function SellerDashboard() {
  const [stats, setStats] = useState(FALLBACK_STATS);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchSellerDashboardData() {
      setLoading(true);
      try {
        const headers = buildAuthHeaders();
        const response = await fetch(`${API_BASE_URL}/thue-cong-viec`, {
          method: 'GET',
          headers,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        const rawList = Array.isArray(result?.content) ? result.content : result;

        if (isMounted) {
          setStats((prev) => mapSellerStatsFromOrders(rawList, prev));
          setUsingFallback(false);
        }
      } catch {
        if (isMounted) {
          setStats(FALLBACK_STATS);
          setUsingFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchSellerDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const avatarLetter = stats.sellerName?.trim()?.charAt(0)?.toUpperCase() || 'P';

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Người Bán (Seller)
        </h1>
        {usingFallback && !loading && (
          <span className="text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full w-fit">
            Đang hiển thị dữ liệu mẫu (chưa có token xác thực)
          </span>
        )}
      </div>

      {/* Thẻ thông tin nhanh Seller */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
            {avatarLetter}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{stats.sellerName}</h2>
            <p className="text-sm text-gray-500">
              {stats.sellerHandle} •{' '}
              <span className="text-yellow-600 font-semibold">{stats.badge}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-6 text-center">
          <div className="bg-gray-50 px-4 py-2 rounded-lg border">
            <span className="block text-xs text-gray-500">Đơn hoàn thành</span>
            <span className="text-lg font-bold text-gray-800">
              {loading ? '...' : stats.completedOrders}
            </span>
          </div>
          <div className="bg-gray-50 px-4 py-2 rounded-lg border">
            <span className="block text-xs text-gray-500">Điểm thành công</span>
            <span className="text-lg font-bold text-green-600">
              {stats.successScore}
            </span>
          </div>
        </div>
      </div>

      {/* Khu vực thống kê biểu đồ / hiệu suất */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Thu nhập tháng này
          </h3>
          <div className="text-3xl font-extrabold text-green-600 mb-2">
            {loading ? '...' : stats.monthlyIncome}
          </div>
          <p className="text-sm text-gray-500">{stats.incomeNote}</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Hiệu suất phản hồi
          </h3>
          <div className="text-3xl font-extrabold text-blue-600 mb-2">
            {loading ? '...' : stats.responseRate}
          </div>
          <p className="text-sm text-gray-500">{stats.responseNote}</p>
        </div>
      </div>
    </div>
  );
}