export const PRESS_BACK = 'PRESS_BACK';
export const CLICK_HANDLER = 'CLICK_HANDLER';

export function clickBack() {
  return {
    type: PRESS_BACK,
  };
}

export function clickHandler(index) {
  return {
    type: CLICK_HANDLER,
    index,
  };
}
