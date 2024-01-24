import axios from "axios"

export const Group_details=[
    {
        "groupId": 1,
        "groupName": "Mugiwara",
        "dateFrom": "2023-01-01",
        "dateTo": "2024-01-10",
        "organizerId": 1,
        "eventName": "One piece",
        "spotName": null,
        "about": "This is a sample event description.",
        "groupStatus": "Active",
        "participantsLimit": 10,
        "participantsCount": 0
    },
    {
        "groupId": 2,
        "groupName": "hokage",
        "dateFrom": "2023-01-01",
        "dateTo": "2024-01-15",
        "organizerId": 2,
        "eventName": "One piece",
        "spotName": null,
        "about": "This is a sample event description.",
        "groupStatus": "Active",
        "participantsLimit": 5,
        "participantsCount": 0
    }
]

export const postGroup=async(value)=>{
    try{
        const response=await axios.post("http://localhost:8080/organizer",value);
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log("error while creating group "+error);
    }
    
}