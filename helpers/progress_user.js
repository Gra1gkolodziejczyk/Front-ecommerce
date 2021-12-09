export  const getBeautifulPercent = (nbDone, nbElements, coeff) => {
    let percentage = (nbDone / nbElements) * 100;
    let beautifulPercent;

    if (coeff) {
        beautifulPercent = Math.ceil(percentage / coeff);
    } else {
        beautifulPercent = Math.ceil(percentage);
    }

    return beautifulPercent;
}


export const getProgressPercentForInputs = (arrayInputs, coeff) => {
    let nbDone = 0;
    arrayInputs.forEach((info) => {
        if (info !== null && info !== undefined && info !== '') {
            nbDone += 1;
        }
    });
    let progressPercent = getBeautifulPercent(nbDone, arrayInputs.length, coeff);

    return progressPercent;
}

export const getPercentProgress = (state) => {
    let percentProgress;
    let legalInfoProgress = state.progressPercent['legal-informations'];
    
    if (state.corporateMode === 0) {
        percentProgress = legalInfoProgress['legal-representative'] + legalInfoProgress['kyc'];
    } else {
        percentProgress = legalInfoProgress['structure'] + legalInfoProgress['kyc'];
    }

    return percentProgress
}