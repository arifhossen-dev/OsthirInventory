<script setup>
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
const route = useRoute()

const product = reactive({});
onBeforeMount(async () => {
  const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
  
  Object.assign(product, res.data)
})

</script>
<template>
  <div class="bg-white">
    <div class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="hidden w-full max-w-2xl mx-auto mt-6 sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab v-for="image in product.images" :key="image.id"
                class="relative flex items-center justify-center h-24 text-sm font-medium text-gray-900 uppercase bg-white rounded-md cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }">
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image" alt="" class="object-cover object-center w-full h-full" />
                </span>
                <span
                  :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2']"
                  aria-hidden="true" />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="w-full aspect-h-1 aspect-w-1">
            <TabPanel v-for="image in product.images" :key="image.id">
              <img :src="image" :alt="image.alt" class="object-cover object-center w-full h-full sm:rounded-lg" />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="px-4 mt-10 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.title }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">${{ product.price }}</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                  aria-hidden="true" />
              </div>
              <p class="sr-only">{{ product.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">{{ product.stock }} available</h3>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="border-t divide-y divide-gray-200">
              <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                <h3>
                  <DisclosureButton class="relative flex items-center justify-between w-full py-6 text-left group">
                    <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name
                    }}</span>
                    <span class="flex items-center ml-6">
                      <PlusIcon v-if="!open" class="block w-6 h-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true" />
                      <MinusIcon v-else class="block w-6 h-6 text-indigo-400 group-hover:text-indigo-500"
                        aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="pb-6 prose-sm prose">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
