'use client';

import { useState } from "react"

export default function Register(){

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: ''
    });
    
    const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://172.25.235.81:1337/api/auth/local/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    
        const data = await response.json();
    
        if (response.ok) {
            console.log('Registro exitoso:', data);
            // Aquí puedes redirigir al usuario a otra página o mostrar un mensaje de éxito
          } else {
            console.error('Error en el registro:', data);
            // Aquí puedes mostrar un mensaje de error al usuario
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      };

    return(
        <section className="flex flex-col items-center">
        <p className="text-2xl font-bold">UNIVERSITY</p>
        <form className="w-full max-w-md mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="username" className="block font-medium text-gray-700">UserName</label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="role" className="block font-medium text-gray-700">Role</label>
            <input
                type="text"
                id="role"
                name="role"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.role}
                onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <div className="text-center">
            <span className="text-gray-700">Already have an account?</span>
            <a href="#" className="text-indigo-600 hover:text-indigo-700">Sign in here</a>
          </div>
        </form>
      </section>
    )
}