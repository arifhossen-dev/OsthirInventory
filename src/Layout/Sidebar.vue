<script setup>
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon, current: true },
  { name: 'Products', href: '/products', icon: FolderIcon, current: false },
  { name: 'Team', href: '/team', icon: UsersIcon, current: false },
  { name: 'Calendar', href: '/calender', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
]
</script>
<template>
  <nav class="flex flex-1 flex-col" aria-label="Sidebar">
    <ul role="list" class="space-y-1 rounded-md pl-2">
      <li v-for="item in navigation" :key="item.name">
        <router-link :to="item.href"
          class="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">

          <component :is="item.icon"
            class="text-gray-400 group-hover:text-indigo-600 h-6 w-6 shrink-0"
            aria-hidden="true" />
          {{ item.name }}
        </router-link>
      </li>
    </ul>
</nav></template>