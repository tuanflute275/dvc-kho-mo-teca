import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditCategory = () => {
  const { id } = useParams();

  return (
    <>
      Update Category valueId == {id}
      <Link
        style={{ padding: "5px 10px", background: "#00ff8c" }}
        to={"/category"}
      >
        Go to Home Category
      </Link>
    </>
  );
};

export default EditCategory;
