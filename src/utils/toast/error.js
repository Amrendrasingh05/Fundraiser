import { toast } from 'react-toastify';

export default (error) => {
  return toast.error(`${error}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    style: {
      fontFamily: 'Poppins',
    },
  });
};
