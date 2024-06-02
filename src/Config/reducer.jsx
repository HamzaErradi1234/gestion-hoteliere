const initialState = {
    clients: [
        // { id: 1, nom: "AAAA", prenom: "mohammed", email: "mohammed@gmail.com", password: "1234abcd" },
        // { id: 2, nom: "BBBB", prenom: "ahmed", email: "ahmed@gmail.com", password: "abcd1234" }
    ]
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_client':
            return {
                ...state,
                clients: [...state.clients, action.payload]
            };
        case "Update_client":
            return {
                ...state,
                clients: state.clients.map(client => {
                    if (client.id === action.payload.id) {
                        return {
                            ...client,
                            nom: action.payload.nom,
                            prenom: action.payload.prenom,
                            email: action.payload.email,
                            password: action.payload.password
                        };
                    }
                    return client;
                })
            };
        case "Delete_client":
            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.payload)
            };
            
        default:
            return state;
    }
};

export default reducer;
