import { useGlobalContext } from '@/context/GlobalContext';
import React from 'react';
import CardResult from '../CardResult/CardResult';

const CardResultList: React.FC = () => {
    const { hourlyIncome, 
            hoursNeededToPurchase, 
            overviewSelected, 
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

    if (overviewSelected && hourlyIncome && hoursNeededToPurchase && workDaystoPurchase && percentageOfSalary) {
        return (
            <>
                <CardResult title='Rendimento por hora'>
                    Seu rendimento por hora é de <strong className="strongColor">{hourlyIncome}</strong>. Cada hora de trabalho lhe proporciona esse valor para
                    gastar ou economizar. Ao avaliar o custo do item, você está trocando <strong className="strongColor">{workDaystoPurchase}</strong> de trabalho
                    pelo valor que ele oferece.
                </CardResult>
                
                <CardResult title='Tempo de vida'>
                    Baseado no seu salário líquido, o item deve lhe custar um tempo de vida de <strong className="strongColor">{hoursNeededToPurchase}</strong>.
                    Você precisará trabalhar aproximadamente <strong className="strongColor">{workDaystoPurchase}</strong> para pagar este item. 
                    Isso significa que <strong className="strongColor">{percentageOfSalary}%</strong> do seu salário mensal.
                </CardResult>
                
                {annualCostInReais && annualCostInTime && (
                    <CardResult title='Despesa recorrente'>
                        Ao marcar este item como uma despesa recorrente e comprá-lo <strong className="strongColor">{renderRecorrence()}</strong> por mês, você
                        gastará um total de <strong className="strongColor">{annualCostInReais}</strong> anualmente. 
                        Isso equivale a <strong className="strongColor">{annualCostInTime}</strong> trabalhando.
                    </CardResult>
                )}
            </>
        )
    }
}

export default CardResultList;
