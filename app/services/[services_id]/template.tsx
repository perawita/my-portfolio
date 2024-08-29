import React from 'react';
import { Navbars } from '@/app/components/navbar';

interface TemplateProps {
    children: React.ReactNode;
}

const ServicesIDTemplate: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div>
            <Navbars />
            <main>{children}</main>
        </div>
    )
}

export default ServicesIDTemplate;
