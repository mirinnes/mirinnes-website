/* eslint-disable import/no-anonymous-default-export */
import { INTRO_TOGGLE_DISPLAY } from './types';

export default (state, action) => {
	switch (action.type) {
		case INTRO_TOGGLE_DISPLAY:
			return {
				...state,
				displayIntro: action.payload,
			};
		default:
			return state;
	}
};
