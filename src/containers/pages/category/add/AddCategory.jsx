import React from 'react';
import './addCategory.scss';
import { Link } from 'react-router-dom';

const AddCategory = () => {
    return (
        <>
            Add category
            <Link style={{ padding: '5px 10px', background: '#00ff8c' }} to={'/category'}>
                Go to Home Category
            </Link>
        </>
    );
};

export default AddCategory;
