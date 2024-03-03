import { useForm, SubmitHandler } from "react-hook-form";
import { useAuthStore } from "../stores";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginWithPasswordSchema } from "../schema";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface LoginFormInputs {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const authStore = useAuthStore();

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginWithPasswordSchema)
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
    const res = await authStore.login({
      email: data.email,
      password: data.password
    });
    if (res.success) {
      toast.success("Đăng nhập thành công !", {
        position: "top-right",
        autoClose: 3000

      });
      setTimeout(() => {
        window.location.href = '/product';
      }, 3000);
    } else {
      toast.error("Sai email hoặc mật khẩu !", {
        position: "top-right",
        autoClose: 5000
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit
  };
};

export default useLoginForm;
