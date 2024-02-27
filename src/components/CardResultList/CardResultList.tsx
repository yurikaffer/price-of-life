import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react';
import CardResult from '../CardResult/CardResult';

const CardResultList: React.FC = () => {
    const { hourlyIncome, 
            hoursNeededToPurchase, 
            resumeSelected, 
            workDaystoPurchase, 
            percentageOfSalary, 
            annualCostInReais, 
            annualCostInTime, 
            numRecorrence, 
        } = useGlobalContext();

    const renderRecorrence = () => {
        if (numRecorrence > 1) {
            return numRecorrence + ' vezes'
        } else {
            return numRecorrence + ' vez'
        }
    }

    if (!resumeSelected && hourlyIncome && hoursNeededToPurchase && workDaystoPurchase && percentageOfSalary) {
        return (
            <>
                <CardResult title='Rendimento por hora'>
                    Seu rendimento por hora é de <strong>{hourlyIncome}</strong>. Cada hora de trabalho lhe proporciona esse valor para
                    gastar ou economizar. Ao avaliar o custo do item, você está trocando <strong>{workDaystoPurchase}</strong> de trabalho
                    pelo valor que ele oferece.
                </CardResult>
                
                <CardResult title='Tempo de vida'>
                    Baseado no seu salário líquido, o item deve lhe custar um tempo de vida de <strong>{hoursNeededToPurchase}</strong>.
                    Você precisará trabalhar aproximadamente <strong>{workDaystoPurchase}</strong> para pagar este item. 
                    Isso significa que <strong>{percentageOfSalary}%</strong> do seu salário mensal.
                </CardResult>
                
                {annualCostInReais && annualCostInTime && (
                    <CardResult title='Despesa recorrente'>
                        Ao marcar este item como uma despesa recorrente e comprá-lo <strong>{renderRecorrence()}</strong> por mês, você
                        gastará um total de <strong>{annualCostInReais}</strong> anualmente. 
                        Isso equivale a <strong>{annualCostInTime}</strong> trabalhando.
                    </CardResult>
                )}
            </>
        )
    }
}

export default CardResultList;
