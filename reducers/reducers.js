export default function(state=null, action) {
    switch(action.type){
        case "NEXT_IMAGE_CLICKED":
            return ({
                currentImageID:
                  action.payload.currentImageId + 1 > 3
                  ? 1
                  : action.payload.currentImageId + 1
            });
        case "PREV_IMAGE_CLICKED":
            return ({
                currentImageID:
                action.payload.currentImageId - 1 < 1
                ? 3
                : action.payload.currentImageId - 1
            });
        default:
            return ({
                currentImageID: 1
            });
    }
}