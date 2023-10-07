<script setup>
import axios from 'axios'
import { onBeforeMount, ref } from 'vue';

const products = ref(null)
onBeforeMount(async() => {
  const res = await axios.get('https://dummyjson.com/products')
  products.value = res.data.products
})

</script>
<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="font-bold leading-6 text-gray-900">Product List</h1>
      </div>
    </div>
    <div class="mt-4 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">ID</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">In Stock</th>
                <th scope="col" class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">Unite Price</th>
                <th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="product in products" :key="product.id">
                <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">{{ product.id }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">{{ product.title }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{{ product.stock }}</td>
                <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">${{ product.price }}</td>
                <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <router-link :to="`product/${product.id}`" class="text-indigo-600 hover:text-indigo-900">
                    View Details <span class="sr-only">, {{ product.id }}</span>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>