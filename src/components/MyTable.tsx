import { Payment, columns } from "../components/columns";
import { DataTable } from "../components/data-table";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 99,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728ed52sf",
			amount: 101,
			status: "pending",
			email: "m@example.com",
		},
		{
			id: "728234fed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
	];
}

const data = await getData();

export function MyTable(){
    return(
        <DataTable columns={columns} data={data} />
    )
}
