
import { useAuthStore } from "../app/store/store";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const setRole = useAuthStore((state) => state.setRole);
  const navigate = useNavigate();

  const handleLogin = (role: "customer" | "executor" | "admin", username: string) => {
    setRole(role, username);
    if (role === "customer") navigate("/customer");
    else if (role === "executor") navigate("/executor");
    else if (role === "admin") navigate("/admin");
  };
  return (
    <div>
      <h2>Выберите роль</h2>
      <button onClick={() => handleLogin("customer", 'client1')}>
        {" "}
        Войти как Заказчик{" "}
      </button>
      <button onClick={() => handleLogin("executor", 'executor1')}>
        {" "}
        Войти как Исполнитель{" "}
      </button>
      <button onClick={() => handleLogin("admin", 'admin')}> Войти как Админ </button>
    </div>
  );
};
