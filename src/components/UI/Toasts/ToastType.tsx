import { toast } from "react-toastify";

export const SuccessToast = (message: string) => {
  // show success toast
  toast.success(message, {
    position: "bottom-right",
    autoClose: 2600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export const ErrorToast = (message: string) => {
  // show error toast
  toast.error(message, {
    position: "bottom-right",
    autoClose: 2600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
