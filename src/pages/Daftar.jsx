import React, { useState } from 'react';
import { register } from '../services/auth'; // Import fungsi register

const Daftar = () => {
    const [formData, setFormData] = useState({
        name: '',
        name_parent: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(
                formData.name,
                formData.name_parent,
                formData.email,
                formData.password
            );
            setSuccess('Registrasi berhasil');
            console.log('Registrasi berhasil', response);
            // Tampilkan pesan sukses atau arahkan ke halaman login
        } catch (err) {
            setError(err.message || 'Gagal registrasi');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-slate-700 rounded-b-[100px] p-8 flex-1 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 m-10 rounded-2xl shadow-md">
                    <h1 className="text-black text-3xl font-bold mb-4 ml-12">Selamat Datang</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {success && <p className="text-green-500 mb-4">{success}</p>}
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukan Nama Panjang"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name_parent">
                            Nama Orang Tua
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name_parent"
                            type="text"
                            placeholder="Masukan Nama Ayah/Ibu"
                            value={formData.name_parent}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Masukkan Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
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
                            Daftar
                        </button>
                    </div>
                    <p className="mt-4 text-black">
                        Sudah punya akun? <a href="/login" className="underline">login di sini</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Daftar;
