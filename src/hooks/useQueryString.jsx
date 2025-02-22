import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

function useQueryString() {
  const location = useLocation();
  const queryString = useMemo(
    () => qs.parse(location.search),
    [location.search]
  );

  return queryString; // { page: 1, search: 'deptrai', filter: 'male' }
}

export default useQueryString;