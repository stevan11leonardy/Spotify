import { PRESS_BACK, CLICK_HANDLER } from '../Actions/actions';

const INITIAL_STATE = {
  istekan: false,
  data: 0,
};
const handle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRESS_BACK:
      return {
        istekan: false,
      };
    case CLICK_HANDLER:
      return {
        istekan: true,
        data: action.index,
      };
    default:
      return state;
  }
};

export default handle;
