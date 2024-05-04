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


export type SortType = 1 | 2;
// 1 for ascending
// 2 for descending

export interface Sort {
    key: string;
    displayName: string;
    sortDirection: SortType;
}

export type SortLists = Sort[];