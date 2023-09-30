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
  <header class="bg-blue-customize grid grid-cols-3">
    <img id="logo_img" class="w-56 h-24 mx-5 animate-jump" src="../../assets/Logo_Ecommerce.png" alt="logo_ecommerce">

    <div id="buscador" class="flex flex-col justify-center">
      <form>
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Búsqueda en catálogo" required>
          <button type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
        </div>
      </form>

    </div>

    <div id="btn_login_car" class="flex items-center justify-end">
      <a href="#" class="btn btn-neutra w-fit hover:bg-slate-900 capitalize mx-5">Iniciar Sesión</a>

      <a href="#" class="rounded-md bg-white flex items-center mr-10">
        <lord-icon src="https://cdn.lordicon.com/slkvcfos.json" trigger="hover" colors="primary:#121331,secondary:#08a88a"
          class="w-12 h-11">
        </lord-icon>
      </a>
    </div>
  </header>
</template>

