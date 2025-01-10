import { AutoMode, Computer, DesignServices, FastForward, FastRewind, LockClock, MoveUp, Repeat, RepeatOn, Security, VerifiedUser } from "@mui/icons-material";

export const MyWhatIDoList = [
    {
        icon: <LockClock />,
        title:'Realtime communication',
        text:'Established real time communication between apps with WebSockets'
    },
    {
        icon: <Security />,
        title:"Security",
        text:"Managed app security and role based permissions with JWT"
    },
    {
        icon:<AutoMode />,
        title:"Automatize tasks",
        text:"Created jobs to automatize repetitive tasks and create backups"
    },
    {
        icon: <DesignServices />,
        title:"UI Interfaces",
        text:"Created UI Interfaces using React and different components libraries: MUI, ChackraUI, React-Bootsrap"
    },
    {
        icon:<Computer />,
        title:"Server Side",
        text:"Created Restful API's wiyt different frameworks and databses: .NET - SQL Server, NestJS - MySql"
    }, 
    {
        icon:<Repeat />,
        title:"Agile Experience",
        text:"Participated in projects managed with Scrum methodology"
    }
]