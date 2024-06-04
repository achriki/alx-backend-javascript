const hasValuesFromArray = (set, startString) => {
    if (
        !set && !startString && !(set instanceof Set) && typeof startString !== 'string'
    ) {
        return '';
    }

    const parts = [];

    for (const value of set.values()) {
        if (value.startsWith(startString)) {
            const valueSub = value.substring(startString.length);

            if(valueSub && value !== valueSub) {
                parts.push(valueSub);
            }
        }
    }

    return parts.join('-');
}

export default hasValuesFromArray;