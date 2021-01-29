import { TOGGLE_SIDE_BAR } from '../actionTypes';

const initialState = {
  isSidebarOpen: true,
};

export default function toggleSidebar(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
}
