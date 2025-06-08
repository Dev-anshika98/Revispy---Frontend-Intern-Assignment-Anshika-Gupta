import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  _id: string;
  name: string;
  description?: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://revispy-frontend-intern-assignment-hc89.onrender.com/api/categories?page=${page}`);
      const { categories, totalPages, userInterests } = response.data;
      
      setCategories(categories);
      setTotalPages(totalPages);
      setSelectedCategories(userInterests);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories(1);
  }, []);

  const handleCategoryToggle = async (categoryId: string) => {
    const newSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];

    setSelectedCategories(newSelectedCategories);

    try {
      await axios.post('https://revispy-frontend-intern-assignment-hc89.onrender.com/api/categories/interests', {
        categoryIds: newSelectedCategories,
      });
    } catch (error) {
      console.error('Error updating interests:', error);
      // Revert the change if API call fails
      setSelectedCategories(selectedCategories);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchCategories(page);
    }
  };

  const renderPagination = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 text-gray-400 disabled:opacity-50"
      >
        &lt;&lt;
      </button>
    );

    // First page and ellipsis
    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 text-gray-600 hover:text-black"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="px-2 text-gray-400">...</span>);
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 ${
            i === currentPage
              ? 'text-black font-semibold'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page and ellipsis
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2\" className="px-2 text-gray-400">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 text-gray-600 hover:text-black"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-gray-400 disabled:opacity-50"
      >
        &gt;&gt;
      </button>
    );

    return pages;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading categories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-lg border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Please mark your interests!</h2>
            <p className="mt-2 text-sm text-gray-600">We will keep you notified.</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">My saved interests!</h3>
            
            <div className="space-y-3">
              {categories.map((category) => (
                <label
                  key={category._id}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category._id)}
                    onChange={() => handleCategoryToggle(category._id)}
                    className="w-5 h-5 text-black border-2 border-gray-300 rounded focus:ring-black focus:ring-2 focus:ring-offset-0"
                  />
                  <span className="text-gray-900 font-medium">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-1 text-sm">
            {renderPagination()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;