import React from 'react';
import Container from '../shared/Container/Container';
import { categories } from './categoriesData';
import CategoriesBox from './CategoriesBox';

const Categories = () => {
    return (
        <Container>
            <div className='flex flex-row justify-between overflow-x-auto'>
                {
                    categories.map(item => <CategoriesBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                    ></CategoriesBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;