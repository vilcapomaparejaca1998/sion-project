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
  <section class="bg-blue-customize w-full flex justify-center">
    <div class="navbar bg-base-100 rounded-lg w-fit my-5">
      <a class="btn btn-ghost normal-case text-xl">Menestras</a>
      <a class="btn btn-ghost normal-case text-xl">Bebidas</a>
      <a class="btn btn-ghost normal-case text-xl">Lacteos</a>
      <a class="btn btn-ghost normal-case text-xl">Aseo personal</a>
      <a class="btn btn-ghost normal-case text-xl">Limpieza</a>
      <a class="btn btn-ghost normal-case text-xl">Comestibles</a>
      <a class="btn btn-ghost normal-case text-xl">Masacotas</a>
      <a class="btn btn-ghost normal-case text-xl">Herramientas</a>
      <a class="btn btn-ghost normal-case text-xl">Dispositivos electronicos</a>
    </div>
  </section>
  <table class="w-full bg-blue-500 text-white">
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
      <td class="px-4 py-2">{{ item.id }}</td>
      <td class="px-4 py-2">{{ item.nombre }}</td>
      <td class="px-4 py-2">{{ item.comentario }}</td>
      <td class="px-4 py-2">{{ item.cantidad }}</td>
      <td class="px-4 py-2">{{ item.precio }}</td>
    </tr>
  </tbody>
</table>
</template>
