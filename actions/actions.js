import {NEXT_IMAGE_CLICKED, PREV_IMAGE_CLICKED} from './actionTypes';

export const nextImage = currentImageId => {
    return ({
      type: NEXT_IMAGE_CLICKED,
      payload: {
        currentImageId: currentImageId
      }
    });
  };

  export const prevImage = currentImageId => {
      return ({
        type: PREV_IMAGE_CLICKED,
        payload: {
            currentImageId: currentImageId
        }
      });
  };