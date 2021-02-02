const initialFilterState = {
  photo: { show: false, clicked: false },
  video: { show: false, clicked: false },
  writing: { show: false, clicked: false },
  threeD: { show: false, clicked: false },
  music: { show: false, clicked: false },
};

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    default:
      return state;

    // Photo Cases
    case "PHOTO_CLICK":
      return Object.assign({}, state, {
        ...state,
        photo: { clicked: !state.photo.clicked, show: !state.photo.clicked },
      });
    case "PHOTO_HOVER":
      return Object.assign({}, state, {
        ...state,
        photo: { show: true, clicked: state.photo.clicked },
      });
    case "PHOTO_LEAVE":
      if (state.photo.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          photo: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          photo: { show: false, clicked: state.photo.clicked },
        });
      }

    // Video Cases
    case "VIDEO_CLICK":
      return Object.assign({}, state, {
        ...state,
        video: { clicked: !state.video.clicked, show: !state.video.clicked },
      });
    case "VIDEO_HOVER":
      return Object.assign({}, state, {
        ...state,
        video: { show: true, clicked: state.video.clicked },
      });
    case "VIDEO_LEAVE":
      if (state.video.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          video: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          video: { show: false, clicked: state.video.clicked },
        });
      }

    // Writing Cases
    case "WRITING_CLICK":
      return Object.assign({}, state, {
        ...state,
        writing: {
          clicked: !state.writing.clicked,
          show: !state.writing.clicked,
        },
      });
    case "WRITING_HOVER":
      return Object.assign({}, state, {
        ...state,
        writing: { show: true, clicked: state.writing.clicked },
      });
    case "WRITING_LEAVE":
      if (state.writing.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          writing: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          writing: { show: false, clicked: state.writing.clicked },
        });
      }

    // ThreeD Cases
    case "THREED_CLICK":
      return Object.assign({}, state, {
        ...state,
        threeD: { clicked: !state.threeD.clicked, show: !state.threeD.clicked },
      });
    case "THREED_HOVER":
      return Object.assign({}, state, {
        ...state,
        threeD: { show: true, clicked: state.threeD.clicked },
      });
    case "THREED_LEAVE":
      if (state.threeD.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          threeD: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          threeD: { show: false, clicked: state.threeD.clicked },
        });
      }

    // Music Cases
    case "MUSIC_CLICK":
      return Object.assign({}, state, {
        ...state,
        music: { clicked: !state.music.clicked, show: !state.music.clicked },
      });
    case "MUSIC_HOVER":
      return Object.assign({}, state, {
        ...state,
        music: { show: true, clicked: state.music.clicked },
      });
    case "MUSIC_LEAVE":
      if (state.music.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          music: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          music: { show: false, clicked: state.music.clicked },
        });
      }
  }
};
export default filterReducer;
