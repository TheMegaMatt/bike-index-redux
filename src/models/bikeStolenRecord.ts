export interface BikeStolenRecord {
    date_stolen: number;
    location: string;
    latitude: number;
    longitude: number;
    theft_description: string;
    locking_description: string;
    lock_defeat_description: string;
    police_report_number: string;
    police_report_department: string;
    created_at: number;
    create_open311: boolean;
    id: number;
}