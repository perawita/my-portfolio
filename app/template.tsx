import React from 'react';
import { Navbars } from '@/app/components/navbar';

interface TemplateProps {
    children: React.ReactNode;
}

const HomeTemplate: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div>
            <Navbars disable="Home" />
            <main>{children}</main>
        </div>
    )
}

export default HomeTemplate;
