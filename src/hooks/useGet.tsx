import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import AppURL from "./../api/AppURL";

const useGet = (
  type: string,
  sessionName = "",
  setInSessionAndSetData: (data, setData) => void | null = null
) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (sessionName.length > 0) {
      if (sessionStorage.getItem(sessionName)) {
        setData(sessionStorage.getItem(sessionName));
        setLoading(false);
      } else {
        axios.get(`${AppURL.BaseURL}/${type}`).then((res) => {
          if (res.status == 200) {
            setInSessionAndSetData(res.data, setData);
            setLoading(false);
          }
        });
      }
    } else {
      axios.get(`${AppURL.BaseURL}/${type}`).then((res) => {
        if (res.status == 200) {
          setData(res.data);
          setLoading(false);
        }
      });
    }
  }, [sessionName, setInSessionAndSetData, type]);
  const isDataReady = data && !loading;

  return { data, loading, isDataReady, setData };
};

export default useGet;
