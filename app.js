const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// const nodemailer = require("nodemailer");
// const multiparty = require("multiparty");


const app = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){
    // res.render("index")
    const locations = {lagos : "lagos", abuja: "abuja", ibadan : "ibadan"}
    res.render("index", locations)
});


app.get("/vote/:state", function(req,res){
    const state = req.params.state;

    const lagosLocations = [
        {
            name: "Surulere Local Government Office",
            address : "15 Bode Thomas Street, Surulere, Lagos"
        },
        {
            name: "Ikeja City Hall",
            address : "Obafemi Awolowo Way, Ikeja, Lagos"
        },
        {
            name: "Lekki Phase 1 Community Center",
            address : "Admiralty Road, Lekki Phase 1, Lagos"
        }
    ]

    const abujaLocations = [
        {
            name: "Garki Area Council",
            address : "Ahmadu Bello Way, Garki, Abuja"
        },
        {
            name: "Wuse Zone 3 Primary School",
            address : "Aminu Kano Crescent, Wuse Zone 3, Abuja"
        },
        {
            name: "Maitama Amusement Park",
            address : "Shehu Shagari Way, Maitama, Abuja"
        }
    ]

    const ibadanLocations = [
        {
            name: "Ibadan North Local Government Office",
            address : "Agodi Gate, Ibadan"
        },
        {
            name: "Molete Baptist Church",
            address : "Molete, Ibadan"
        },
        {
            name: "University of Ibadan Main Gate",
            address : "Oduduwa Road, Ibadan"
        }
    ]

    var locations = [{}]

    if (state == "lagos"){
        locations = lagosLocations
    }
    else if (state == "abuja"){
        locations = abujaLocations
    }
    else if (state == "ibadan"){
        locations = ibadanLocations
    }

    const lagosNews = [
        {
          headline: "Lagos State Governor Urges Peaceful Voting Amid Rising Tensions",
          details: "The Governor of Lagos State has called for calm and peaceful conduct during the voting process as tensions rise in certain areas. Security forces have been deployed to ensure safety."
        },
        {
          headline: "Voter Turnout in Lagos Exceeds Expectations on First Day of Polls",
          details: "Lagos witnessed an unexpectedly high voter turnout on the first day of polling, with many citizens coming out early to cast their votes. Electoral officials have been working to manage the large crowds."
        },
        {
          headline: "Security Measures Tightened in Lagos Ahead of Elections",
          details: "In anticipation of the upcoming elections, security has been heightened across Lagos. Additional police and military personnel have been stationed at key locations to maintain order and prevent any disruptions."
        }
      ];

      const abujaNews = [
        {
          headline: "Abuja Residents Commend INEC for Smooth Voting Process",
          details: "Residents of Abuja have praised the Independent National Electoral Commission (INEC) for the efficient and smooth conduct of the voting process. Many have reported a positive experience at the polls."
        },
        {
          headline: "Technical Glitches Cause Delays in Voting in Some Areas of Abuja",
          details: "Some polling stations in Abuja experienced technical glitches with voting machines, causing delays and frustration among voters. INEC technicians are working to resolve the issues promptly."
        },
        {
          headline: "High Youth Participation Noted in Abuja Elections",
          details: "A significant number of young voters have been observed participating in the elections in Abuja. This demographic has shown strong engagement and enthusiasm for the electoral process."
        }
      ];

      const ibadanNews = [
        {
          headline: "Ibadan Election: Voters Report Long Queues and Enthusiastic Turnout",
          details: "Voters in Ibadan have reported long queues at polling stations, indicating a high turnout. Despite the wait, many expressed enthusiasm and determination to cast their votes."
        },
        {
          headline: "INEC Addresses Issues of Missing Names on Voter Lists in Ibadan",
          details: "INEC has acknowledged reports of missing names on voter lists at some polling stations in Ibadan. Efforts are underway to rectify the situation and ensure that all eligible voters can participate."
        },
        {
          headline: "Ibadan Police Increase Patrols to Ensure Election Safety",
          details: "In response to security concerns, the police in Ibadan have increased patrols around polling stations. This measure aims to provide a safe environment for voters and prevent any potential disturbances."
        }
      ];

      const lagosSecurityUpdates = [
        {
          headline: "Increased Police Presence in Surulere Ensures Peaceful Voting",
          details: "Security forces have been deployed to Surulere Local Government Office to ensure a peaceful voting process. No incidents have been reported so far."
        },
        {
          headline: "Minor Skirmish Quickly Contained Near Ikeja City Hall",
          details: "A minor skirmish broke out near Ikeja City Hall, but security forces quickly intervened and restored order. No injuries were reported."
        },
        {
          headline: "Lekki Phase 1 Community Center Remains Secure Amid Heightened Tensions",
          details: "Despite heightened tensions, the Lekki Phase 1 Community Center has remained secure, with increased police patrols ensuring voter safety."
        }
      ];
      
      const abujaSecurityUpdates = [
        {
          headline: "Garki Area Council Voting Location Secure, No Incidents Reported",
          details: "The Garki Area Council voting location remains secure, with no reports of violence or disturbances. Voters are encouraged to proceed to their designated centers."
        },
        {
          headline: "Security Tightened Around Wuse Zone 3 Primary School",
          details: "Security has been tightened around Wuse Zone 3 Primary School to prevent any potential disruptions. The situation remains calm and under control."
        },
        {
          headline: "Maitama Amusement Park Voting Location Under Heavy Patrol",
          details: "Maitama Amusement Park voting location is under heavy patrol, ensuring a safe environment for voters. Authorities report no issues at this time."
        }
      ];
      
      const ibadanSecurityUpdates = [
        {
          headline: "Heavy Security Patrols at Ibadan North Local Government Office Deter Potential Disruptions",
          details: "Heavy security patrols around Ibadan North Local Government Office have ensured a smooth and peaceful voting process. Voters have expressed confidence in the measures taken."
        },
        {
          headline: "Police Respond to Disturbance Near Molete Baptist Church Polling Station",
          details: "Police responded to a disturbance near Molete Baptist Church polling station. The situation was quickly brought under control, and voting resumed without further issues."
        },
        {
          headline: "University of Ibadan Main Gate Remains Safe Amid Increased Voter Turnout",
          details: "The University of Ibadan Main Gate polling station remains safe as security forces manage the increased voter turnout. No security breaches have been reported."
        }
      ];
      
      


      var news = [{}]

      var safetyNews = [{}]

      if (state == "lagos"){
        news = lagosNews
        safetyNews = lagosSecurityUpdates
      }
      else if (state == "abuja"){
        news = abujaNews
        safetyNews = abujaSecurityUpdates
      }
      else if (state == "ibadan"){
        news = ibadanNews
        safetyNews = ibadanSecurityUpdates
      }


    res.render("vote", {state:state, locations: locations, news: news, safetyNews: safetyNews})
});
  

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
})
