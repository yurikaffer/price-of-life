'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
    isChecked: boolean;
    numRecorrence: number;
    salary: string;
    cost: string;
    workHours: string;
    setSalary: (num: string) => void
    setCost: (num: string) => void
    setWorkHours: (num: string) => void
    setNumRecorrence: (num: number) => void
    handleCheckboxChange: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [numRecorrence, setNumRecorrence] = useState(0)

    const [salary, setSalary] = useState('');
    const [cost, setCost] = useState('');
    const [workHours, setWorkHours] = useState('');

    const handleCheckboxChange = () => {
        if (isChecked) {
            setIsChecked(false);
            setNumRecorrence(0);
        } else {
            setIsChecked(true);
        }
    };







    




    return (
        <GlobalContext.Provider value= {{ 
                isChecked, 
                handleCheckboxChange, 
                numRecorrence, 
                setNumRecorrence, 
                salary, 
                setSalary,
                cost, 
                setCost,
                workHours,
                setWorkHours
            }}>
            {children }
        </GlobalContext.Provider>
    );
};


export const useGlobalContext = () => { const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};