import React from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top notification bar */}
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">
        <div className="flex items-center justify-center space-x-4">
          <button className="text-gray-400">←</button>
          <span>Get 10% off on business sign up</span>
          <button className="text-gray-400">→</button>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">ECOMMERCE</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Categories
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Sale
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Clearance
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              New stock
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium">
              Trending
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <span>Help</span>
              <span>Orders & Returns</span>
              {user ? (
                <div className="flex items-center space-x-2">
                  <span>Hi, {user.name}</span>
                  <button 
                    onClick={logout}
                    className="text-blue-600 hover:text-blue-500"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <span>Hi, John</span>
              )}
            </div>
            <Search className="h-5 w-5 text-gray-400" />
            <ShoppingCart className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;