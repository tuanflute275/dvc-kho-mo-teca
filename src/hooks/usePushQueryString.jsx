import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

function usePushQueryString() {
    const location = useLocation();
    const navigate = useNavigate();

    function handlePushLocationSearch(data) {
        const locationSearch = qs.parse(location.search); // Lấy query hiện tại

        navigate(
            { search: `?${qs.stringify({ ...locationSearch, ...data })}` },
            { replace: true } // Không lưu lịch sử, tránh back lại nhiều lần
        );
    }

    return handlePushLocationSearch;
}

export default usePushQueryString;
