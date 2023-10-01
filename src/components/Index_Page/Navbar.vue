<template>
  <div>
  <section class="bg-blue-customize w-full flex justify-center">
    <div class="navbar bg-base-100 rounded-lg w-full my-5 flex justify-center">
      <!-- Botón en el extremo izquierdo -->
      <button
        class="btn btn-ghost normal-case text-xl absolute inset-y-35 left-0"
        @click="toggleSidebar"
      >
        <!-- Icono del botón (puedes reemplazarlo con tu propio icono) -->
        <svg
  class="w-6 h-6 fill-current text-white mx-auto"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4 6h16M4 12h16m-7 6h7"
  />
</svg>

      </button>

      <!-- Enlaces de navegación -->
      <router-link to="/products" class="btn btn-ghost normal-case text-xl">PRODUCTOS</router-link>
      <a class="btn btn-ghost normal-case text-xl">INGRESOS</a>
      <a class="btn btn-ghost normal-case text-xl">RETIROS</a>
      <a class="btn btn-ghost normal-case text-xl">EXISTENCIAS</a>
      <a class="btn btn-ghost normal-case text-xl">REPORTES</a>
    </div>

    

    <!-- Barra lateral -->
    <div
      class="sidebar bg-blue-200 w-1/6 h-screen fixed top-0 left-0 transform -translate-x-full transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-0': sidebarOpen }" @click="toggleSidebar"
    >
    <ul class="list-disc pl-4 mt-8">
        <li
          v-for="category in categories"
          :key="category.id"
          class="text-gray-800 mb-2 cursor-pointer hover:text-blue-500 transition-colors"
        >
          {{ category.nombre }}
        </li>
      </ul>
    </div>
  </section>
  
  <div class="carousel-container w-full h-64 relative overflow-hidden">
      <transition
        name="fade"
        mode="out-in"
        :duration="{ enter: 2000, leave: 0 }"
      >
        <div
          :key="currentIndex"
          class="carousel-item w-full mx-auto h-64 absolute transition-opacity duration-2000"
        >
          <img :src="products[currentIndex].imagen_url" class="mx-auto block" alt="Product Image" />
        </div>
      </transition>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a
        v-for="(product, index) in products"
        :key="index"
        :href="'#item' + (index + 1)"
        class="btn btn-xs"
        @click="changeSlide(index)"
      >{{ index + 1 }}</a>
    </div>
  </div>
  <RouterView />
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      sidebarOpen: false,
      categories: [],
      products: [],
      currentIndex: 0,
      currentSlide: 1,
    };
  },
  created() {
    this.fetchImages(); // Llama al método para obtener las imágenes al cargar el componente
    setInterval(this.nextImage, 3000);
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.post("http://25.8.133.221:5000/getAllProducts", {
          "id_categoria": 0,
          "active": 0
        });

        const data = response.data;
        if (data && data.length > 0) {
        this.products = data;
        console.log("Productos cargados:", this.products);
      } else {
        console.error("No se encontraron productos en la respuesta de la API.");
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    nextSlide() {
      // Función para avanzar al siguiente slide
      this.currentSlide += 1;
      if (this.currentSlide > this.products.length) {
        this.currentSlide = 1; // Vuelve al primer slide al llegar al final
      }
    },
    nextImage() {
      // Cambia a la siguiente imagen
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },
    changeSlide(index) {
      // Cambia a la imagen seleccionada por el usuario
      this.currentIndex = index;
    },
    closeSidebarOnOutsideClick(event) {
      if (this.sidebarOpen) {
        this.sidebarOpen = false;
      }
    },
    fetchCategories() {
      // Datos que se enviarán en la solicitud POST (si es necesario)
      const postData = {
        "id_user_responsable": 1
      }; // Puedes incluir datos aquí

      // Realiza una solicitud POST a la API
      axios.post('http://25.8.133.221:5000/getAllCategories', postData)
        .then(response => {
          // Almacena las categorías en la variable "categories"
          this.categories = response.data.content;
        })
        .catch(error => {
          console.error('Error al obtener las categorías:', error);
        });
    },
  },
  mounted() {
    // Llama a la función para obtener las categorías cuando se carga el componente
    this.fetchCategories();
    this.fetchImages();
  },
};
</script>
