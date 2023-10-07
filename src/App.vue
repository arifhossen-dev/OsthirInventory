<script setup>
import TopBar from './Layout/TopBar.vue'
import Sidebar from './Layout/Sidebar.vue'
</script>

<template>
  <div>
    <TopBar/>
    <div class="flex">

      <div class="w-48 shadow h-screen">
        <Sidebar/>
      </div>
      <div class="w-full min-h-[calc(100vh-100px)] p-5 border-2 border-dashed m-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
