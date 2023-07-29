// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data=[{
    "firno": "1",
    "complaintDetails": {
      "type": "robbery",
      "victim": {
        "age": "19",
        "name": "Aditya",
        "gender": "M"
      },
      "criminal": {
        "age": "40",
        "name": "Nikhil",
        "gender": "M"
      }
    },
    "date": "2023-03-01",
    "time": "00:01:00",
    "location": {
      "color": "#fc0000",
      "loglat": [81.298854, 21.189892],
      "address": "bit durg",
      "pincode": "492009"
    }
  },{
      "firno": "2",
      "complaintDetails": {
        "type": "Chain Snatching",
        "victim": {
          "age": "24",
          "name": "Monika",
          "gender": "F"
        },
        "criminal": {
          "age": "30",
          "name": "Aditya",
          "gender": "M"
        }
      },
      "date": "2023-03-16",
      "time": "00:09:10",
      "location": {
        "color": "#03adbf",
        "loglat": [81.322432, 21.184012],
        "address": "Sector-9,Bhilai",
        "pincode": "492009"
      }
    },{
      "firno": "3",
      "complaintDetails": {
        "type": "Murder",
        "victim": {
          "age": "24",
          "name": "Jason",
          "gender": "M"
        },
        "criminal": {
          "age": "Unknown",
          "name": "Unknown",
          "gender": "Unknown"
        }
      },
      "date": "2023-05-19",
      "time": "00:08:00",
      "location": {
        "color": "#d22f2d",
        "loglat": [81.612024,21.235222],
        "address": "MahadevGhat Main Road",
        "pincode": "492001"
      }
    },{
      "firno": "4",
      "complaintDetails": {
        "type": "Half Murder",
        "victim": {
          "age": "20",
          "name": "Sahil",
          "gender": "M"
        },
        "criminal": {
          "age": "28",
          "name": "Khilendra",
          "gender": "M"
        }
      },
      "date": "2023-05-08",
      "time": "00:08:30",
      "location": {
        "color": "#8d57ad",
        "loglat": [81.521194,21.254682],
        "address": "Kumhari",
        "pincode": "490042"
      }
    },{
      "firno": "5",
      "complaintDetails": {
        "type": "Naxal Attack",
        "victim": {
          "age": "24",
          "name": "Harsh",
          "gender": "M"
        },
        "criminal": {
          "age": "Unknown",
          "name": "Unknown",
          "gender": "Unknown"
        }
      },
      "date": "2023-05-28",
      "time": "00:13:30",
      "location": {
        "color": "#fbc50b",
        "loglat": [81.306853,21.182531],
        "address": "Hudco",
        "pincode": "492009"
      }
    },{
      "firno": "6",
      "complaintDetails": {
        "type": "Kidnapping",
        "victim": {
          "age": "15",
          "name": "Sugam",
          "gender": "M"
        },
        "criminal": {
          "age": "32",
          "name": "Priyanshu",
          "gender": "M"
        }
      },
      "date": "2023-10-10",
      "time": "12:08:30",
      "location": {
        "color": "#5f9f9e",
        "loglat": [81.284194,21.205738],
        "address": "Aakash Nagar",
        "pincode": "490042"
      }
    },{
      "firno": "7",
      "complaintDetails": {
        "type": "Burgalary",
        "victim": {
          "age": "25",
          "name": "Manisha",
          "gender": "F"
        },
        "criminal": {
          "age": "32",
          "name": "Manish",
          "gender": "M"
        }
      },
      "date": "2023-10-10",
      "time": "09:08:30",
      "location": {
        "color": "#005a03",
        "loglat": [81.318526,21.218781],
        "address": "Junwani",
        "pincode": "490042"
      }
    },{
      "firno": "8",
      "complaintDetails": {
        "type": "Cyber Crime",
        "victim": {
          "age": "25",
          "name": "Amisha",
          "gender": "F"
        },
        "criminal": {
          "age": "32",
          "name": "Mark",
          "gender": "M"
        }
      },
      "date": "2023-12-20",
      "time": "03:08:30",
      "location": {
        "color": "#8d173b",
        "loglat": [81.314492,21.207899],
        "address": "Smriti Nagar",
        "pincode": "490042"
      }
    },{
      "firno": "9",
      "complaintDetails": {
        "type": "Dowry Death",
        "victim": {
          "age": "25",
          "name": "Lata",
          "gender": "F"
        },
        "criminal": {
          "age": "28",
          "name": "Shashank",
          "gender": "M"
        }
      },
      "date": "2023-12-20",
      "time": "03:08:30",
      "location": {
        "color": "#f78e1f",
        "loglat": [81.338058,21.198461],
        "address": "Near BSP Resthouse",
        "pincode": "490042"
      }
    },{
      "firno": "10",
      "complaintDetails": {
        "type": "Corruption",
        "victim": {
          "age": "25",
          "name": "Yamini",
          "gender": "F"
        },
        "criminal": {
          "age": "32",
          "name": "Pratibha",
          "gender": "F"
        }
      },
      "date": "2023-10-20",
      "time": "04:08:30",
      "location": {
        "color": "#00a362",
        "loglat": [81.333176,21.195591],
        "address": "Kalyan PG College",
        "pincode": "490042"
      }
    },{
      "firno": "11",
      "complaintDetails": {
        "type": "Domestic Violence",
        "victim": {
          "age": "26",
          "name": "Yasmin",
          "gender": "F"
        },
        "criminal": {
          "age": "32",
          "name": "Govind",
          "gender": "M"
        }
      },
      "date": "2023-05-20",
      "time": "06:08:30",
      "location": {
        "color": "#eb2a8b",
        "loglat": [81.277789,21.188563],
        "address": "Near Verma Hospital",
        "pincode": "490042"
      }
    }
    
  ]
export default async function handler(req, res) {
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    await fetch("http://localhost:1337/api/firs",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({data:item}),
            
        })
        // let response = await a.json()

  }
    res.status(200).json({ "success":"true" })
    // data.forEach((item)=>{res.status(200).json({ name: item })})
  }
  