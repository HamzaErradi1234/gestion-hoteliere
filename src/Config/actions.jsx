export const addClientAction = (client) => {
    return {
        type: 'Add_client',
        payload: client
    };
};
export const updateClientAction=(newclient)=>{
    return {type:"Update_client", payload:newclient}
}
export const deleteClientAction=(id)=>{
    return {type:"Delete_client",payload:id}
}
