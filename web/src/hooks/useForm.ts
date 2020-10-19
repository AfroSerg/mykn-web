import * as React from "react";

const initialFormState = {
    selectedPlan: "",
    firstNames: "",
    lastName: "",
    gender: "",
    idNumber: "",
    residentialAddress: "",
    postalAddress: "",
    cellNumber: "",
    emailAddress: "",
    hasSpouse: false,
    spouseFirstNames: "",
    spouseLastName: "",
    spouseGender: "",
    spouseIdNumber: "",
}

export default function useForm(){
    const [state, setState] = React.useState(initialFormState)
    const updateFormValue = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, stateKey: string) => {
        setState({...state, [stateKey]: e.target.value})
    }
    return {
        ...state,
        updateFormValue
    }
}