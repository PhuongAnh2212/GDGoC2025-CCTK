// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MyApp
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Ứng dụng
          </Link>
          <Link href="/nghiencuu" className="text-gray-700 hover:text-blue-600">
            Nghiên cứu
          </Link>
          <Link href="/gochoctap" className="text-gray-700 hover:text-blue-600">
            Góc học tập
          </Link>
          <Link href="/vechungtoi" className="text-gray-700 hover:text-blue-600">
            Về chúng tôi
          </Link>
        </nav>
      </div>
    </header>
  );
}
