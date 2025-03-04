const { useRef, useEffect } = require('react');

function usePrevious(value) {
    // Với ref, ta có thể lưu trữ bất kỳ giá trị nào, tương tự với  việc thể hiện 1 instance của 1 lớp
    const ref = useRef();

    // lưu giữ giá trị hiện tại vào trong ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Chỉ re-render khi giá trị thay đổi

    // trả về giá trị trước đó
    return ref.current;
}

export default usePrevious;
