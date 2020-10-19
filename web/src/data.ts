export interface CoverPackage{
    id: number,
    name: string,
    premium: string,
    benefits: string[],
    conditions: string[],
    maxBeneficiaries: number
}

export const coverPackages: CoverPackage[] = [
    {
        id: 0,
        name: "NUCLEAR PLAN",
        premium: "R29.99 p/m",
        benefits: [
            "R5 000 Cash back",
            "R500 Free airtime benefit",
            "R3 000 Accidental death benefit"
        ],
        conditions: [
            "Single member plan",
            "3 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repatriation into furthest point of any SADC country",
            "48 hour cash payout on successful claim"
        ],
        maxBeneficiaries: 7
    },
    {
        id: 1,
        name: "JOINT PLAN",
        premium: "R79.99 p/m",
        benefits: [
            "R10 000 Cash back",
            "R700 Free airtime benefit",
            "R10 000 Accidental death benefit",
            "R5 000 Grocery benefit"
        ],
        conditions: [
            "Single member plan",
            "6 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repatriation into furthest point of any SADC country",
            "48 hour cash payout on successful claim"
        ],
        maxBeneficiaries: 10
    },
    {
        id: 2,
        name: "EXTENDED PLAN",
        premium: "R149.99 p/m",
        benefits: [
            "R12 500 Cash back",
            "R1 000 Free airtime benefit",
            "R15 000 Accidental death benefit",
            "R9 000 Income protection benefit"
        ],
        conditions: [
            "Family plan, Main member, Spouse and up to 6 children",
            "6 month waiting period",
            "Foreign Nationals with valid passport or work permit may apply",
            "Free repatriation into furthest point of any SADC country",
            "48 hour cash payout on successful claim",
            "Income protection benefit in case of main member death claim"
        ],
        maxBeneficiaries: 14
    }
]