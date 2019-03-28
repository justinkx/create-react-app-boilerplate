import * as GROWL_MESSAGE from '../../types/growlTypes';

export const newGrowlMessage = (message) =>({
  type: GROWL_MESSAGE.GROWL_MESSAGE,
  message
})