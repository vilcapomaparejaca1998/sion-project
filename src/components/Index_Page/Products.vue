<script setup>
import { LIST_BUCKETS_MINIO } from '../../Util/Call_Api'
import { GET_ALL_PRODUCTS } from '../../Util/Call_Api'
import { ref, onMounted } from 'vue'
const bucketsData = ref([]);
const obtenerDatos = async () => {
  try {
    const data = await GET_ALL_PRODUCTS();
    bucketsData.value = data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

onMounted(() => {
  obtenerDatos();
});
</script>
<template>
<table class="w-full bg-blue-500 text-white mt-12">
    <thead>
      <tr>
        <th class="px-4 py-2">ID</th>
        <th class="px-4 py-2">Nombre</th>   
        <th class="px-4 py-2">Comentario</th>
        <th class="px-4 py-2">Cantidad</th>
        <th class="px-4 py-2">Precio</th>
      </tr>

    </thead>
    <tbody>
      <tr v-for="item in bucketsData" :key="item.id" class="bg-gray-100 hover:bg-blue-200">
        <td class="px-4 py-2 text-black text-center">{{ item.id }}</td>
        <td class="px-4 py-2 text-black text-center">{{ item.nombre }}</td>
        <td class="px-4 py-2 text-black text-center">{{ item.comentario }}</td>
        <td class="px-4 py-2 text-black text-center">{{ item.cantidad }}</td>
        <td class="px-4 py-2 text-black text-center">{{ item.precio }}</td> 
      </tr>
    </tbody>
  </table>
  </template>