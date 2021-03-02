const initialFilterState = {
  visuell: { show: false, clicked: false },
  akustisch: { show: false, clicked: false },
  haptisch: { show: false, clicked: false },
  verbal: { show: false, clicked: false },
};

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    default:
      return state;

    // Visuell Cases
    case "VISUELL_CLICK":
      return Object.assign({}, state, {
        ...state,
        visuell: {
          clicked: !state.visuell.clicked,
          show: !state.visuell.clicked,
        },
      });
    case "VISUELL_HOVER":
      return Object.assign({}, state, {
        ...state,
        visuell: { show: true, clicked: state.visuell.clicked },
      });
    case "VISUELL_LEAVE":
      if (state.visuell.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          visuell: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          visuell: { show: false, clicked: state.visuell.clicked },
        });
      }

    // Akustisch Cases
    case "AKUSTISCH_CLICK":
      return Object.assign({}, state, {
        ...state,
        akustisch: {
          clicked: !state.akustisch.clicked,
          show: !state.akustisch.clicked,
        },
      });
    case "AKUSTISCH_HOVER":
      return Object.assign({}, state, {
        ...state,
        akustisch: { show: true, clicked: state.akustisch.clicked },
      });
    case "AKUSTISCH_LEAVE":
      if (state.akustisch.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          akustisch: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          akustisch: { show: false, clicked: state.akustisch.clicked },
        });
      }

    // Haptisch Cases
    case "HAPTISCH_CLICK":
      return Object.assign({}, state, {
        ...state,
        haptisch: {
          clicked: !state.haptisch.clicked,
          show: !state.haptisch.clicked,
        },
      });
    case "HAPTISCH_HOVER":
      return Object.assign({}, state, {
        ...state,
        haptisch: { show: true, clicked: state.haptisch.clicked },
      });
    case "HAPTISCH_LEAVE":
      if (state.haptisch.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          haptisch: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          haptisch: { show: false, clicked: state.haptisch.clicked },
        });
      }

    // Verbal Cases
    case "VERBAL_CLICK":
      return Object.assign({}, state, {
        ...state,
        verbal: { clicked: !state.verbal.clicked, show: !state.verbal.clicked },
      });
    case "VERBAL_HOVER":
      return Object.assign({}, state, {
        ...state,
        verbal: { show: true, clicked: state.verbal.clicked },
      });
    case "VERBAL_LEAVE":
      if (state.verbal.clicked === true) {
        return Object.assign({}, state, {
          ...state,
          verbal: { show: true, clicked: true },
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          verbal: { show: false, clicked: state.verbal.clicked },
        });
      }
  }
};
export default filterReducer;
