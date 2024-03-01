import { useGlobalContext } from '@/context/GlobalContext';
import React, { useState } from 'react';
import CardResult from '../CardResult/CardResult';
import { fetchGeneratedText } from '@/utils/fetchGeneratedText';
import { generatePrompt } from '@/utils/generatePrompt';

const CardAiResultList: React.FC = () => {
    const { salary, workHours, cost, numRecorrence, hourlyIncome, hoursNeededToPurchase,
        workDaystoPurchase, percentageOfSalary, annualCostInReais, annualCostInTime,
        resumeAISelected } = useGlobalContext();

    const [insightTimeLife, setInsightTimeLife] = useState('')

    const handleFetch = async () => {
        if (process.env.NEXT_PUBLIC_USE_OPENAI_API) {
            const prompt = generatePrompt(salary, workHours, cost, numRecorrence, hourlyIncome,
                hoursNeededToPurchase, workDaystoPurchase, percentageOfSalary,
                annualCostInReais, annualCostInTime);

            const result = await fetchGeneratedText(prompt.promptTimeLife);
            setInsightTimeLife(result);
        }
    };

    if (resumeAISelected) {
        handleFetch()
        return (
            <CardResult title='Tempo de vida'>
                {insightTimeLife}
            </CardResult>
        )
    }
}

export default CardAiResultList;