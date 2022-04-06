import { costsModel } from "./costsModel"
export interface dataModel {
    orgName?: string,
    orgDesc?: string,
    orgEmail?: string,
    orgPhone?: string,
    orgAddress?: string,
    orgAddressLink?: string,
    orgOpenHours?: string,
    costs?: costsModel
};