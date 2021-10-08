import React from "react";
import { useAppContext } from '../contexts/AppContext';

export default function AuthResolver({ children }) {
  const { isAuth } = useAppContext();
  if (isAuth === undefined) return <p>Resolviendo sesión...</p>
  return children;
}
