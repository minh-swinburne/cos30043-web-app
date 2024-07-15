import { defineStore } from 'pinia';

export const useMetaStore = defineStore('meta', {
  state: () => ({
    title: 'PetPawPal',
    description: 'COS30043 Custom Web Application',
    version: '0.1.0',
    availableStoreViews: [],
    storeView: {
      i18n: {
        defaultLocale: 'en-US',
        currency: 'USD',
      },
    },
    storeCode: '',
    storeId: '',
    storeName: '',
    storeViewCode: '',
    storeViewId: '',
    storeViewName: '',
    storeGroups: [],
    taxRules: [],
    taxRule: {},
    taxRates: [],
    taxRate: {},
    countries: [],
    country: {},
    regions: [],
    region: {},
    currencies: [],
    currency: {},
    languages: [],
  }),
  actions: {
    setMeta(meta) {
      Object.assign(this, meta);
    },
    setTitle(name) {
      this.title = name;
    }
  },
});