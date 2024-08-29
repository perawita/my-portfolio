import React from 'react';
import { Navbars } from '@/app/components/navbar';

interface TemplateProps {
    children: React.ReactNode;
}

const ServicesTemplate: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div>
            <Navbars disable="Services"/>
            <main>{children}</main>
        </div>
    )
}

export default ServicesTemplate;
