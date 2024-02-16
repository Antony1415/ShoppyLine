
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