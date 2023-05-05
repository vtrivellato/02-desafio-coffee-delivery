import { useState } from 'react';

import { AmountControlContainer } from './styles';

export function AmountControl() {
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (sumValue: number) => {
        let newAmount = amount + sumValue;

        if (newAmount < 0)
            newAmount = 0

        if (newAmount > 9)
            newAmount = 9

        setAmount(newAmount)
    }

    return(
        <AmountControlContainer>
            <button onClick={() => handleAmountChange(-1)}>-</button>
            <input type="number" name="" id="" value={amount} min={0} max={9} />
            <button onClick={() => handleAmountChange(+1)}>+</button>
        </AmountControlContainer>
    )
}