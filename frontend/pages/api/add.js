// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data=[
  {
    "firno": "24",
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
    "date": "2023-01-08",
    "time": "00:08:30",
    "location": {
      "color": "#8d57ad",
      "loglat": [
        81.521094,
        21.254882
      ],
      "address": "Kumhari",
      "pincode": "490042"
    }
  },
  {
    "firno": "25",
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
    "date": "2023-01-28",
    "time": "00:13:30",
    "location": {
      "color": "#fbc50b",
      "loglat": [
        81.301853,
        21.181531
      ],
      "address": "Hudco",
      "pincode": "492009"
    }
  },
  {
    "firno": "26",
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
    "date": "2023-02-10",
    "time": "12:08:30",
    "location": {
      "color": "#5f9f9e",
      "loglat": [
        81.284794,
        21.205738
      ],
      "address": "Aakash Nagar",
      "pincode": "490042"
    }
  },
  {
    "firno": "27",
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
    "date": "2023-02-10",
    "time": "09:08:30",
    "location": {
      "color": "#005a03",
      "loglat": [
        81.318926,
        21.218481
      ],
      "address": "Junwani",
      "pincode": "490042"
    }
  },
  {
    "firno": "28",
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
    "date": "2023-04-20",
    "time": "03:08:30",
    "location": {
      "color": "#8d173b",
      "loglat": [
        81.318492,
        21.208899
      ],
      "address": "Smriti Nagar",
      "pincode": "490042"
    }
  },
  {
    "firno": "21",
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
    "date": "2023-04-01",
    "time": "00:01:00",
    "location": {
      "color": "#fc0000",
      "loglat": [
        81.208854,
        21.189892
      ],
      "address": "bit durg",
      "pincode": "492009"
    }
  },
  {
    "firno": "22",
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
    "date": "2023-06-16",
    "time": "00:09:10",
    "location": {
      "color": "#03adbf",
      "loglat": [
        81.382432,
        21.124012
      ],
      "address": "Sector-9,Bhilai",
      "pincode": "492009"
    }
  },
  {
    "firno": "23",
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
    "date": "2023-07-19",
    "time": "00:08:00",
    "location": {
      "color": "#d22f2d",
      "loglat": [
        81.692024,
        21.235222
      ],
      "address": "MahadevGhat Main Road",
      "pincode": "492001"
    }
  },
  {
    "firno": "29",
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
    "date": "2023-08-20",
    "time": "03:08:30",
    "location": {
      "color": "#f78e1f",
      "loglat": [
        81.308058,
        21.108461
      ],
      "address": "Near BSP Resthouse",
      "pincode": "490042"
    }
  },
  {
    "firno": "210",
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
    "date": "2023-08-20",
    "time": "04:08:30",
    "location": {
      "color": "#00a362",
      "loglat": [
        81.393176,
        21.196591
      ],
      "address": "Kalyan PG College",
      "pincode": "490042"
    }
  },
  {
    "firno": "211",
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
    "date": "2023-08-20",
    "time": "06:08:30",
    "location": {
      "color": "#eb2a8b",
      "loglat": [
        81.207789,
        21.118563
      ],
      "address": "Near Verma Hospital",
      "pincode": "490042"
    }
  },
  {
    "firno": "270",
    "complaintDetails": {
      "type": "robbery",
      "victim": {
        "age": "19",
        "name": "param",
        "gender": "M"
      },
      "criminal": {
        "age": "40",
        "name": "sugam",
        "gender": "M"
      }
    },
    "date": "2023-09-01",
    "time": "00:01:00",
    "location": {
      "color": "#003201",
      "loglat": [
        81.208854,
        21.119892
      ],
      "address": "bit durg",
      "pincode": "492009"
    }
  },
  {
    "firno": "271",
    "complaintDetails": {
      "type": "Chain Snatching",
      "victim": {
        "age": "19",
        "name": "param",
        "gender": "M"
      },
      "criminal": {
        "age": "40",
        "name": "sugam",
        "gender": "M"
      }
    },
    "date": "2023-09-01",
    "time": "00:01:00",
    "location": {
      "color": "#03adbf",
      "loglat": [
        81.29684,
        21.180892
      ],
      "address": "bit durg",
      "pincode": "492009"
    }
  },
  {
    "firno": "272",
    "complaintDetails": {
      "type": "Chain Snatching",
      "victim": {
        "age": "19",
        "name": "param",
        "gender": "M"
      },
      "criminal": {
        "age": "40",
        "name": "sugam",
        "gender": "M"
      }
    },
    "date": "2023-11-01",
    "time": "00:01:00",
    "location": {
      "color": "#03adbf",
      "loglat": [
        81.29886,
        21.180882
      ],
      "address": "bit durg",
      "pincode": "492009"
    }
  },
  {
    "firno": "273",
    "complaintDetails": {
      "type": "Murder",
      "victim": {
        "age": "19",
        "name": "param",
        "gender": "M"
      },
      "criminal": {
        "age": "40",
        "name": "sugam",
        "gender": "M"
      }
    },
    "date": "2023-11-01",
    "time": "00:01:00",
    "location": {
      "color": "#d22f2d",
      "loglat": [
        81.29076,
        21.180882
      ],
      "address": "bit durg",
      "pincode": "492009"
    }
  },
  
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
  