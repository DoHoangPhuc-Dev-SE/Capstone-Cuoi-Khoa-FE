
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileDescription from "@/components/profile/ProfileDescription";
import ProfileSkills from "@/components/profile/ProfileSkills";
import ProfilePortfolio from "@/components/profile/ProfilePortfolio";
import ProfileReviews from "@/components/profile/ProfileReviews";

const MOCK_USER = {
  name: "Đỗ Hoàng Phúc",
  email: "phuc.do@example.com",
  phone: "0901234567",
  avatar: "https://placehold.co/150",
  bio: "Sinh viên CNTT trường Đại học Công nghiệp TPHCM (IUH), đam mê lập trình web full-stack.",
  skill: ["ReactJS", "Next.js", "Tailwind CSS", "Node.js"],
};

const MOCK_PORTFOLIO = [
  {
    id: 1,
    title: "Website bán hàng",
    image: "https://placehold.co/400x300",
  },
  {
    id: 2,
    title: "Landing Page",
    image: "https://placehold.co/400x300",
  },
];

const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Nguyễn Minh Khoa",
    rating: 5,
    comment: "Làm việc chuyên nghiệp, giao diện đẹp và đúng yêu cầu.",
  },
  {
    id: 2,
    name: "Trần Thu Hà",
    rating: 4,
    comment: "Hoàn thành công việc tốt, hỗ trợ nhiệt tình.",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Hồ sơ cá nhân
        </h1>

        <ProfileHeader user={MOCK_USER} />

        <ProfileInfo user={MOCK_USER} />

        <ProfileDescription description={MOCK_USER.bio} />

        <ProfileSkills skills={MOCK_USER.skill} />

        <ProfilePortfolio portfolio={MOCK_PORTFOLIO} />

        <ProfileReviews reviews={MOCK_REVIEWS} />
      </div>
    </main>
  );
}
