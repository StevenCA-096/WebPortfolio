import DoneIcon from '@mui/icons-material/Done'
import PeopleIcon from '@mui/icons-material/People'
import ChecklistIcon from '@mui/icons-material/Checklist'
import ListIcon from '@mui/icons-material/List'
import CreateIcon from '@mui/icons-material/Create'
import TimerIcon from '@mui/icons-material/Timer'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'
import SpeedIcon from '@mui/icons-material/Speed'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import SecurityIcon from '@mui/icons-material/Security'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LockClockIcon from '@mui/icons-material/LockClock'
import AutoModeIcon from '@mui/icons-material/AutoMode'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import ComputerIcon from '@mui/icons-material/Computer'
import RepeatIcon from '@mui/icons-material/Repeat'
import Restaurant from '@mui/icons-material/Restaurant'

export const iconMap = {
  Done: DoneIcon,
  People: PeopleIcon,
  Checklist: ChecklistIcon,
  List: ListIcon,
  Create: CreateIcon,
  Timer: TimerIcon,
  ChangeCircle: ChangeCircleIcon,
  Speed: SpeedIcon,
  FitnessCenter: FitnessCenterIcon,
  Security: SecurityIcon,
  ManageAccounts: ManageAccountsIcon,
  LockClock: LockClockIcon,
  AutoMode: AutoModeIcon,
  DesignServices: DesignServicesIcon,
  Computer: ComputerIcon,
  Repeat: RepeatIcon,
  Dining: Restaurant
}

export const GetIconFromIconMap = (iconName) => {
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent /> : null
}
