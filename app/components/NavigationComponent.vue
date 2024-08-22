<script setup lang="ts">
const mainSiteUrl = useRuntimeConfig().public.mainUrl
const { wishlistLink } = useAuth();

const shopLinks = [
  { label: 'Shop', to: '/', description: 'Shop' },
  { label: 'Products', to: '/products', description: 'Products' },
  { label: 'Categories', to: '/categories', description: 'Categories' },
  { label: 'Wishlist', to: wishlistLink, description: 'Wishlist' },
  { label: 'My Account', to: '/my-account', description: 'My Account' },
]
const headerLinks = [
  { label: 'AnneleenVernaillen.com', to: mainSiteUrl, description: 'AnneleenVernaillen.com' },
  ...shopLinks
]

const { isShowingSearch } = useSearching();
</script>

<template>
  <UHeader
    :links="headerLinks"
    :ui="{ wrapper: 'fixed bg-white' }"
  >
    <template #logo>
        &nbsp;
    </template>
    <template #right>
      <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger />
        <div class="flex gap-4 items-center">
          <SignInLink />
          <CartTrigger />
        </div>
    </template>
  </UHeader>
  <Transition name="scale-y" mode="out-in">
    <div
      v-if="isShowingSearch"
      class="container mb-3 -mt-1 sm:hidden" 
    >
      <ProductSearch class="flex w-full" />
    </div>
  </Transition>
</template>

<style>
.mobileMenuButton {
  @apply bg-transparent hover:bg-primary-400
}
.mobileMenuButton span {
  @apply w-8 h-8
}
</style>
