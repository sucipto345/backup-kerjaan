import api from '../lib/axios';

// URL dasar untuk API Laravel, jika diperlukan
const API_URL = 'http://localhost:8000/api/v1/auth';


// Register user
export const register = async (name, name_parent, email, password) => {
  try {
    const response = await api.post('/v1/auth/register', {
      name,
      name_parent,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error saat registrasi' };
  }
};

// Login user
export const login = async (name, name_parent, email, password) => {
  try {
    await getCsrfToken();
    const response = await api.post('/api/v1/auth/login', {
      name,
      name_parent,
      email,
      password,
    }, { withCredentials: true }); // Menyimpan session cookie dari Laravel
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error saat login' };
  }
};

// Logout user
export const logout = async () => {
  try {
    const response = await api.post('/api/v1/auth/logout', {}, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error saat logout' };
  }
};

// Delete user account
export const deleteAccount = async () => {
  try {
    const response = await api.delete('/api/v1/auth/delete-account', { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error saat menghapus akun' };
  }
};
