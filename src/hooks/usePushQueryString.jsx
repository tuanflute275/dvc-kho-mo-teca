import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';

function usePushQueryString() {
  const location = useLocation();
  const history = useHistory();

  function handlePushLocationSearch(data) {
    const locationSearch = qs.parse(location.search);

    history.push({ search: `?${qs.stringify({ ...locationSearch, ...data })}` });
 }

  return handlePushLocationSearch;
}

export default usePushQueryString;