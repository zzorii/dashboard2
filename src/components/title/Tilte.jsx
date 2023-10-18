import React from 'react';
import { VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const Title = (props) => {
    return (
        <VStack spacing={10}>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.title}</h2>
            {/* <p>{props.desc}</p> */}
        </VStack>
    );
};

export default Title;
