<script setup lang="ts">
const route = useRoute();
const { isShowingCart, toggleCart } = useCart();
const { isShowingMobileMenu, toggleMobileMenu, addBodyClass, removeBodyClass } = useHelpers();
const { siteName } = useAppConfig();

const closeCartAndMenu = () => {
  toggleCart(false);
  toggleMobileMenu(false);
};

watch([isShowingCart, isShowingMobileMenu], () => {
  isShowingCart.value || isShowingMobileMenu.value ? addBodyClass('overflow-hidden') : removeBodyClass('overflow-hidden');
});

watch(
  () => route.path,
  () => closeCartAndMenu(),
);

useHead({
  titleTemplate: `%s - ${siteName}`,
});
</script>

<template>
  <div id="main">
    <HeaderPlaceholder />
    <NavigationComponent />

    <Transition name="slide-from-right">
      <LazyCart v-if="isShowingCart" />
    </Transition>

    <Transition name="slide-from-left">
      <MobileMenu v-if="isShowingMobileMenu" />
    </Transition>

    <UMain>
      <UPage>
        <HeaderSection class=" mt-[93px]" />
        <UContainer>
          <NuxtPage />
        </UContainer>
      </UPage>
    </UMain>

    <Transition name="fade">
      <div v-if="isShowingCart || isShowingMobileMenu" class="bg-black opacity-25 inset-0 z-40 fixed" @click="closeCartAndMenu" />
    </Transition>

    <FooterComponent />
  </div>
</template>
