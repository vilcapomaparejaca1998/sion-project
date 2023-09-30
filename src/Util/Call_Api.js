const { VITE_URL_MINIO, VITE_APP_URL, VITE_KEY_CATEGORY, VITE_KEY_ACTIVE } = import.meta.env;

import axios from 'axios';

export const LIST_BUCKETS_MINIO = async () => {
  try {
    const response = await axios.get(`${VITE_URL_MINIO}/ListBucketsMINio`);
    return response.data;
  } catch (error) {
    // Maneja errores aquí
    console.error('Error al obtener datos:', error);
    throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de otra manera aquí.
  }
};


export const GET_ALL_PRODUCTS = async () => {
  const requestBody = {
    "id_categoria": VITE_KEY_CATEGORY,
    "active": VITE_KEY_ACTIVE
  };

  try {
    const response = await axios.post(VITE_APP_URL, requestBody);
    return response.data;
  } catch (error) {
    // Maneja errores aquí
    console.error('Error al obtener datos:', error);
    throw error; // Puedes elegir lanzar el error nuevamente o manejarlo de otra manera aquí.
  }
};
