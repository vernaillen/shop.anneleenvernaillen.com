<script setup lang="ts">
import type { PropType } from 'vue'
import type { NuxtError } from '#app'

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})
useSeoMeta({
  title: props.error.statusMessage,
  description: props.error.statusMessage
})
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
if (props.error.statusCode !== 404) {
  console.error('Error:', props.error.message)
}
</script>

<template>
  <NuxtLayout>
    <HeaderPlaceholder />
    <NavigationComponent />
    <UMain
      :ui="{ wrapper: 'min-h-[400px]' }"
      class="mt-[93px]"
    >
      <UContainer>
        <UPage>
          error
          <UPageError
            :status="error.statusCode"
            :name="error.statusMessage"
            :message="error.statusCode == 404 ? '' : 'oeps, er liep iets mis'"
            :ui="{ wrapper: 'min-h-[400px]', default: { clearButton: { label: 'Home', size: 'sm' } } }"
          />
        </UPage>
      </UContainer>
    </UMain>
  </NuxtLayout>
</template>
