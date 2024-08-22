<script setup lang="ts">
import SocialIcons from './SocialIcons.vue'
import { computed, useWPMenu } from '#imports'

const year: number = new Date().getFullYear()

const links = [
  { label: 'Home', to: '/', description: 'Home' },
  { label: 'Products', to: '/products', description: 'Products' },
]

onMounted(() => {
  window.onscroll = function () {
    const backToTop = document.querySelector('.back-to-top') as HTMLElement
    if (
      document.body.scrollTop > 100
      || document.documentElement.scrollTop > 100
    ) {
      backToTop.style.display = 'flex'
    } else {
      backToTop.style.display = 'none'
    }
  }
})
</script>

<template>
  <UFooter :links="links">
    <template #left>
      <img
        src="/images/avembleem1.svg"
        alt="Logo Anneleen"
        class="w-20 h-20"
      >
    </template>
    <template #right>
      <SocialIcons colors="text-westar-500 hover:text-white" />
    </template>
    <template #bottom>
      <div class="flex items-center justify-center text-sm text-gray-500">
        <span>&copy; {{ year }} Anneleen Vernaillen</span>
      </div>
    </template>
  </UFooter>
  <UButton
    class="back-to-top hidden items-center justify-center
    bg-gray-500 text-white w-10 h-10
    rounded-md fixed bottom-8 right-8 left-auto z-[999]
    cursor-pointer
    hover:shadow-signUp hover:bg-opacity-80
    shadow-lg
    animate__animated animate__slideInUp"
    to="#main"
  >
    <span class="w-3 h-3 border-t border-l border-white transform rotate-45 mt-[6px]" />
  </UButton>
</template>
