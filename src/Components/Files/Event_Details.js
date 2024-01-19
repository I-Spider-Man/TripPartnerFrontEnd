import axios from "axios";

export const Event_Details=[{
        event_id:1,
        event_name:"Candle Light India",
        event_happening:"6th JAN, 1AM",
        event_discription:"Candlelight India is a one of a kind immersive concert experience. It is curated to evoke a sense of wonder in concert goers by taking you on a magical journey where music and ambience converge to",
        event_address:"Good Shepherd Auditorium\nMuseum Rd, Opp Patricks Church, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka",
        event_image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00379779-wunhsyzzrr-landscape.jpg",
        image_alt:"Candle Light India A Tribute To ARR"
      },{event_id:2,
        event_name:"Stand up Comedy Live",
        event_happening:"7–29 Jan",
        event_discription:"Comedy Shots presents Wild Comedy Nights. Come on down with friends, family, enemies, random strangers,or by yourself for an absurd, edgy, and funny evening as these Bangalore regulars try to...",
        event_address:"Ground Floor, Cafe Reset, 6th Cross Rd, next to Koramangala club, 6th Block, Koramangala, Bengaluru, Karnataka",
        event_image:"https://img.freepik.com/free-vector/stand-up-comedy-logo-with-microphone_1308-95780.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704672000&semt=ais",
        image_alt:"Stand up Comedy Live at Koramangala"
      },{event_id:3,
        event_name:"Ladies Night | Sherlock Pub",
        event_happening:"Thu, 4 Jan, 9–11 pm",
        event_discription:"Every Thursday is the most fun night of the week at Sherlocks. Kammanahattan Ladies Night withDJRohitBangalore Come Groove to the Best of Hip Hop, Afro, and Electronic Dance music.",
        event_address:"Sherlocks Pub Kammanahalli\n408, 5th Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka",
        event_image:"https://res.cloudinary.com/https-highape-com/image/upload/q_auto:eco,f_auto,h_380/v1683753675/i6nx3hh2suecgphnshtk.png",
        image_alt:"Candle Light India A Tribute To ARR"
      },{event_id:4,
        event_name:"Pyaar Ka Punch @ HSR",
        event_happening:"7 Jan, 11 pm – 21 Jan, 11 pm",
        event_discription:"Book online tickets for Pyaar Ka Punch @ Koramangala in Bengaluru on BookMyShow which is a comedy-shows event. happening at The Humble Pie: Bengaluru",
        event_address:"The Humble Pie\nShop no 1, 1197 Falak Complex, Sector 2, HSR Layout, Bengaluru, Karnataka",
        event_image:"https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-pyaar-ka-punch-koramangala-0-2022-11-15-t-8-59-53.jpg",
        image_alt:"Pyaar Ka Punch @ HSR"
      },{event_id:5,
        event_name:"Karaoke Koramangala Evenings",
        event_happening:"1 Jan, 9:30 pm – 11 Jan, 12:30 am",
        event_discription:"Come for an Evening of Karaoke in the busiest street of Koramangala with tickets redeemable on Food(Only 300Rs). Booze is not served at the venue. Restaurant people are singers and will start the...",
        event_address:"Good Shepherd Auditorium\nMuseum Rd, Opp Patricks Church, Shanthala Nagar, Richmond Town, Bengaluru, Karnataka",
        event_image:"https://assets-in.bmscdn.com/discovery-catalog/events/et00338640-svbbyufxvt-landscape.jpg",
        image_alt:"Karaoke Koramangala Evenings"
      },{event_id:6,
        event_name:"Comics at Cubbon",
        event_happening:"6 Jan, 3:00 pm – 28 Jan, 3:15 pm",
        event_discription:"NOTE: THE MIC HAPPENS INSIDE CUBBON PARK, OPPOSITE TO BAND STAND, USUALLY PEOPLE END UP ON THE OUTSIDE GATE OF HIGH COURT. IF YOU REACH THE OUTSIDE GATE, ASK FOR DIRECTIONS TO HIGH COURT ON THE",
        event_address:"High Court of Karnataka\nXHHV+Q4Q, opposite to Vidhana Soudha, Ambedkar Veedhi, Bengaluru, Karnataka",
        event_image:"https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-comics-at-cubbon-0-2023-5-30-t-4-52-46.jpg",
        image_alt:"Comics at Cubbon"
      },
    ]

export const fetch_Event_Details = async() => {
  try{
    const response=await axios.get("http://localhost:8080/Admin/ActiveEvents");
    return response.data;
  }catch(error){
    console.log(error);
    return [];
  }
}