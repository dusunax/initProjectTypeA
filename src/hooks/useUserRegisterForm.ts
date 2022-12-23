import { useForm } from "react-hook-form";

export default function useRegisterRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const RegisterRHF = () => {
    return { register, handleSubmit, errors };
  };

  return {
    RegisterRHF,
  };
}
