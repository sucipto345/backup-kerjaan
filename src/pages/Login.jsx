import React, { useState } from 'react';
import { login } from '../services/auth'; // Import fungsi login

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        name_parent: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(
                formData.name,
                formData.name_parent,
                formData.email,
                formData.password
            );
            console.log('Login berhasil', response);
            // Lakukan navigasi ke halaman berikutnya atau tampilkan pesan sukses
        } catch (err) {
            setError(err.message || 'Gagal login');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-slate-700 rounded-b-[100px] p-8 flex-1 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
                    <h1 className="text-black text-3xl font-bold mb-4 ml-12">Selamat Datang</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukkan Nama"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Masukkan Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-32 focus:shadow-outline"
                            type="submit"
                        >
                            Masuk
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-white">
                    Belum punya akun? <a href="/daftar" className="underline">Daftar di sini</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
