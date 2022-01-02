import { toast } from 'react-toastify';

export default (msg) => {
  return toast.success(`${msg}`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    
  });
};
