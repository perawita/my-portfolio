import React from "react";
import { Meteors } from "@/components/ui/meteors";

interface Props {
    children: React.ReactNode;
}

export function Background_Meteor({ children }: Props) {
    return (
        <div>
            {children}
            <Meteors number={20} />
        </div>
    );
}
