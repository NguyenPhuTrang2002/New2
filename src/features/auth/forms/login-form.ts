import { useForm, SubmitHandler } from "react-hook-form";
import { useAuthStore } from "../stores";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginWithPasswordSchema } from "../schema";
import { toast } from "../../../components/toast/toastmanager";


// import { useNotification } from "../../../common/helpers";

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

  // const { showSuccessNotification, showErrorNotification } = useNotification();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data: any) => {
    const res = await authStore.login({
      email: data.email,
      password: data.password
    });
    if (res.success) {
      // alert('Login successful')
      toast.show({
        title: "Success",
        content: "Đăng nhập thành công !",
        duration: 6000,
      });
      setTimeout(() => {
        window.location.href = '/product';
      }, 5000);

    } else {
      toast.show({
        title: "Error",
        content: "Sai email hoặc mật khẩu !",
        duration: 6000,
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