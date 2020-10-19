import * as React from 'react';
// data
import {CoverPackage, coverPackages} from "../../../data";
// components
import {InputGroup, CoverOptionCard, PageButton} from "../../shared/molecules";
import {ApplicationPageLayout} from "./layouts";
import useForm from "../../../hooks/useForm";


export function ApplicationPage() {
    const {updateFormValue, ...formState} = useForm();
    const pages = {
        0: PlanSelectionPage,
        1: PersonalDetailsPage,
        2: ContactDetailsPage,
        3: BeneficiariesPage,
        4: FormReviewAndSubmitPage,
    }
    const totalSteps = Object.keys(pages)
    const [step, setStep] = React.useState(0)
    const submitForm = () => {
        // post method as async func to handle response within ui
    }

    const onForwardButtonClick = () => {
        if (step < totalSteps.length) {
            // validate Step

            // go to next Step
            setStep(step + 1)
        } else {
            submitForm()
        }
    }
    const handleBackButtonClick = () => {
        if (step > 0) {
            setStep(step - 1)
        }
    }

    const validate = async () => {

    }

    const Component = pages[step]

    return (
        <ApplicationPageLayout
            step={step}
            totalSteps={totalSteps}
            onBackButtonClick={handleBackButtonClick}>
            <Component
                {...formState}
                updateFormValue={updateFormValue}
                onForwardButtonClick={onForwardButtonClick}
            />
        </ApplicationPageLayout>
    )
}

function useCoverOptions(): CoverPackage[] {
    return coverPackages
}

interface FormPageProps {
    onForwardButtonClick(): void
    updateFormValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, stateKey: string): void
}
export function PlanSelectionPage({onForwardButtonClick}: FormPageProps) {
    const coverOptions = useCoverOptions()
    const handleOnCoverClick = () => {
        //handles the selection
        //and then moves to the next step
        onForwardButtonClick()
    }
    return <div>
        <h5 className="px-4 font-semibold text-brand-secondary-blue tracking-wide">Choose a plan</h5>
        <p className="px-4 text-sm tracking-wide">Select a plan that best suits your needs.</p>
        <div className="w-full px-4">
            {coverOptions.map((option, key) =>
                <CoverOptionCard
                    key={key}
                    className="my-4"
                    coverPackage={option}
                    onClick={handleOnCoverClick}
                />)
            }
        </div>

    </div>
}

interface PersonalDetailsPageProps extends FormPageProps{
    hasSpouse: boolean,
    firstNames: string,
    lastName: string,
    gender: string,
    idNumber: string,
    spouseFirstNames: string,
    spouseLastName: string,
    spouseGender: string,
    spouseIdNumber: string,
}
export function PersonalDetailsPage({hasSpouse, firstNames, lastName, gender, idNumber, spouseFirstNames, spouseLastName, spouseGender, spouseIdNumber,updateFormValue, onForwardButtonClick}: PersonalDetailsPageProps) {
    return <div className="mb-4">
        <h5 className="px-4 font-semibold text-brand-secondary-blue tracking-wide">Personal details</h5>
        <p className="px-4 text-sm tracking-wide mb-4">Enter your details below.</p>
        <div className="px-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Full Name</h6>
            <InputGroup
                className="mb-4"
                errMsg=""
                error={false}
                name="firstNames"
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="First Names"
                value={firstNames}/>
                <InputGroup
                    className="mb-4"
                    errMsg=""
                    error={false}
                    name="lastName"
                    onChange={(e) => updateFormValue(e, e.target.name)}
                    placeholder="Last Name"
                    value={lastName}/>
        </div>
        <div className="px-4 mb-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Gender</h6>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={(gender === "male")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                Male
            </label>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={(gender === "female")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                Female
            </label>
            <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="gender"
                    value="other"
                    checked={(gender === "other")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
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
                name="idNumber"
                value={idNumber}
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="ID Number"
                />
        </div>
        <div className="px-4 my-4">
            <label>
                <input
                    className="mr-2"
                    type="checkbox"
                    name="hasSpouse"
                    checked={hasSpouse}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                are you married?
            </label>
        </div>
        {hasSpouse &&
            <>
            <div className="px-4">
                <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Spouse's Full Name</h6>
                <InputGroup
                    className="mb-4"
                    errMsg=""
                    error={false}
                    name="spouseFirstNames"
                    onChange={(e) => updateFormValue(e, e.target.name)}
                    placeholder="First Names"
                    value={spouseFirstNames}/>
                <InputGroup
                    className="mb-4"
                    errMsg=""
                    error={false}
                    name="spouseLastName"
                    onChange={(e) => updateFormValue(e, e.target.name)}
                    placeholder="Last Name"
                    value={spouseLastName}/>
            </div>
            <div className="px-4 mb-4">
                <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Spouse's Gender</h6>
                <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="spouseGender"
                    value="male"
                    checked={(spouseGender === "male")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                Male
            </label>
                <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="spouseGender"
                    value="female"
                    checked={(spouseGender === "female")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                Female
            </label>
                <label className="block">
                <input
                    className="mr-4"
                    type="radio"
                    name="spouseGender"
                    value="other"
                    checked={(spouseGender === "other")}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                />
                Other
            </label>
            </div>
            <div className="px-4">
                <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Spouse's Identity Number</h6>
                <InputGroup
                    className="mb-4"
                    errMsg=""
                    error={false}
                    name="spouseIdNumber"
                    value={spouseIdNumber}
                    onChange={(e) => updateFormValue(e, e.target.name)}
                    placeholder="ID Number"
                />
            </div>
        </>
        }
        <PageButton onClick={onForwardButtonClick}>Next</PageButton>
    </div>
}

interface ContactDetailsPageProps extends FormPageProps{
    cellNumber: string,
    emailAddress: string,
    residentialAddress: string,
    postalAddress: string,
}
export function ContactDetailsPage({cellNumber, emailAddress, residentialAddress, postalAddress, updateFormValue, onForwardButtonClick}: ContactDetailsPageProps) {
    return <div className="mb-4">
        <h5 className="px-4 font-semibold text-brand-secondary-blue tracking-wide">Contact details</h5>
        <p className="px-4 text-sm tracking-wide mb-4">Enter your details below.</p>
        <div className="px-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Cell Number</h6>
            <InputGroup
                className="mb-4"
                errMsg=""
                error={false}
                name="cellNumber"
                value={cellNumber}
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="Cell Number"
            />
        </div>
        <div className="px-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Email Address</h6>
            <InputGroup
                className="mb-4"
                errMsg=""
                error={false}
                name="emailAddress"
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="Email Address"
                value={emailAddress}/>
        </div>
        <div className="px-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Physical Address</h6>
            <textarea
                className="resize-y w-full border border-gray-300 bg-white px-4 py-3 placeholder-gray-500 rounded mb-4"
                value={residentialAddress}
                name="residentialAddress"
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="Residential Address"/>
        </div>
        <div className="px-4 mb-4">
            <h6 className="text-sm font-semibold text-brand-primary-blue tracking-wide mb-2">Postal Address</h6>
            <textarea
                className="resize-y mb-4 w-full border border-gray-300 bg-white px-4 py-3 placeholder-gray-500 rounded"
                value={postalAddress}
                name="postalAddress"
                onChange={(e) => updateFormValue(e, e.target.name)}
                placeholder="Postal Address"
            />
            <label>
                <input className="mr-4" type="checkbox" name="sameAsResidential"/>
                same as physical
            </label>
        </div>
        <PageButton onClick={onForwardButtonClick}>Next</PageButton>
    </div>
}

export function BeneficiariesPage({onForwardButtonClick}: FormPageProps) {
    return <div>
        <h5 className="px-4 font-semibold text-brand-secondary-blue tracking-wide">Beneficiary details</h5>
        <p className="px-4 text-sm tracking-wide mb-4">Add all your beneficiaries below.</p>

        <div className="px-4 mb-4">
            <span className="font-semibold text-brand-primary-blue tracking-wide">Add a beneficiary <i className="ml-2 fa fa-plus"/></span>
        </div>
        <PageButton onClick={onForwardButtonClick}>Review</PageButton>
    </div>
}

export function FormReviewAndSubmitPage() {
    return <div>
        <ul>
            <li>Premium is payable till death</li>
            <li>Members benefit from the cover as long as premium are paid</li>
            <li>Premiums are payable monthly in advance</li>
            <li>Should you neglect to pay the premium within 60 days of
                payment date the premiums will be forfeited.</li>
            <li>The policy is effective from inception date stipulated on the
                acceptance letter, as soon as the first premium is paid</li>
            <li>No benefit is payable when death of the assured is caused
                due to natural causes within 6 months of inception</li>
            <li>No benefit is payable when death of the assured occurs as a
                result of suicide within 2 years</li>
            <li>In order for MYKN life to process a claim certain substantiating
                documents are required</li>
            <li>One month waiting period will apply as a result of an accident</li>
        </ul>
        <PageButton type={'submit'} onClick={() => {}}>Submit</PageButton>
    </div>
}