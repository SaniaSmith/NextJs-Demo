import { users } from "../route";

export async function GET(
    _request: Request, //Using _ on the request because we are not using it for now
    { params}: {params : { id:string } }
) {
    const { id } = await params; //Id in here are refering to the folder name [id]
    const user = users.find((user) => user.id === parseInt(id));
    return Response.json(user);
}

export async function DELETE(
    _request: Request,
    { params}: { params : {id: string} }
) {
    const {id} = await params;
    const user = users.findIndex((user) => user.id === parseInt(id));

    if(user === -1) {
        return new Response("User Not Found", {status: 404})
    }

    users.splice(user, 1);

    return new Response("User Deleted", {status: 200});
}

export async function PATCH(
    _request: Request,
    { params}: { params : {id: string} }
) {
    const { id } = await params;
    const user = users.find((user) => user.id === parseInt(id));

    if(!user) {
        return new Response("User Not Found", {status: 404})
    }

    const updateUser = await _request.json();

    if(updateUser.name) {
        user.name = updateUser.name;
    }

    return new Response("User Updated", {status: 200});

}