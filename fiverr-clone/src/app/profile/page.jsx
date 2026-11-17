'use client';
import React, { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState({
    name: 'Đỗ Hoàng Phúc',
    email: 'phuc.do@example.com',
    phone: '0901234567',
    skill: ['ReactJS', 'Next.js', 'Tailwind CSS', 'Node.js'],
    bio: 'Sinh viên CNTT trường Đại học Công nghiệp TPHCM (IUH), đam mê lập trình web full-stack.',
    avatar: 'https://via.placeholder.com/150'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Lấy token và thông tin user đã lưu khi đăng nhập thành công từ localStorage
        const token = localStorage.getItem('token') || '';
        const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
        const userId = userLocalStorage.id || userLocalStorage._id;

        // Nếu có userId, gọi đúng endpoint /api/users/{id} theo Swagger của Cybersoft
        const endpoint = userId 
          ? `https://fiverrnew.cybersoft.edu.vn/api/users/${userId}`
          : 'https://fiverrnew.cybersoft.edu.vn/api/users';

        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'YOUR_TOKEN_CYBERSOFT', // Nhớ thay bằng token Cybersoft nhóm cung cấp
            'Authorization': `Bearer ${token}`
          },
        });

        const result = await response.json();
        
        if (response.ok && result.content) {
          setUserInfo({
            name: result.content.name || result.content.hoTen,
            email: result.content.email,
            phone: result.content.phone || result.content.soDt,
            skill: result.content.skill || ['ReactJS', 'Next.js', 'Tailwind CSS'],
            bio: result.content.bio || 'Sinh viên CNTT trường Đại học Công nghiệp TPHCM (IUH).',
            avatar: result.content.avatar || 'https://via.placeholder.com/150'
          });
        } else {
          // Fallback nếu API yêu cầu token hợp lệ nhưng chưa đăng nhập
          console.warn('API phản hồi chưa hợp lệ, dùng dữ liệu mẫu tạm thời.');
        }
      } catch (err) {
        console.error('Lỗi kết nối API Swagger:', err);
        setError('Không thể kết nối đến máy chủ API.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Hồ Sơ Cá Nhân</h1>
      
      {/* Khung thông tin chính */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center md:items-start border border-gray-100">
        {/* Avatar */}
        <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-500">
          <img 
            src={userInfo.avatar} 
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
              {userInfo.skill && userInfo.skill.map((item, index) => (
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