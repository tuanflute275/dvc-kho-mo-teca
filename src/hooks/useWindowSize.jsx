/* eslint-disable react-hooks/exhaustive-deps */
const { useEffect, useState } = require('react');

function useWindowSize() {
    // kiểm tra nó có phải client hay không
    const isClient = typeof window === 'object';

    // lấy chiều rộng và chiều cao của cửa sổ của trình duyệt đang có
    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined,
        };
    }

    // state quản lý kích thước của trình duyệt
    const [windowSize, setWindowSize] = useState(getSize);

    // effect set kích thước của cửa sổ của trình duyệt
    useEffect(() => {
        if (!isClient) {
            return false;
        }

        // set state kích thước của trình duyệt
        function handleResize() {
            setWindowSize(getSize());
        }

        // lắng nghe sự thay đổi kích thước của trình duyệt và set lại
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // chỉ chạy khi mount và unmount
    return windowSize;
}


export default useWindowSize;