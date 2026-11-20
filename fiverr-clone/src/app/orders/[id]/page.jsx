
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

const STATUS = {
  IN_PROGRESS: "Đang thực hiện",
  DELIVERED: "Đã bàn giao",
  COMPLETED: "Hoàn thành",
};

export default async function OrderDetailPage({ params }) {
  const { id } = await params;

  const order = MOCK_ORDERS.find((item) => item.id === id);

  if (!order) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 text-center shadow">
          <h1 className="text-2xl font-bold text-gray-800">
            Không tìm thấy đơn hàng
          </h1>
          <a href="/orders" className="mt-4 inline-block text-green-600 hover:underline">
            Quay lại danh sách đơn hàng
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        <a href="/orders" className="mb-6 inline-block text-sm text-green-600 hover:underline">
          ← Quay lại danh sách đơn hàng
        </a>

        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Mã đơn hàng</p>
              <h1 className="text-2xl font-bold text-gray-900">
                {order.id}
              </h1>
            </div>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              {STATUS[order.status] || order.status}
            </span>
          </div>

          <hr className="mb-6" />

          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Thông tin dịch vụ
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Tên dịch vụ</p>
              <p className="font-medium text-gray-800">
                {order.serviceName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Khách hàng</p>
              <p className="font-medium text-gray-800">
                {order.clientName}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Hạn giao hàng</p>
              <p className="font-medium text-gray-800">
                {order.dueDate}
              </p>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex items-center justify-between">
            <span className="text-gray-600">Tổng giá trị đơn hàng</span>
            <span className="text-2xl font-bold text-green-600">
              ${order.price}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
