// Daftar.jsx
import React from 'react';

const Daftar = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-slate-700 rounded-b-[100px] p-8 flex-1 flex flex-col justify-center items-center">
                <form className="w-full max-w-sm bg-white p-6 m-10 rounded-2xl shadow-md">
                <h1 className="text-black text-3xl font-bold mb-4 ml-12">Selamat Datang</h1>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" 
                        type="text" 
                        placeholder="Masukan Nama Panjang"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Nama Orang Tua
                        </label>
                        <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" 
                        type="text" 
                        placeholder="Masukan Nama Ayah/Ibu"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Masukkan Username"
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
                        />
                    </div>
                    <div className="flex items-center justify-be tween">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-32 focus:shadow-outline"
                            type="button"
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