<script setup>

</script>

<template>
  <section class="md:w-1/2 w-full h-screen">
    <header id="tittle-form" class="flex justify-center my-5">
      <h2 class="font-bold text-2xl">Registra un nuevo <span class="text-tittle-color">producto</span></h2>
    </header>

    <main>
      <form 
        id="form" 
        class="bg-form shadow-md rounded-lg py-10 px-5 mb-10 mx-8"
      >
        <div class="mb-5">
          <label 
            for="name-prod" 
            class="block text-gray-700 uppercase font-bold"
          >
            Nombre del Producto
          </label>
          <input 
            id="name-prod" 
            type="text"
            placeholder="Digite el nombre del producto"
            class="border-2 w-full p-2 mt-2 rounded-md"
          >
        </div>

        <div class="mb-5">
          <label 
            for="type-prod" 
            class="block text-gray-700 uppercase font-bold"
          >
            Tipo del producto
          </label>
          <select 
            id="type-prod"
            class="border-2 w-full p-2 mt-2 rounded-md focus:border-none"
          >
          <option selected>Seleccione una categoría</option>
            <option value="2">Bebidas</option>
            <option value="7">Comestibles</option>
            <option value="10">Dispositivos electronicos</option>
          </select>
        </div>

        <div class="mb-5">
          <label 
            for="cant-prod" 
            class="block text-gray-700 uppercase font-bold"
          >
            Cantidad
          </label>
          <input 
            id="cant-prod" 
            type="text"
            placeholder="Digite la cantidad de productos"
            class="border-2 w-full p-2 mt-2 rounded-md"
          >
        </div>

        <div class="mb-5">
          <label 
            for="price-prod" 
            class="block text-gray-700 uppercase font-bold"
          >
            Precio del Producto
          </label>
          <input 
            id="price-prod" 
            type="text"
            placeholder="Digite el precio del producto por unidad"
            class="border-2 w-full p-2 mt-2 rounded-md"
          >
        </div>

        <div class="mb-5">
          <label 
            for="file-prod" 
            class="block text-gray-700 uppercase font-bold"
          >
            Imagen del producto
          </label>
          <input 
            id="file-prod" 
            type="file"
            placeholder="Digite el precio del producto por unidad"
            class="w-full p-2 mt-2 rounded-md"
          >
        </div>

        <div class="mb-5">
            <label 
              for="coment-product"
              class="block text-gray-700 uppercase font-bold"
            >
              Comentario
            </label>
            <textarea
              id="coment-product"
              placeholder="Registre una descripción del producto"
              class="border-2 w-full h-48 p-2 mt-2 rounded-md resize-none"
            />
        </div>

        <input 
          type="submit"
          class="bg-btn-submit w-full p-3 text-white-color uppercase font-bold cursor-pointer hover:bg-btn-submit-hover"
          value="Registrar Producto"
        >
      </form>
    </main>

  </section>
</template>

<style lang="scss" scoped>

</style>