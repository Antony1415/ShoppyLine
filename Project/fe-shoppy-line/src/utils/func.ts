
export const handleClickOutsideComponent = (selectRef: any, valCb: boolean, funcCb: (val: boolean) => void) => {
    const checkIfClickedOutside = (event: any) => {
        if (
            valCb &&
            selectRef.current &&
            !selectRef.current.contains(event?.target)
        ) {
            funcCb(false);
        }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside);
    };
};

export const handleSearch = <T extends string, K extends string>(category1: T, category2: K): boolean => {
    console.log("AKAKA", category1, category2);
    return category1.toLowerCase().includes(category2.toLowerCase());
}