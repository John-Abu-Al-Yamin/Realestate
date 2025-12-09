import endPoints from "@/config/categories/endPoints";
import queryKeys from "@/config/categories/queryKeys";
import usePostData from "@/hooks/curdsHook/usePostData";
import { setToken } from "@/Redux/authSlice";
import { setAuthCookie } from "@/services/cookies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, data, error, isPending, isSuccess, isError } = usePostData(
    endPoints.login,
    [queryKeys.login],
    [queryKeys.login]
  );

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data?.data?.data);
      const apiToken = data?.data?.data;
      // const apiUser = data?.data?.data?.user || data?.data?.data?.user || null;
      // const apiUserRole = data?.data?.data?.user?.role || null;
      // const apiUserDepartment = data?.data?.data?.user?.department_name || null;

      console.log("apiToken", apiToken);

      // switch (apiUserDepartment) {
      //   case "الاشغالات":
      //     navigate("/");
      //     break;
      //   case "المراجعة":
      //     navigate("/review-approval");
      //     break;
      //   case "المالية":
      //     navigate("/financial");
      //     break;
      //   default:
      //     navigate("/auth/login");
      // }
      if (apiToken) {
        setAuthCookie(apiToken);

        dispatch(setToken(apiToken));
        // if (apiUser) dispatch(setUser(apiUser));
      }
    }

    if (isError && error) {
      const serverErr =
        error?.response?.data?.errors?.[0] ||
        error?.response?.data?.message ||
        error?.message ||
        "Login failed";
      setErrorMsg(serverErr);
    }
  }, [data, isSuccess, isError, error, navigate, dispatch]);

  return {
    mutate,
    data,
    error,
    isPending,
    isSuccess,
    isError,
    errorMsg,
    setErrorMsg,
  };
};

export default useLogin;
