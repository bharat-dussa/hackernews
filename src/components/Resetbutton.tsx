import React from 'react'

type StateTypes = {
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    setShowResetbtn: React.Dispatch<React.SetStateAction<boolean>>,
    totalFeedLength: number,
    currentArticleLoaded: number
}

export const Resetbutton:React.FC<StateTypes> = ({ setIndex, setShowResetbtn, totalFeedLength, currentArticleLoaded  }) => {
    
    if(currentArticleLoaded > totalFeedLength){
        currentArticleLoaded = totalFeedLength
    }
    return (
        <div className={'collapse_btn'}>
            <div className={'pagination_'}>
                { `${currentArticleLoaded} / ${totalFeedLength} articles loaded`}
            </div>
            <button onClick={() => { setIndex(0); setShowResetbtn(false) }}><img src="https://img.icons8.com/ios-glyphs/26/000000/available-updates.png" alt="reset" /></button>
        </div>
    )
}
