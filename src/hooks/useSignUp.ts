import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "./useLoginUser";
import { API_URL } from "../api/endpoint";

export type Data = {
  email: string;
  password: string;
  nickname: string;
  createdID: string;
};

const initialData: Data = {
  email: "",
  password: "",
  nickname: "",
  createdID: "",
};

export const useSignUp = () => {
  const navigate = useNavigate();
  const { setLoginUser } = useLoginUser();
  const [data, setData] = useState<Data>(initialData);

  const signup = () => {
    axios.post(`${API_URL}/signup`, data).then((response) => {
      if (response.data) {
        const isAdmin = true;
        setLoginUser({ ...response.data, isAdmin });
        navigate("/");
      }
    });
  };

  return { data, setData, signup };
};
