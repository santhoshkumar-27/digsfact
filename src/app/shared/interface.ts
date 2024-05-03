export interface CaseList {
    customerName: string;
    customerID: number;
    customerEmail: string;
    customerPhone: number;
    caseID: string;
    createdAt: number;
}


export interface CaseDataResponse {
    count: number
    list: CaseList[]
}