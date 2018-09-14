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
    "description": "It's the event's first dinner, so we hope you came ready to enjoy an extra special meal 😏"
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
    "room": "PG6 112",
    "description": "Learn about git and GitHub, version control meant for teams and collaborative open source projects! \\n \\n Presented by GitHub engineers"
  },
  {
    "title": "HTML/CSS",
    "start": 1536984000,
    "end": 1536987600,
    "room": "PG6 112",
    "description": "FIU's Professor German Gomez will be teaching the basic on HTML and CSS so that you can build your own websites"
  },
  {
    "title": "Midnight++ Snack",
    "start": 1536987600,
    "end": 1536989400,
    "room": "Drones",
    "description": "Know what's better than a midnight snack? A midnight++ snack 😎"
  },
  {
    "title": "UI/UX presented by GE Digital",
    "start": 1536989400,
    "end": 1536991200,
    "room": "PG6 112",
    "description": "So, you know how to make a backend.\\n\\nAlright, now you've got a working frontend.\\n\\nBut, how do you make it so other people can use it easily?\\n\\nJoin GE Digital in teaching some of the fundamendal basics in UI and UX design! If you're not really a front-end kind of person, this event will get you started in thinking about *who* is using your software "
  },
  {
    "title": "Machine Learning",
    "start": 1536992100,
    "end": 1536993900,
    "room": "PG6 112",
    "description": "Learn more about machine learning presented by FIU student and ShellHacks organizer Adrian Perez"
  },
  {
    "title": "Ladies Storm Hackathons",
    "start": 1536992100,
    "end": 1536995700,
    "room": "PG6 114",
    "description": "Play fun activities while empowering women in tech"
  },
  {
    "title": "Werewolf",
    "start": 1536995700,
    "end": 1536999300,
    "room": "PG6 112",
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
    "room": "PG6",
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
    "end": 1537023600,
    "room": "PG6 112",
    "description": "Learn more about Wix's editor with developer tools that enable you to perform custom javascript functions and database queries"
  },
  {
    "title": "Testing with Spock and Groovy presented by Chase",
    "start": 1537020000,
    "end": 1537021800,
    "room": "PG6 144",
    "description": "Test your might and learn how to test in java with Spock and Groovy"
  },
  {
    "title": "Spotify Talk",
    "start": 1537023600,
    "end": 1537025400,
    "room": "PG6 144",
    "description": ""
  },
  {
    "title": "Microsoft Xbox lounge",
    "start": "1537023600",
    "end": "1537034400",
    "room": "PG6 114",
    "description": "Hang out with some hackers to some laid back gaming at the activities room"
  },
  {
    "title": "Microsoft Azure",
    "start": 1537025400,
    "end": 1537027200,
    "room": "PG6 112",
    "description": "Learn about Microsoft's Azure to help build your applications on their cloud services. \\n \\n Presented by Microsoft"
  },
  {
    "title": "IT Careers talk by Assurant",
    "start": 1537027200,
    "end": 1537029000,
    "room": "PG6 144",
    "description": "Be assured that there will be talks of careers for those of you who are IT Majors! \\n \\n This talk is presented by Assurant, a global provider of risk management products and services"
  },
  {
    "title": "Ionic Workshop by Citrix",
    "start": 1537029000,
    "end": 1537030800,
    "room": "PG6 112",
    "description": "Learn how to make mobile apps with Ionic presented by Citrix"
  },
  {
    "title": "Lunch",
    "start": 1537034400,
    "end": 1537036200,
    "room": "Drones",
    "description": "Enjoy a delicious meal"
  },
  {
    "title": "Keepin it clean: the art of clean code - a Google talk",
    "start": 1537036200,
    "end": 1537038000,
    "room": "PG6 112",
    "description": "In this talk, Google engineers will give different methods to insure clean and mantainable code"
  },
  {
    "title": "Robotic Process Automation by World Fuel Services",
    "start": 1537038000,
    "end": 1537039800,
    "room": "PG6 144",
    "description": "Learn more about software automation, presented by World Fuel Services"
  },
  {
    "title": "Karaoke",
    "start": 1537038000,
    "end": 1537042500,
    "room": "PG6 114",
    "description": "Sing your heart out with friends with this classic song filled event"
  },
  {
    "title": "Matrix Creator Workshop by Matrix Labs",
    "start": 1537040700,
    "end": 1537042500,
    "room": "PG6 112",
    "description": "Learn how to use the Matrix Creator -- a tool specialized for creating IoT projects"
  },
  {
    "title": "IoT Challenges - A talk by Akamai",
    "start": 1537041600,
    "end": 1537043400,
    "room": "PG6 144",
    "description": "Akamai will tackle the different challenges and issues facing IoT today"
  },
  {
    "title": "Snack Time",
    "start": 1537043400,
    "end": 1537045200,
    "room": "PG6 112",
    "description": "Snack to your hearts desire"
  },
  {
    "title": "Cup Stacking",
    "start": 1537045200,
    "end": 1537048800,
    "room": "PG6 112",
    "description": "How high can you stack?\\n\\nTry to stack solo cups with a friend as high as they can, but be careful not to let them fall! Compete against other teams of two to take home the crowning title as Cup Stacking Champion. "
  },
  {
    "title": "Arduino Workshop",
    "start": 1537048800,
    "end": 1537051500,
    "room": "PG6 144",
    "description": "Learn how to use Arduinos -- Microcontrollers made for hardware projects, presented by Manny Losada FIU Student and president of IEEE"
  },
  {
    "title": "ReactJS workshop by 4Geeks",
    "start": 1537049700,
    "end": 1537051500,
    "room": "PG6 112",
    "description": "Learn more about ReactJS and Javascript with this workshop presented by 4Geeks"
  },
  {
    "title": "Unity Workshop",
    "start": 1537052400,
    "end": 1537056000,
    "room": "PG6 112",
    "description": "FIU Alumni Jose Maldonado will be teaching the basics of Game Development with the Unity Engine"
  },
    {
    "title": "Java Tech Interview Prep Workshop",
    "start": 1537030800,
    "end": 1537033500,
    "room": "PG6 144",
    "description": "Crack the coding interview in Java with FIU Student Fernado Serrano"
  },
  {
    "title": "Dinner",
    "start": 1537056900,
    "end": 1537058700,
    "room": "Drones",
    "description": "Yes, you read that location right. No, that's not a typo. ✈"
  },
  {
    "title": "Swift Workshop",
    "start": 1537058700,
    "end": 1537061400,
    "room": "PG6 112",
    "description": "Learn about Native iOS Mobile app development with swift presented by FIU Student Davone"
  },
  {
    "title": "4square",
    "start": 1537059600,
    "end": 1537062300,
    "room": "PG6 114",
    "description": "If you call it boxball don't @ me"
  },
  {
    "title": "Security Workshop by Cisco",
    "start": 1537061400,
    "end": 1537063200,
    "room": "PG6 144",
    "description": "Security topics and lock picking hands on with Cisco"
  },
  {
    "title": "T-Shirt Giveaway & Special Surprise",
    "start": 1537063200,
    "end": 1537065900,
    "room": "PG6 114",
    "description": "Get the awesome ShellHacks 2018 T-shirt and a little something extra!"
  },
  {
    "title": "Soylent Pong",
    "start": 1537066800,
    "end": 1536984000,
    "room": "PG6 114",
    "description": "It's like that other pong but you'll be able to walk properly afterwards"
  },
  {
    "title": "Midnight++ Snack",
    "start": 1537074000,
    "end": 1537075800,
    "room": "PG6 116",
    "description": "It's an hour past midnight again, so it must be snack time!"
  },
  {
    "title": "Gaming Tournament",
    "start": 1537075800,
    "end": 1537081200,
    "room": "PG6 112",
    "description": "Have fun and compete!"
  },
  {
    "title": "Mechanical Keyboard Meetup",
    "start": 1537070400,
    "end": 1537073100,
    "room": "PG6 114",
    "description": "Gather up and talk all things mechanical keyboards"
  },
  {
    "title": "Breakfast",
    "start": 1537099200,
    "end": 1537102800,
    "room": "PG6",
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
    "room": "PG6 116",
    "description": "The ShellHacks team says farewell"
  },
  {
    "title": "Snack",
    "start": 1537120800,
    "end": 1537122600,
    "room": "PG6",
    "description": "Closing time, one last call for snacks."
  }
]`;
