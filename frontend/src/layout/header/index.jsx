import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <h1 className="text-2xl font-bold text-purple-700">MINDNEST</h1>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
          <a href="#demo" className="text-gray-600 hover:text-purple-600">Demo</a>
          <a href="#footer" className="text-gray-600 hover:text-purple-600">Contact</a>
        </nav>
      </header>
  )
}

export default Header