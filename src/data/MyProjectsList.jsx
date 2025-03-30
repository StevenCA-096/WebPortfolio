import { ChangeCircle, Checklist, Create, Done, FitnessCenter, Inventory, LineWeight, List, LockClock, ManageAccounts, People, PunchClock, RouteOutlined, Security, Speed, Subscript, Timelapse, Timeline, Timer, TimeToLeave } from "@mui/icons-material";

export const MyProjectsList = [
    {
        title:'Online Sales System For Coopepilangosta',
        description:`During this project i was able to collaborate with a team, to achieve online sales system, with the core functionalities and controls required for an application of this nature,
                    there are some of them:`,
        skills:[
            {
                icon:<Done />,
                details:`Inventory Control: Controls the stock of products and different cases like sales, product loss due to expiration date or giveaways where the product gets out from stock
                                for a different than a sale, and controls the new products arrival.`
            },
            {
                icon: <People />,
                details: `Users control: Managed the different users of the system, using JWT to verify users identity, and give acces to the proper functionalities according to the user role`
            },
            {
                icon: <Checklist />,
                details: `Reports: Displayed essential information about the sales, sales per product, sales per temporary, etc...`
            }
        ]
    },
    {
        title:'Enrollment System for CTP Hojancha',
        description:`This project had the purpose to allow a digital enrollment process instead of a presential one, during this freelance project, me and a team, analyzed and raised requirements
        in order to achieve the desired functionalities wich are the following:`,
        skills:[
            {
                icon:<List />,
                details:`Enrollment form: Created an enrollment form where the students were able to pick their desired section according to their level, fill the form with their information and his responsible
                , and upload their documents like identifications, previous school titles and policies.`
            },
            {
                icon: <Checklist />,
                details: `Reports: Generate reports to get the most important data, like students per section, enrollment grow compared to previous years, students per gender, etc...  `
            },
            {
                icon: <Create />,
                details: `Enrollment Maintainance   : Displayed essential information about the sales, sales per product, sales per temporary, etc...`
            }
        ]
    },
    {
        title:"AF Plattform",
        description:`This project was for a insurance company called AF Seguros and developed by a company called Northtec, 
        the techologies used were ReactJS with Firebase for data storage, files managament and authentication, the purpose 
        of this project was to handle the core operations, like insurance quotations, sales commisions, the product catalog and the customer relationship`,
        skills:[
            {
                icon:<Timer />,
                details:"Used firebase sockets called snapshots, to establish realtime communication."
            },
            {
                icon:<ChangeCircle />,
                details:"Created dinamic forms that supported fields updates to make changes with no code modification"
            },
            {
                icon:<Speed />,
                details:"Optimized querys to keep firebase in the free tier requests limit to avoid extra charges and improve user experience"
            }
        ]
    },
    {
        title:"AF AI Wrapper",
        description:`The purpose of this AI wrapper was to create different AI functionalities using Gemini for some of the apps AF Seguros poseeses
                    , like AllSports + wich is a fit app and the AF Website, using ReactJS for the frontend and ExpressJS to create an API rest wich handles the gemini service and promps`,
        skills:[
            {
                icon:<FitnessCenter />,
                details:"Generated routines using Gemini AI taking in count different parameters given by the user, like height, weight, goals, physical limitations, training equipment, available time and others"
            },
        ]
    },
    {
        title:"AF Website",
        description:`This project was made in order to update the previous AF Website, using modern technologies like ReactJS, ExpressJS, and Firebase, while giving the website a fresher look and feel,
        the website had the following functionalities:`,
        skills:[
            {
                icon:<Security />,
                details:"Insurance self-quotation: The user was able to quote his insurance by himself, using the insurance catalog, and the user information"
            },
            {
                icon:<ManageAccounts />,
                details:"Insurance self-managament: The user was able to manage his insurance, like review his policy, his receipts, creating his claims and other operations with no customer service intervention"
            },
        ]
    }
]