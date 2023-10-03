'use client'

import { useState } from "react";

export interface ArgData {
    safe: boolean;
    argument: string;
    children: ArgData[];
}

export interface ArgProps {
    arg: ArgData;
}

const Arg = ({ arg }: ArgProps) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="p-2 border border-black">
            argument: {arg.argument}
            <br />
            safe: {arg.safe}
            <br />
            <button className="px-4 py-1 rounded bg-blue-800 text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "close" : "open"}
            </button>
            {isOpen && (
                <div className="pl-4">
                    children: {arg.children.map((child, i) => (
                        <div key={i}>
                            <Arg arg={child} /></div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Arg
