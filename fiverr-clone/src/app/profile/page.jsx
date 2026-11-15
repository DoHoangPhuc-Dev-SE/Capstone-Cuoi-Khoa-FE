'use client';
import React, { useState } from 'react';

export default function ProfilePage() {
  // Tạo state mẫu để quản lý thông tin user trước khi kết nối API
  const [userInfo, setUserInfo] = useState({
    name: 'Đỗ Hoàng Phúc',
    email: 'phuc.do@example.com',
    phone: '0901234567',
    skill: ['ReactJS', 'Next.js', 'Tailwind CSS', 'Node.js'],
    bio: 'Sinh viên CNTT trường Đại học Công nghiệp TPHCM (IUH), đam mê lập trình web full-stack.',
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hồ Sơ Cá Nhân</h1>
      
      {/* Khung thông tin chính */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start border border-gray-100">
        {/* Avatar */}
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-500">
          <img 
            src="https://via.placeholder.com/150" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Chi tiết thông tin */}
        <div className="flex-1 w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700">{userInfo.name}</h2>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition">
              Chỉnh sửa hồ sơ
            </button>
          </div>

          <p className="text-gray-600 mb-2"><strong>Email:</strong> {userInfo.email}</p>
          <p className="text-gray-600 mb-2"><strong>Số điện thoại:</strong> {userInfo.phone}</p>
          <p className="text-gray-600 mb-4"><strong>Giới thiệu:</strong> {userInfo.bio}</p>

          {/* Kỹ năng */}
          <div>
            <strong className="block text-gray-700 mb-2">Kỹ năng:</strong>
            <div className="flex flex-wrap gap-2">
              {userInfo.skill.map((item, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium border border-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}