import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectFilter = () => {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-45">
                    <SelectValue placeholder="SELECT A FILTER" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="recent">Recent</SelectItem>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value='popular'>Popular</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectFilter;