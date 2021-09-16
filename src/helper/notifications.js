import { store } from "react-notifications-component";

export const notification = (title, type, message) => {
  return store.addNotification({
    title: title,
    type: type,
    message: message,
    insert: "top",
    container: "top-left",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
      onScreen: true,
    },
  });
};
