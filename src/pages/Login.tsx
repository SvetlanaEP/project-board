import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuthStore } from "../app/store";
import { useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { use } from "react";

export const Login = () => {
  const setRole = useAuthStore((state) => state.setRole)
  const navigate = useNavigate()

  const handleLogin = (role: 'customer' | 'performer' | 'admin') => {
    setRole(role)
    if (role === 'customer') navigate('/')
      else if (role === 'performer') navigate('/performer')
    else if (role === 'admin') navigate ('/admin')
  }
  return (
    <div>
      <h2>Выберите роль</h2>
      <button onClick={()=> handleLogin('customer')}> Войти как Заказчик </button>
      <button onClick={()=> handleLogin('performer')}> Войти как Исполнитель </button>
      <button onClick={()=> handleLogin('admin')}> Войти как Админ </button>
    </div>
  )
}