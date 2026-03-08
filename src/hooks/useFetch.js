import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("API 請求失敗");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message); // 錯誤在這裡被接住
        setLoading(false); // 記得把 loading 關掉
      });
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
