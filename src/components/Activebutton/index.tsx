import React from 'react'
import { Button } from '../../styled/utils/Button'

interface buttonprops  {
    isActive: boolean,
    name:string,
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Activebutton:React.FC<buttonprops> = (Props: buttonprops) => {
    
    console.log('isActive', Props.isActive)
    return (
        <Button onClick={Props.handleClick} isActive={Props.isActive}>{Props.name}</Button>
    )
}

export default Activebutton;