import {
  ADD_REMINDER_FAIL,
  ADD_REMINDER_REQUEST,
  ADD_REMINDER_SUCCESS,
  EDIT_REMINDER_FAIL,
  EDIT_REMINDER_REQUEST,
  EDIT_REMINDER_SUCCESS,
  PUSH_REMINDER_REQUEST,
  PUSH_REMINDER_SUCESS,
  PUSH_REMINDER_FAIL,
} from "../1 - constants/Constants";

export const reminderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER_REQUEST:
      return { loading: true };
    case ADD_REMINDER_SUCCESS:
      return { loading: false, reminder: action.payload };
    case ADD_REMINDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// const reminderItem = action.payload;
//       const existReminder = state.reminders.find(
//         (r) => r.description === reminderItem.description
//       );
//       if (existReminder) {
//         return {
//           ...state,
//           reminders: state.reminders.map((r) =>
//             r.description === existReminder.description ? reminderItem : r
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           reminders: [...state.reminders, reminderItem],
//         };
//       }

export const editReminderReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_REMINDER_REQUEST:
      return { loading: true };
    case EDIT_REMINDER_SUCCESS:
      return { loading: false, reminder: [...state, action.payload] };
    case EDIT_REMINDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pushReminderReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_REMINDER_REQUEST:
      return { loading: true };
    case PUSH_REMINDER_SUCESS:
      return { loading: false, listReminders: [...state, action.payload] };
    case PUSH_REMINDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
