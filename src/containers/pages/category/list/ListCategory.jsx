import React from 'react';
import './listCategory.scss';

const ListCategory = () => {
    // const [apiData, setApiData] = useState([]);
    // const [deleteState, setDeleteState] = useState(false);
    // const [keyword, setKeyword] = useState('');

    //pagination
    // const fetchApiData = async () => {
    //     const [res, err] = await categoryService.findAll();
    //     if (res) {
    //       console.log(res.data)
    //       setApiData(res.data);
    //     } else {
    //       console.log(err);
    //     }
    // };

    // const handleChangeValue = async (e) => {
    //     setKeyword(e.target.value);
    // };

    // const handleDelete = async (id) => {
        // console.log(id);
        // const result = await Swal.fire({
        //   title: "Are you sure?",
        //   text: "You won't be able to revert this!",
        //   icon: "warning",
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        //   confirmButtonText: "Yes, delete it!",
        // });
        // if (result.isConfirmed) {
        //   const [res, err] = await categoryService.remove(id);
        //   if (res) {
        //     setDeleteState(!deleteState);
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "Deleted",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //   }
        //   if (err) {
        //     Swal.fire({
        //       position: "top-end",
        //       icon: "error",
        //       title: "Delete failed",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //   }
        // }
    // };

    // useEffect(() => {
    //     fetchApiData();
    // }, [deleteState]);

    return (
        <>
            List Category
            {/* {apiData && apiData.map(item, key) => {
       return (
          item.
       );
      }} */}
        </>
    );
};

export default ListCategory;
