import React from 'react';
import { Link } from 'react-router';

function Navbar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-xl font-bold text-indigo-600">
                                MyApp
                            </Link>
                        </div>
                        <div className="ml-6 flex space-x-8">
                            <Link
                                to="/"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/products"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Products
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 