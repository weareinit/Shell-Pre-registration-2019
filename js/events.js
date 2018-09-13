var eventsJson = `[
  {
    "title": "Check-In",
    "start": 1536958800,
    "end": 1536966000,
    "room": "SIPA Lobby",
    "description": "You've made here, but you've gotta check in first!"
  },
  {
    "title": "Walk-In Check-In",
    "start": 1536962400,
    "end": 1536966000,
    "room": "SIPA Lobby",
    "description": "If you didn't manage to register on time, make sure you make it for walk-in check in."
  },
  {
    "title": "Opening Ceremony",
    "start": 1536966000,
    "end": 1536971400,
    "room": "SIPA 125",
    "description": "Everyone attending ShellHacks gathers for the opening ceremony"
  },
  {
    "title": "Sponsorship Fair",
    "start": 1536972300,
    "end": 1536978600,
    "room": "PG6 Lobby/Lounge",
    "description": "Network with the ShellHacks sponsors"
  },
  {
    "title": "Dinner",
    "start": 1536975000,
    "end": 1536978600,
    "room": "PG6",
    "description": ""
  },
  {
    "title": "Hacking Begins",
    "start": 1536978600,
    "end": 1537104600,
    "room": "Hacking Spaces",
    "description": "And they're off! Get ready to spend the next 36 hours learning, creating, and experiencing a weekend like no other!"
  },
  {
    "title": "Team Building",
    "start": 1536978600,
    "end": 1536980400,
    "room": "PG6 114",
    "description": "Meet hackers and form teams while coming up with fun and crazy new startup ideas based on simple every day projects"
  },
  {
    "title": "GitHub and Tracks Workshop",
    "start": 1536980400,
    "end": 1536983100,
    "room": "PG6 115",
    "description": "Learn about git and GitHub, version control meant for teams and collaborative open source projects!"
  },
  {
    "title": "HTML/CSS",
    "start": 1536984000,
    "end": 1536985800,
    "room": "PG6 115",
    "description": "FIU's Professor Gomez will be teaching the basic on HTML and CSS so that you can build your own websites"
  },
  {
    "title": "Snack",
    "start": 1536987600,
    "end": 1536989400,
    "room": "PG6 116",
    "description": "Fuel up"
  },
  {
    "title": "Machine Learning",
    "start": 1536989400,
    "end": 1536991200,
    "room": "PG6 115",
    "description": "Learn more about machine learning presented by FIU student and ShellHacks organizer Adrian Perez"
  },
  {
    "title": "Werewolf",
    "start": 1536992100,
    "end": 1536995700,
    "room": "PG6 114",
    "description": "See if you can survive the night with a fun game of Werewolf!"
  },
  {
    "title": "Yoga",
    "start": 1537009200,
    "end": 1537011900,
    "room": "PG6 114",
    "description": "Re-energize with an invigorating yoga flow"
  },
  {
    "title": "Breakfast",
    "start": 1537012800,
    "end": 1537016400,
    "room": "PG6 116",
    "description": "Enjoy a hearty, well-balanced breakfast"
  },
  {
    "title": "Paper Plane Competition",
    "start": 1537018200,
    "end": 1537020000,
    "room": "PG6 114",
    "description": "Unleash your inner Maverick"
  },
  {
    "title": "Wix Code",
    "start": 1537020000,
    "end": 1537021800,
    "room": "PG6 115",
    "description": "Learn more about Wixs editor with developer tools that enables you to perform custom javascript functions and Database queries"
  },
  {
    "title": "Spotify Talk",
    "start": 1537022700,
    "end": 1537024500,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Microsoft Xbox lounge",
    "start": "1537022700",
    "end": "1537034400",
    "room": "PG6 114",
    "description": "Hang out with some hackers to some laid back gaming at the activities room"
  },
  {
    "title": "Microsoft Azure",
    "start": 1537025400,
    "end": 1537027200,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Assurant IT Careers talk",
    "start": 1537028100,
    "end": 1537029900,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Citrix Ionic Workshop",
    "start": 1537030800,
    "end": 1537032600,
    "room": "PG6 115",
    "description": "Learn how to make mobile apps with Ionic presented by Citrix"
  },
  {
    "title": "Chase Testing with Spock and Groovy",
    "start": 1537036200,
    "end": 1537038000,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Lunch",
    "start": 1537034400,
    "end": 1537036200,
    "room": "PG6 116",
    "description": "Enjoy a delicious meal"
  },
  {
    "title": "Google Talk",
    "start": 1537038900,
    "end": 1537040700,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Robotic Process Automation World Fuel Services",
    "start": 1537041600,
    "end": 1537043400,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Matrix Creator",
    "start": 1537044300,
    "end": 1537046100,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Akamai IoT challenges",
    "start": 1537048800,
    "end": 1537050600,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Oath Workshop",
    "start": 1537051500,
    "end": 1537053300,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Cup Stacking",
    "start": 1537046100,
    "end": 1537049700,
    "room": "PG6 114",
    "description": "Have fun with a hackathon classic!"
  },
  {
    "title": "Arduino Workshop",
    "start": 1537056000,
    "end": 1537057800,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "4Geeks ReactJS workshop",
    "start": 1537058700,
    "end": 1537060500,
    "room": "PG6 115",
    "description": "Learn more about ReactJS and Javascript with this workshop presented by 4Geeks"
  },
  {
    "title": "Unity Workshop",
    "start": 1537061400,
    "end": 1537063200,
    "room": "PG6 115",
    "description": ""
  },
    {
    "title": "Java Tech Interview Prep Workshop",
    "start": 1537065900,
    "end": 1537067700,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Dinner",
    "start": 1537054200,
    "end": 1537056000,
    "room": "PG6 116",
    "description": "Good provech!"
  },
  {
    "title": "Swift Workshop Davone",
    "start": 1537056000,
    "end": 1537067700,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "Security Workshop Cisco",
    "start": 1537056000,
    "end": 1537067700,
    "room": "PG6 115",
    "description": ""
  },
  {
    "title": "T-Shirt Giveaway & Ice Cream",
    "start": 1537063200,
    "end": 1537065900,
    "room": "PG6 114",
    "description": "Get the awesome ShellHacks T-shirt and some ice cream"
  },
  {
    "title": "Code in the Dark",
    "start": 1537070400,
    "end": 1537072200,
    "room": "PG6 115",
    "description": "Experience the magic of Shellhacks 2018!"
  },
  {
    "title": "Ping Pong Tournament",
    "start": 1537070400,
    "end": 1537074000,
    "room": "PG6 114",
    "description": "Who is the cricket master?"
  },
  {
    "title": "Snack",
    "start": 1537074000,
    "end": 1537075800,
    "room": "PG6 116",
    "description": "Fuel up"
  },
  {
    "title": "Gaming Tournament",
    "start": 1537075800,
    "end": 1537081200,
    "room": "PG6 115",
    "description": "Have fun and compete!"
  },
  {
    "title": "Mechanical Keyboard Meetup",
    "start": 1537079400,
    "end": 1537081200,
    "room": "PG6 114",
    "description": "Gather up and talk all things mechanical keyboards"
  },
  {
    "title": "Breakfast",
    "start": 1537099200,
    "end": 1537102800,
    "room": "PG6 116",
    "description": "Enjoy the last breakfast of the weekend!"
  },
  {
    "title": "Hackathon Expo",
    "start": 1537108200,
    "end": 1537115400,
    "room": "PG6 105",
    "description": "Show off and see all the cool hacks"
  },
  {
    "title": "Closing Ceremony",
    "start": 1537117200,
    "end": 1537120800,
    "room": "SIPA 125",
    "description": "The ShellHacks team says farewell"
  },
  {
    "title": "Snack",
    "start": 1537120800,
    "end": 1537122600,
    "room": "PG6 116",
    "description": "Closing time, one last call for snacks."
  }
]`;
