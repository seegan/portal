export interface IRole {
	id: number,
	name: string,
	privileges: Array<Privileges>;
}
export interface Privileges {

    id: number;
    name: string;
    type: string;
    quantity: number;
}