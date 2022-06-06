const testData = [
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Florence",
        last: "Nitzsche",
      },
      location: {
        street: {
          number: 7986,
          name: "Meisenweg",
        },
        city: "Fürstenfeldbruck",
        state: "Rheinland-Pfalz",
        country: "Germany",
        postcode: 97560,
        coordinates: {
          latitude: "-37.1844",
          longitude: "39.9750",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "florence.nitzsche@example.com",
      login: {
        uuid: "4aa4ca4a-f1ad-4d9e-a768-3f07ec276701",
        username: "lazyelephant965",
        password: "getout",
        salt: "gO21L53C",
        md5: "f1a97fc4edcbbb00453c8f62965c8e2e",
        sha1: "25e873ea633ce3e5fe1d5b2281a29cb8be8d6c3e",
        sha256:
          "78614463d15f3a72ac549fb98acba3ed0a3d3bc1aeb22c886c09f28de805c2af",
      },
      dob: {
        date: "1945-05-12T00:55:51.451Z",
        age: 76,
      },
      registered: {
        date: "2010-05-02T06:07:10.141Z",
        age: 11,
      },
      phone: "0714-3400445",
      cell: "0170-1355610",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/90.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      },
      nat: "DE",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Arnaud",
        last: "Anderson",
      },
      location: {
        street: {
          number: 3936,
          name: "George St",
        },
        city: "St. Antoine",
        state: "Prince Edward Island",
        country: "Canada",
        postcode: "A8J 7O2",
        coordinates: {
          latitude: "-7.9701",
          longitude: "-0.7711",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "arnaud.anderson@example.com",
      login: {
        uuid: "812599a2-1271-41e6-bdb8-50650b14540b",
        username: "brownbird757",
        password: "fettish",
        salt: "xazvbRgs",
        md5: "08ded6efd5f6994466407811292eab2b",
        sha1: "164d59ee927fef881c2a35c5a53987af0f08c648",
        sha256:
          "f3bee887efceac6e3df5d5decc6a68995551032465b28fde2c885fe44c5b30a5",
      },
      dob: {
        date: "1989-01-03T06:41:58.603Z",
        age: 32,
      },
      registered: {
        date: "2007-06-06T20:17:35.067Z",
        age: 14,
      },
      phone: "079-073-2038",
      cell: "947-833-1691",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/95.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
      },
      nat: "CA",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Caroline",
        last: "Poulsen",
      },
      location: {
        street: {
          number: 7084,
          name: "Tårnvej",
        },
        city: "Assens",
        state: "Syddanmark",
        country: "Denmark",
        postcode: 86831,
        coordinates: {
          latitude: "57.5910",
          longitude: "-72.8830",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "caroline.poulsen@example.com",
      login: {
        uuid: "f0cf0b44-05cf-47bd-852a-f30d5c83582d",
        username: "silverostrich899",
        password: "dodger",
        salt: "GmfJ2O2b",
        md5: "e6658495dee994526a4ee3cdfd399cff",
        sha1: "4204483394da3596e43313c0abaf6d35f03058c9",
        sha256:
          "0523366f67366bc7ca66cbe62b6fefcac7f0821ef1418db8764958291f9e8af1",
      },
      dob: {
        date: "1956-10-16T05:40:57.300Z",
        age: 65,
      },
      registered: {
        date: "2014-01-24T02:44:05.459Z",
        age: 7,
      },
      phone: "54396817",
      cell: "90030602",
      id: {
        name: "CPR",
        value: "161056-1028",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Eléna",
        last: "Hubert",
      },
      location: {
        street: {
          number: 4792,
          name: "Quai Chauveau",
        },
        city: "Strasbourg",
        state: "Nièvre",
        country: "France",
        postcode: 45997,
        coordinates: {
          latitude: "-31.7735",
          longitude: "16.9064",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "elena.hubert@example.com",
      login: {
        uuid: "be1dd831-9dad-404c-be3a-1975f9e2ce01",
        username: "redswan284",
        password: "pa55word",
        salt: "6YmN6jyA",
        md5: "67bb4f32faeeafeb8b5d88c6bb81f042",
        sha1: "69fc9421815d9ebeb4c31d2f54452a1fc65fd3c3",
        sha256:
          "2710f3c403a8d2d11eccc326cea4c5a496a564f07e7cd1fd286a29a546bc029a",
      },
      dob: {
        date: "1963-08-24T11:26:04.801Z",
        age: 58,
      },
      registered: {
        date: "2016-07-01T13:05:18.234Z",
        age: 5,
      },
      phone: "02-07-88-96-41",
      cell: "06-88-21-83-74",
      id: {
        name: "INSEE",
        value: "2NNaN13236282 27",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      },
      nat: "FR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "پارمیس",
        last: "حسینی",
      },
      location: {
        street: {
          number: 2494,
          name: "دکتر علی شریعتی",
        },
        city: "رشت",
        state: "ایلام",
        country: "Iran",
        postcode: 66699,
        coordinates: {
          latitude: "-32.0170",
          longitude: "-152.3886",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "prmys.hsyny@example.com",
      login: {
        uuid: "a03203d8-c475-4875-9b6e-c3ae266aad35",
        username: "tinyladybug675",
        password: "anarchy",
        salt: "uBCeHLB5",
        md5: "236b6155a8f27af5462e50f53a7ab695",
        sha1: "7b2d3e69be3e83d47ecb7204fb520256a8c11f1b",
        sha256:
          "428ed1b1711f4653c390b006670f7498c780fd04612ed4c0c80e619571fc9e61",
      },
      dob: {
        date: "1968-09-06T06:33:18.517Z",
        age: 53,
      },
      registered: {
        date: "2006-08-11T20:20:26.692Z",
        age: 15,
      },
      phone: "082-85510992",
      cell: "0996-186-5539",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Esat",
        last: "Tazegül",
      },
      location: {
        street: {
          number: 1372,
          name: "Talak Göktepe Cd",
        },
        city: "Amasya",
        state: "Kahramanmaraş",
        country: "Turkey",
        postcode: 48217,
        coordinates: {
          latitude: "56.7618",
          longitude: "-175.1794",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "esat.tazegul@example.com",
      login: {
        uuid: "41cdde97-2ed3-42e5-b715-45a3d34ebcd1",
        username: "blackdog405",
        password: "freefree",
        salt: "2sbToLxh",
        md5: "cc8156f4fd6884913acb248a21ec80b9",
        sha1: "72f203e256296b6533a586ed57ed6161292564f6",
        sha256:
          "7732b5d53a9e09538d5de378a7779fcb64ae6289fc0f8a2b04b9969b7c96ece7",
      },
      dob: {
        date: "1994-08-25T12:52:59.358Z",
        age: 27,
      },
      registered: {
        date: "2016-04-14T12:30:51.665Z",
        age: 5,
      },
      phone: "(659)-877-3342",
      cell: "(289)-640-0958",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/59.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg",
      },
      nat: "TR",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Jennie",
        last: "Boyd",
      },
      location: {
        street: {
          number: 6101,
          name: "Daisy Dr",
        },
        city: "Pasadena",
        state: "Maine",
        country: "United States",
        postcode: 83288,
        coordinates: {
          latitude: "57.6996",
          longitude: "52.2829",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "jennie.boyd@example.com",
      login: {
        uuid: "3462a577-1897-4e1d-ba74-7e4d8911ff3e",
        username: "purplewolf499",
        password: "phoebe",
        salt: "kIBt2vkY",
        md5: "9d9b1c96c67720bcf7a98cf83bb2b948",
        sha1: "80465214a6c988de1523a69aa27cb24faf334b7e",
        sha256:
          "96e58e64ab07531d33c58f5c2e4b25abda7a7afddbdef2d204c114fc9435b4b3",
      },
      dob: {
        date: "1994-04-24T00:06:54.801Z",
        age: 17,
      },
      registered: {
        date: "2007-03-18T20:28:46.006Z",
        age: 14,
      },
      phone: "(955)-446-2188",
      cell: "(119)-401-4505",
      id: {
        name: "SSN",
        value: "983-61-6072",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Betsy",
        last: "Douven",
      },
      location: {
        street: {
          number: 1441,
          name: "Hondsdonk",
        },
        city: "Mariahout",
        state: "Overijssel",
        country: "Netherlands",
        postcode: 47438,
        coordinates: {
          latitude: "19.4420",
          longitude: "-111.2362",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "betsy.douven@example.com",
      login: {
        uuid: "da885fe2-6c72-4409-ad40-b39515225ec9",
        username: "redfrog203",
        password: "albany",
        salt: "4mol0I4Q",
        md5: "ccf7680450bab9df337e10cfd0618956",
        sha1: "e81500cca719d309a5d5490a5dd804482a7bd486",
        sha256:
          "dbce4c48270179132a03b95d607e8d48fd7649111fddec47ba76943ce4c77f68",
      },
      dob: {
        date: "1990-02-23T12:02:41.042Z",
        age: 11,
      },
      registered: {
        date: "2018-09-02T03:32:24.178Z",
        age: 3,
      },
      phone: "(913)-128-6973",
      cell: "(321)-768-0713",
      id: {
        name: "BSN",
        value: "20501452",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
      },
      nat: "NL",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Sara",
        last: "Petersen",
      },
      location: {
        street: {
          number: 1383,
          name: "Vægterparken",
        },
        city: "Sommersted",
        state: "Nordjylland",
        country: "Denmark",
        postcode: 30790,
        coordinates: {
          latitude: "24.7161",
          longitude: "11.7793",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "sara.petersen@example.com",
      login: {
        uuid: "fdcb5574-3dfa-4711-a8df-b71a392a5d28",
        username: "happybear329",
        password: "twelve",
        salt: "hG2czyjm",
        md5: "bb57d6115b125865b31b8bee591f0603",
        sha1: "5fa28013aa2cc6df7b4e4370e9591e88331091da",
        sha256:
          "624b299b3adc0d21f3840e18e54d9027039ddf520b815d5630f2e5d9a33761c5",
      },
      dob: {
        date: "1994-10-26T10:14:18.009Z",
        age: 17,
      },
      registered: {
        date: "2009-12-05T16:15:56.322Z",
        age: 12,
      },
      phone: "36148886",
      cell: "73737273",
      id: {
        name: "CPR",
        value: "261094-1270",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/63.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
      },
      nat: "DK",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ken",
        last: "Steward",
      },
      location: {
        street: {
          number: 594,
          name: "N Stelling Rd",
        },
        city: "Midland",
        state: "Tennessee",
        country: "United States",
        postcode: 96877,
        coordinates: {
          latitude: "-9.4299",
          longitude: "-66.9716",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "ken.steward@example.com",
      login: {
        uuid: "d52dbae7-e4ae-4997-b941-de33f7116918",
        username: "lazylion260",
        password: "marcel",
        salt: "xZaPU0oZ",
        md5: "15d5b0cddf4007514918a8c244c8468f",
        sha1: "3bf2fb3a29ee73ab0cee0e8386faa1b98197fd57",
        sha256:
          "abb987ddc5607fa186dcb21164afdb0d1977f725bcf811c2207077100166f648",
      },
      dob: {
        date: "1964-07-20T07:45:04.048Z",
        age: 57,
      },
      registered: {
        date: "2013-11-26T22:00:39.808Z",
        age: 8,
      },
      phone: "(741)-912-6467",
      cell: "(176)-233-2940",
      id: {
        name: "SSN",
        value: "884-11-3796",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/51.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      },
      nat: "US",
    },
  ];
  
  const fetchUsers = () => new Promise((resolve) => resolve(testData));
  
  const module = { fetchUsers };
  
  export default module;
  