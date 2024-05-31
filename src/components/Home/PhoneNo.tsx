import { useState } from "react";


const PhoneNumber = () => {
    const [phoneNo, setPhoneNo] = useState({phone: '', formatted: ''});
    const isInvalid = isNaN(Number(phoneNo.phone));
    function handleOnChange(event: any) {
        setPhoneNo((prev: {phone: string, formatted: string}) => {
            let value = event.target.value;
            let formattedValue = value;
            if (formattedValue.length >= 3) {
                let list: Array<string> = formattedValue.split('');
                list.splice(0, 0, '(');
                list.splice(4, 0, ')');
                list.splice(8, 0, '-');
                formattedValue = list.join('');
            }
            return {phone: value, formatted: formattedValue};
        });
    }
    return (
        <>
            <input type="text" value={phoneNo.phone} onChange={handleOnChange} />
            <div className="value">
                {!isInvalid && phoneNo.formatted}
                {isInvalid && <span>Please enter valid number</span>}
            </div>
        </>
    );
}

export default PhoneNumber;
