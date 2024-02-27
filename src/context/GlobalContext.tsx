'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
    isChecked: boolean;
    numRecorrence: number;
    salary: string;
    cost: string;
    workHours: string;
    hourlyIncome: string;
    resumeSelected: boolean;
    hoursNeededToPurchase: string;
    workDaystoPurchase: string;
    percentageOfSalary: string;
    annualCostInReais: string;
    annualCostInTime: string;
    setAnnualCostInTime: (value: string) => void;
    setAnnualCostInReais: (value: string) => void;
    setPercentageOfSalary: (value: string) => void;
    setWorkDaystoPurchase: (value: string) => void;
    setHoursNeededToPurchase: (value: string) => void;
    setResumeSelected: (value: boolean) => void;
    setHourlyIncome: (value: string) => void;
    setSalary: (value: string) => void;
    setCost: (value: string) => void;
    setWorkHours: (value: string) => void;
    setNumRecorrence: (value: number) => void;
    handleCheckboxChange: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [numRecorrence, setNumRecorrence] = useState(1)
    const [salary, setSalary] = useState('');
    const [cost, setCost] = useState('');
    const [workHours, setWorkHours] = useState('');
    const [hourlyIncome, setHourlyIncome] = useState('')
    const [resumeSelected, setResumeSelected] = useState(false)
    const [hoursNeededToPurchase, setHoursNeededToPurchase] = useState('')
    const [workDaystoPurchase, setWorkDaystoPurchase] = useState('')
    const [percentageOfSalary, setPercentageOfSalary] = useState('')
    const [annualCostInReais, setAnnualCostInReais] = useState('')
    const [annualCostInTime, setAnnualCostInTime] = useState('')

    const handleCheckboxChange = () => {
        if (isChecked) {
            setIsChecked(false);
            setNumRecorrence(1);
            setAnnualCostInReais('');
            setAnnualCostInTime('');
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
                setWorkHours,
                hourlyIncome, 
                setHourlyIncome,
                resumeSelected, 
                setResumeSelected,
                hoursNeededToPurchase, 
                setHoursNeededToPurchase,
                workDaystoPurchase, 
                setWorkDaystoPurchase,
                percentageOfSalary, 
                setPercentageOfSalary,
                annualCostInReais, 
                setAnnualCostInReais,
                annualCostInTime, 
                setAnnualCostInTime
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