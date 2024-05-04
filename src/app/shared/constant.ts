import { SortLists } from "./interface";

export const sortLists: SortLists = [
    {
        displayName: "Name (A-Z)",
        key: "customerName",
        sortDirection: 1
    },
    {
        displayName: "Name (Z-A)",
        key: "customerName",
        sortDirection: 2
    },
    {
        displayName: "Email (A-Z)",
        key: "customerEmail",
        sortDirection: 1
    },
    {
        displayName: "Email (Z-A)",
        key: "customerEmail",
        sortDirection: 2
    },
    {
        displayName: "Phone (0-9)",
        key: "customerPhone",
        sortDirection: 1
    },
    {
        displayName: "Phone (9-0)",
        key: "customerPhone",
        sortDirection: 2
    },
    {
        displayName: "createdAt (0-9)",
        key: "createdAt",
        sortDirection: 1
    },
    {
        displayName: "createdAt (9-0)",
        key: "createdAt",
        sortDirection: 2
    },{
        displayName: "caseID (A-Z)",
        key: "customercaseID",
        sortDirection: 1
    },
    {
        displayName: "caseID (Z-A)",
        key: "caseID",
        sortDirection: 2
    },
]