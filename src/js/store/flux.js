import PropTypes from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			singleProfile: []
		},
		actions: {
			registerUser: (email, password) => {
				//get the store
				const store = getStore();

				// let store = scope.state.store;
				fetch("https://3000-c8a5bc72-aaef-4c6b-9fd6-5915238ad137.ws-us0.gitpod.io/register", {
					method: "POST",
					headers: {
						"Content-type": "application/json;"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				});

				//props.history.push("/register");

				//we have to loop the entire demo array to look for the respective index
				//and change its color

				//reset the global store
				setStore({ store });
			}
		}
	};
};

export default getState;
