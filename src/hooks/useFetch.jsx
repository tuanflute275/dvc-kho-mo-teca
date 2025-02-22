import { useState, useEffect } from "react";

// khi cần call API get dữ liệu từ server mà không cần đẩy vào Redux hoặc 1 state
export default function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url, options);
        const res = await resp.json();
        if (isMounted) setData(res.data);
      } catch (e) {
        if (isMounted) setData([]);
        if (isMounted) setError(e);
      }
    };

    let isMounted = true;
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error };
}