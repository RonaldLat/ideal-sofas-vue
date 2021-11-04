import { createStore } from "vuex";
import products from './../assets/products.json'
import footerLinks from './../assets/footer-links.json'
import homeOffice from './../assets/home-office.json'
import categoryNames from './../assets/categoryNames.json'
import details from './../assets/descriptions.json'
import navigation from './../assets/navigation.json'

export default createStore({
  state() {
    return {
      lat: "Ronald Otieno",
      products: products,
      footerLinks: footerLinks,
      homeOffice: homeOffice,
      details: details,
      categoryNames: categoryNames,
      activeCategory: null,
      navigation: navigation,
      sidebarOpen: false,
      cart: [],
      categories: [
        {
          name: "Fabric Sofas",
          img: "/categories/fabric-sofas.jpg",
          link: "fabricSofas"
        },
        {
          name: "Bedrooms",
          img: "/categories/bedrooms.jpg",
          link: "bedrooms",
        },
        {
          name: "Carpets + Rugs",
          img: "/categories/carpets-rugs.jpg",
          link: "carpets+Rugs",
        },
        {
          name: "Dining Sets",
          img: "/categories/dining-sets.jpg",
          link: "diningSets",
        },
        {
          name: "Recliner Sofas",
          img: "/categories/recliner-sofas.jpg",
          link: "reclinerSofas",
        },
        {
          name: "Outdoors",
          img: "/categories/outdoors.jpg",
          link: "outdoors",
        },
        {
          name: "Home Decor",
          img: "/categories/home-decor.jpg",
          link: "homeDecor",
        },
        {
          name: "Bar Counters",
          img: "/categories/bar-counters.jpg",
          link: "barCounters",
        },
        {
          name: "Mattresses",
          img: "/categories/mattresses.jpg",
          link: "mattresses",
        },
        {
          name: "Fabric Corners",
          img: "/categories/fabric-corners.jpg",
          link: "fabricCorners",
        },
        {
          name: "Console Tables",
          img: "/categories/console-tables.jpg",
          link: "consoleTables",
        },
        {
          name: "Leather Sofas",
          img: "/categories/leather-sofas.jpg",
          link: "leatherSofas",
        },
        {
          name: "Kids Rooms",
          img: "/categories/kids-rooms.jpg",
          link: "kidsRooms",
        },
        {
          name: "Executive Desks",
          img: "/categories/executive-desks.jpg",
          link: "executiveDesks",
        },
        {
          name: "Accent Chairs",
          img: "/categories/accent-chairs.jpg",
          link: "accentChairs",
        },
      ],
    };
  },

  mutations:{
    updateActiveCategory(state, payload){
      state.activeCategory = payload
    }
  }

});
