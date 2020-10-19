import * as React from "react";
import {InputGroup} from "../../shared/molecules";


interface BeneficiaryCardPropTypes{
    stateKey: number,
    firstNames: string,
    lastName: string,
    gender: string,
    idNumber: string,
    onChange(e: React.ChangeEvent<HTMLInputElement>, key: number): void
}

export function BeneficiaryCard({stateKey, firstNames, lastName, gender, idNumber, onChange}: BeneficiaryCardPropTypes){
    return (<div className="beneficiary-card">
    <div className="form-page-group">
        <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Full Name</h6>
        <InputGroup
            className="mb-4"
            errMsg=""
            error={false}
            name="beneficiaryFirstNames[]"
            onChange={(e) => {}}
            placeholder="First Names"
            value={firstNames}/>
        <InputGroup
            className="mb-4"
            errMsg=""
            error={false}
            name="beneficiaryLastName[]"
            onChange={(e) => {}}
            placeholder="Last Name"
            value={lastName}/>
    </div>
    <div className="px-4 mb-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Gender</h6>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="beneficiaryGender[]"
                    value="male"
                    checked={(gender === "male")}
                    onChange={(e) => {}}
                />
                Male
            </label>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="beneficiaryGender[]"
                    value="female"
                    checked={(gender === "female")}
                    onChange={(e) => {}}
                />
                Female
            </label>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="beneficiaryGender[]"
                    value="other"
                    checked={(gender === "other")}
                    onChange={(e) => {}}
                />
                Other
            </label>
        </div>
    <div className="px-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Identity Number</h6>
            <InputGroup
                className="mb-4"
                errMsg=""
                error={false}
                name="beneficiaryIdNumber[]"
                value={idNumber}
                onChange={(e) => {}}
                placeholder="ID Number"
            />
        </div>
</div>)
}