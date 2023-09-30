<script setup>

</script>

<template>
  <section class="md:w-1/2 md:h-screen overflow-y-scroll">
    <header id="tittle-form" class="flex justify-center my-5">
      <h2 class="font-bold text-2xl"> Administrar <span class="text-tittle-color">Productos</span></h2>
    </header>

    <section class="bg-form shadow-md rounded-lg py-10 px-5 mb-10 mx-8">
      <p class="font-bold mb-3 text-gray-700 uppercase">
        ID:
        <span class="font-normal  normal-case">
          3
        </span>
      </p>

      <p class="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span class="font-normal  normal-case">
          Agua Cielo
        </span>
      </p>

      <p class="font-bold mb-3 text-gray-700 uppercase">
        Categoría:
        <span class="font-normal  normal-case">
          Bebida
        </span>
      </p>

      <p class="font-bold mb-3 text-gray-700 uppercase">
        Comentario:
        <span class="font-normal  normal-case">
          Agua Cielo de 500 ml
        </span>
      </p>

      <p class="font-bold mb-3 text-gray-700 uppercase">
        Cantidad:
        <span class="font-normal  normal-case">
          0
        </span>
      </p>

      <p class="font-bold mb-3 text-gray-700 uppercase">
        Precio:
        <span class="font-normal  normal-case">
          S/ 7
        </span>
      </p>

      <div class="grid md:grid-cols-2 gap-5 mt-10">
        <button type="button"
          class="block w-full py-2 px-10 bg-btn-edit text-white-color font-bold uppercase rounded-lg">
          Editar
        </button>

        <button type="button"
          class="block w-full py-2 px-10 bg-btn-delete text-white-color font-bold uppercase rounded-lg">
          Eliminar
        </button>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>