# order_pizza

## about:

this app is a SPA for ordering pizza. as a prototype used papa Jones.

> test-task for innoscripta

## remaining tasks:
	1. develop sign-in form properly
	3. add combo section
	6. develop contact us section, bonuses, promotions
	7. delete german language and location, develop and add russian instead
	8. ponder mobile schema
	9. "order now" button doesn't work
	14. check if layout has cross-browser support 
	15. check if used the best practices of vue
	16. all functions, variables and class/id should have proper and understandable names in one style
	21. totalPrice in AddonsList component should be resetted after closing component
	22. button addToCart in addon section should appears only after removing any addons or shouldn't anyway?
	23. set impact of removing ingredients on chart and extraAddons field of finalObject
	24. positions in cart should be interactive and availiable for redacting: removing and adding ingreditents
	25. while we met difficulties with pushing fullfilled object from addonsList component, we'll create a base order object in vuex and will set it's fields through pizzasList component directly. Next, we'll create new store object, which will store the whole oreder, which will consist from base/modified objects
	26. remove all rudimentary and legacy code

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

#for using fake api find in my repo fakeServerPizza, download and
$ npm install
$ npm run jsons:server
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
