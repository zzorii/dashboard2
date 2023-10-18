import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const History = ({ pageName }) => {
    return (
        <Breadcrumb color="secondary_grey_700" fontSize="14px" fontWeight="500">
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink as={Link} to={`/${pageName.toLowerCase()}`}>
                    {pageName}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
};

export default History;
