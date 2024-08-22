export default defineAppConfig({
  siteName: 'Shop Anneleen Vernaillen',
  shortDescription: 'This is an example of a WooNuxt store. It provides a modern, fast, and SEO friendly ecommerce store built with Nuxt and WooCommerce.',
  description: `WooNuxt is unmatched when it comes to performance and scalability. Reap the benefits of having a online store that out performs all of your competitors. You can edit components to display your own information just like the one you're reading now.`,
  baseUrl: 'https://shop.anneleenvernaillen.com',
  siteImage: 'https://user-images.githubusercontent.com/5116925/218879668-f4c1f9fd-bef4-44b0-bc7f-e87d994aa3a1.png',
  storeSettings: {
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: false,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
  socials: [
    {
      title: 'Instagram',
      url: 'https://instagram.com/anneleenvernaillen',
      icon: 'mdi:instagram'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anneleen-vernaillen',
      icon: 'mdi:linkedin'
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+32496568738',
      icon: 'mdi:whatsapp'
    }
  ],
  instagram: {
    enabled: true,
    wpPageId: 30201,
    wpBaseUrl: 'https://wpanneleen.vernaillen.com/'
  },
  dateFormat: 'MMMM YYYY',
  mailchimpLink: 'https://mailchi.mp/360379361b88/subscriptionpage',
  ui: {
    primary: 'westar',
    gray: 'dovegray',
    variables: {
      light: {
        background: '255 255 255',
        foreground: '#222200'
      },
      dark: {
        background: '255 255 255',
        foreground: '#222200'
      },
      header: {
        height: '91px'
      }
    },
    header: {
      wrapper: 'absolute left-0 right-0 border-none bg-transparent',
      center: 'mr-5',
      right: 'align-middle justify-start',
      links: {
        base: 'gap-1 font-normal text-dovegray-600 hover:text-[#222222] text-md uppercase',
        inactive: '',
        active: '!font-medium !text-[#222222]'
      },
      panel: {
        wrapper: 'pt-[100px] bg-primary-500'
      },
      button: {
        base: 'absolute left-4 mobileMenuButton'
      }
    },
    aside: {
      links: {
        wrapper: 'px-0 sm:px-32 md:px-48',
        base: 'px-5 py-4 gap-1 block w-full mx-auto text-center uppercase text-dovegray-600 hover:text-[#222222]',
        label: 'text-xl',
        inactive: '',
        active: '!font-medium text-[#222222]'
      }
    },
    landing: {
      section: {
        wrapper: 'py-0 sm:py-0 min-h-[350px] overflow-hidden',
        container: 'max-w-full px-0 sm:px-0 md:px-0 lg:px-0'
      }
    },
    card: {
      ring: 'ring-0',
      rounded: 'rounded-none'
    },
    footer: {
      wrapper: 'bg-black text-white py-14 align-top',
      links: {
        wrapper: 'flex flex-col md:flex-col items-start justify-start gap-1 lg:gap-1',
        base: 'uppercase',
        label: 'text-westar-500',
        inactive: '',
        active: 'text-white font-semibold'
      },
      bottom: {
        left: 'lg:max-w-64'
      }
    }
  }
})
