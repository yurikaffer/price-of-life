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
                    Seu rendimento por hora é de <strong className="strongColor">{hourlyIncome}</strong>.
                    Ao avaliar o custo do item e seu rendimento por hora em sua jornada de trabalho,
                    este item está lhe custando <strong className="strongColor">{workDaystoPurchase}</strong> de trabalho.
                </CardResult>

                <CardResult title='Tempo de vida'>
                    Fora a sua jornada de trabalho, esse item deve lhe custar <strong className="strongColor">{hoursNeededToPurchase}</strong>
                    em tempo de vida.
                    Trabalhando <strong className="strongColor">{workDaystoPurchase}</strong> para pagar este item,
                    significa que custa <strong className="strongColor">{percentageOfSalary}%</strong> do seu salário mensal.
                </CardResult>

                {annualCostInReais && annualCostInTime && (
                    <CardResult title='Despesa recorrente'>
                        Se você compra esse item <strong className="strongColor">{renderRecorrence()}</strong> por mês, em um ano
                        você está gastando <strong className="strongColor">{annualCostInReais}</strong>.
                        Isso equivale a <strong className="strongColor">{annualCostInTime}</strong> de trabalho.
                    </CardResult>
                )}
            </>
        )
    }
}

export default CardResultList;
