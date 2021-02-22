import React, { useReducer } from 'react';
import mirinnesContext from './mirinnesContext';
import mirinnesReducer from './mirinnesReducer';
import { INTRO_TOGGLE_DISPLAY } from './types';

const MirinnesState = ({ children }) => {
	const initialState = {
		displayIntro: true,
		loading: false,
	};

	const [state, dispatch] = useReducer(mirinnesReducer, initialState);

	// Stub func
	const toggleDisplayIntro = () => {
		console.log('[toggleDisplayIntro] state', state);
		console.log(
			'[toggleDisplayIntro] !state.displayIntro',
			!state.displayIntro
		);

		dispatch({ type: INTRO_TOGGLE_DISPLAY, payload: !state.displayIntro });
	};

	// Stub func
	const stubFunc = () => dispatch({});

	// Set Loading
	// const setLoading = () => dispatch({ type: SET_LOADING });

	// Una vez definidas las cosas que van a ser globales por el context (lineas anteriores)
	// Aca pone a disposicion todas las cosas que va a dar el mirinnesContext, pero mediante el mirinnesState.
	return (
		<mirinnesContext.Provider
			value={{
				loading: state.loading,
				displayIntro: state.displayIntro,
				stubFunc: stubFunc,
				toggleDisplayIntro,
			}}
		>
			{children}
		</mirinnesContext.Provider>
	);
};

export default MirinnesState;
