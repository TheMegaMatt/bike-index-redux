export interface BikeComponent {
    id: number;
    description: string;
    serial_number: string;
    component_type: string;
    component_group: string;
    rear?: any;
    front?: any;
    manufacturer_name: string;
    model_name: string;
    year?: number;
}