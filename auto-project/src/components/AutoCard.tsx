import React from 'react' ;

interface AutoCardProp {
    id: string,
    brand: string,
    model: string,
    year: number,
}

const AutoCard: React.FC<AutoCardProp> = (props : AutoCardProp) => {
    const { brand, model, year} = props;

    return(
        <div>
            <h1>{brand}</h1>
            <h2>{model}</h2>
            <h3>{year}</h3>
        </div>
    )
}

export default AutoCard