import { createStore, action } from "easy-peasy";

const store = createStore({
	cart: [],
	addtoCart: action((state, payload) => {
		let cart = state.cart;
		if (cart.filter((product) => product.id === payload.id).length > 0) {
			cart = [];
			state.cart.forEach((product) => {
				if (product.id !== payload.id) {
					cart.push(product);
				}
			});
		} else {
			cart.push(payload);
		}
		state.cart = [...cart];
		localStorage.setItem("cart", JSON.stringify(state.cart));
	}),
	setCart: action((state, payload) => {
		state.cart = payload;
	}),
});

export default store;
