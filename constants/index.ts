
interface sideMenuItems {
    label:string,
    icon:string,
    url:string
}

export const sideMenuItems:sideMenuItems[]= [
    {
      "label": "Home",
      "icon": "home",
      "url": "/sideMenuIcons/Home/Vector.png"
    },
    {
      "label": "Explore",
      "icon": "search",
      "url": "/sideMenuIcons/Explore/Vector.png"
    },
    {
      "label": "Notifications",
      "icon": "bell",
      "url": "/sideMenuIcons/Notifications/Vector.png"
    },
    {
      "label": "Messages",
      "icon": "envelope",
      "url": "/sideMenuIcons/Messages/Vector.png"
    },
    {
        "label": "Bookmarks",
        "icon": "bookmarks",
        "url": "/sideMenuIcons/Bookmarks/Vector.png"
      },
    {
      "label": "Profile",
      "icon": "use2r",
      "url": "/sideMenuIcons/Profile/Vector.png"
    },
    {
        "label": "More",
        "icon":'more',
        "url":"/sideMenuIcons/More/Vector.png"
    }
  ]

  export const icons = [
    {
      icon:'image',
      svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.75 0H2.25C1.01 0 0 1.01 0 2.25V17.75C0 18.99 1.01 20 2.25 20H17.75C18.99 20 20 18.99 20 17.75V2.25C20 1.01 18.99 0 17.75 0ZM2.25 1.5H17.75C18.163 1.5 18.5 1.837 18.5 2.25V11.926L14.642 8.068C14.502 7.928 14.312 7.848 14.112 7.848H14.109C13.909 7.848 13.716 7.928 13.577 8.072L9.26 12.456L7.447 10.65C7.307 10.51 7.117 10.43 6.917 10.43C6.724 10.4 6.522 10.51 6.382 10.657L1.5 15.642V2.25C1.5 1.837 1.837 1.5 2.25 1.5ZM1.506 17.78L6.924 12.246L13.206 18.5H2.25C1.848 18.5 1.523 18.178 1.506 17.78ZM17.75 18.5H15.33L10.323 13.513L14.115 9.663L18.5 14.047V17.75C18.5 18.163 18.163 18.5 17.75 18.5Z" fill="#1DA1F2"/>
      <path d="M6.86799 7.851C7.71961 7.851 8.40999 7.16062 8.40999 6.309C8.40999 5.45738 7.71961 4.767 6.86799 4.767C6.01637 4.767 5.32599 5.45738 5.32599 6.309C5.32599 7.16062 6.01637 7.851 6.86799 7.851Z" fill="#1DA1F2"/>
    </svg>`
    },
    {
      icon:'gif',
      svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
      <path d="M18 8.49999V6.79999H13.6V13.2H15.3V11.2H17.3V9.49999H15.3V8.49999H18ZM10.7 6.79999H12.4V13.2H10.7V6.79999ZM7.10002 8.39999C7.50002 8.39999 8.00002 8.59999 8.30002 8.89999L9.50002 7.89999C8.90002 7.19999 8.00002 6.79999 7.10002 6.79999C5.30002 6.79999 3.90002 8.19999 3.90002 9.99999C3.90002 11.8 5.30002 13.2 7.10002 13.2C8.10002 13.2 8.90002 12.8 9.50002 12.1V9.59999H6.70002V10.8H7.90002V11.4C7.70002 11.5 7.40002 11.6 7.10002 11.6C6.20002 11.6 5.50002 10.9 5.50002 9.99999C5.50002 9.19999 6.20002 8.39999 7.10002 8.39999Z" fill="#1DA1F2"/>
      <path d="M19.5 0.019989H2.5C1.26 0.019989 0.25 1.02699 0.25 2.26699V17.774C0.25 19.012 1.26 20.02 2.5 20.02H19.5C20.74 20.02 21.75 19.012 21.75 17.774V2.26699C21.75 1.02699 20.74 0.019989 19.5 0.019989ZM20.25 17.774C20.25 18.184 19.914 18.52 19.5 18.52H2.5C2.086 18.52 1.75 18.184 1.75 17.774V2.26699C1.75 1.85499 2.086 1.51999 2.5 1.51999H19.5C19.914 1.51999 20.25 1.85499 20.25 2.26699V17.774Z" fill="#1DA1F2"/>
    </svg>`
    },
    {
      icon:'link',
      svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M18.222 7.16H16.888C16.903 7.07 16.916 6.978 16.916 6.883V4.57C16.916 3.59 16.119 2.793 15.138 2.793H1.5V1.358C1.5 0.944002 1.164 0.608002 0.75 0.608002C0.336 0.608002 0 0.944002 0 1.358V18.83C0 19.245 0.336 19.58 0.75 19.58C1.164 19.58 1.5 19.245 1.5 18.83V17.396H12.056C13.036 17.396 13.834 16.599 13.834 15.619V13.306C13.834 13.211 13.82 13.119 13.806 13.028H18.223C19.203 13.028 20.001 12.23 20.001 11.25V8.94C20.001 7.957 19.204 7.16 18.223 7.16H18.222ZM15.14 4.293C15.292 4.293 15.417 4.417 15.417 4.57V6.88C15.417 7.034 15.292 7.16 15.139 7.16H1.5V4.29H15.14V4.293ZM12.333 13.307V15.619C12.333 15.772 12.208 15.896 12.055 15.896H1.5V13.028H12.056C12.209 13.028 12.333 13.154 12.333 13.308V13.307ZM18.5 11.25C18.5 11.403 18.375 11.527 18.222 11.527H1.5V8.66H18.222C18.375 8.66 18.5 8.784 18.5 8.937V11.25Z" fill="#1DA1F2"/>
    </svg>`
    },
    {
      icon:'emoji',
      svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" fill="#1DA1F2"/>
      <path d="M11 16.115C9.10801 16.115 7.36701 15.165 6.34401 13.571C6.12001 13.223 6.22101 12.761 6.57001 12.536C6.91801 12.31 7.38201 12.412 7.60601 12.762C8.35301 13.924 9.62201 14.617 11.001 14.617C12.38 14.617 13.649 13.924 14.397 12.763C14.621 12.413 15.085 12.313 15.433 12.538C15.783 12.762 15.883 13.226 15.659 13.574C14.634 15.168 12.893 16.119 11.001 16.119L11 16.115Z" fill="#1DA1F2"/>
      <path d="M13.738 9.93601C14.5543 9.93601 15.216 9.27429 15.216 8.45801C15.216 7.64173 14.5543 6.98001 13.738 6.98001C12.9217 6.98001 12.26 7.64173 12.26 8.45801C12.26 9.27429 12.9217 9.93601 13.738 9.93601Z" fill="#1DA1F2"/>
      <path d="M8.262 9.93601C9.07827 9.93601 9.74 9.27429 9.74 8.45801C9.74 7.64173 9.07827 6.98001 8.262 6.98001C7.44572 6.98001 6.784 7.64173 6.784 8.45801C6.784 9.27429 7.44572 9.93601 8.262 9.93601Z" fill="#1DA1F2"/>
    </svg>`
    },
    {
      icon:'date',
      svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M-37.9 17C-38 16.9 -38 16.9 -38 16.8C-37.9 16.8 -37.9 16.9 -37.9 17ZM18 1.20001H16.7V0.900006C16.7 0.500006 16.4 0.100006 15.9 0.100006C15.5 0.100006 15.1 0.400006 15.1 0.900006V1.20001H7.7V0.900006C7.7 0.500006 7.4 0.100006 6.9 0.100006C6.5 0.100006 6.1 0.400006 6.1 0.900006V1.20001H4.8C3.4 1.20001 2.3 2.30001 2.3 3.70001V16.8C2.3 18.2 3.4 19.3 4.8 19.3H7.7C8.1 19.3 8.5 19 8.5 18.5C8.5 18.1 8.2 17.7 7.7 17.7H4.8C4.2 17.7 3.8 17.2 3.8 16.7V6.90001C3.8 6.60001 4.2 6.20001 4.8 6.20001H18C18.6 6.20001 19 6.60001 19 6.90001V8.70001C19 9.10001 19.3 9.50001 19.8 9.50001C20.2 9.50001 20.6 9.20001 20.6 8.70001V3.70001C20.5 2.30001 19.4 1.20001 18 1.20001ZM19 4.90001C18.7 4.80001 18.3 4.70001 18 4.70001H4.8C4.4 4.70001 4.1 4.80001 3.8 4.90001V3.70001C3.8 3.10001 4.3 2.70001 4.8 2.70001H6.1V3.20001C6.1 3.60001 6.4 4.00001 6.9 4.00001C7.3 4.00001 7.7 3.70001 7.7 3.20001V2.70001H15.2V3.20001C15.2 3.60001 15.5 4.00001 16 4.00001C16.4 4.00001 16.8 3.70001 16.8 3.20001V2.70001H18C18.6 2.70001 19 3.20001 19 3.70001V4.90001Z" fill="#1DA1F2"/>
      <path d="M15.5 9.39999C12.1 9.39999 9.29999 12.2 9.29999 15.6C9.29999 19 12.1 21.8 15.5 21.8C18.9 21.8 21.7 19 21.7 15.6C21.7 12.2 18.9 9.39999 15.5 9.39999ZM15.5 20.4C12.9 20.4 10.8 18.3 10.8 15.7C10.8 13.1 12.9 11 15.5 11C18.1 11 20.2 13.1 20.2 15.7C20.2 18.2 18.1 20.4 15.5 20.4Z" fill="#1DA1F2"/>
      <path d="M18.9 17.7C18.8 17.9 18.5 18.1 18.3 18.1C18.2 18.1 18 18.1 17.9 18L14.8 16V13C14.8 12.6 15.1 12.2 15.6 12.2C16 12.2 16.4 12.5 16.4 13V15.2L18.8 16.7C19 16.9 19.1 17.3 18.9 17.7Z" fill="#1DA1F2"/>
    </svg>`
    },
  ]

export const actions=[
  {
    svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M9.53452 0.681511L6.42352 0.674011H6.42202C3.14152 0.674011 0.572021 3.24426 0.572021 6.52551C0.572021 9.59901 2.96152 11.93 6.17077 12.053V14.924C6.17077 15.005 6.20377 15.1385 6.26077 15.2263C6.36727 15.395 6.54877 15.4865 6.73477 15.4865C6.83827 15.4865 6.94252 15.458 7.03627 15.398C7.23427 15.272 11.891 12.293 13.1023 11.2685C14.5288 10.061 15.3823 8.29101 15.3845 6.53451V6.52176C15.38 3.24651 12.812 0.681511 9.53452 0.680761V0.681511ZM12.3748 10.4105C11.5243 11.1305 8.72827 12.9643 7.29577 13.8928V11.5025C7.29577 11.192 7.04452 10.94 6.73327 10.94H6.43627C3.69127 10.94 1.69777 9.08301 1.69777 6.52551C1.69777 3.87501 3.77377 1.79901 6.42277 1.79901L9.53302 1.80651H9.53452C12.1835 1.80651 14.2595 3.88101 14.261 6.52851C14.2588 7.96101 13.5545 9.41151 12.3755 10.4105H12.3748Z" fill="#5B7083"/>
  </svg>`,
    action:'comment',
    count:61
  },
  {
    svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
    <path d="M17.8275 9.7525C17.6085 9.53275 17.2522 9.53275 17.0325 9.7525L15.3675 11.4175V3.7375C15.3675 2.1865 14.1052 0.924997 12.555 0.924997H8.16748C7.85698 0.924997 7.60498 1.177 7.60498 1.4875C7.60498 1.798 7.85698 2.05 8.16748 2.05H12.555C13.485 2.05 14.2425 2.8075 14.2425 3.7375V11.4175L12.5775 9.7525C12.3577 9.53275 12.0015 9.53275 11.7825 9.7525C11.5635 9.97225 11.562 10.3285 11.7825 10.5475L14.4075 13.1725C14.5162 13.2827 14.6602 13.3375 14.805 13.3375C14.9497 13.3375 15.0922 13.2835 15.2025 13.1725L17.8275 10.5475C18.048 10.3285 18.048 9.97225 17.8275 9.7525ZM9.83248 12.2125H5.44498C4.51498 12.2125 3.75748 11.455 3.75748 10.525V2.845L5.42248 4.51C5.53348 4.62025 5.67748 4.675 5.82148 4.675C5.96548 4.675 6.10948 4.62025 6.21898 4.51C6.43873 4.29025 6.43873 3.934 6.21898 3.715L3.59398 1.09C3.37423 0.869497 3.01798 0.869497 2.79898 1.09L0.173981 3.715C-0.0465191 3.934 -0.0465191 4.29025 0.173981 4.51C0.394481 4.72975 0.749231 4.72975 0.968981 4.51L2.63398 2.845V10.525C2.63398 12.076 3.89623 13.3375 5.44648 13.3375H9.83398C10.1445 13.3375 10.3965 13.0855 10.3965 12.775C10.3965 12.4645 10.1437 12.2125 9.83398 12.2125H9.83248Z" fill="#5B7083"/>
  </svg>`,
    action:'retweet',
    count:12
  },
  {
    svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
    <path d="M8.00003 14.2285H7.98953C6.05228 14.1925 0.462524 9.14203 0.462524 4.35853C0.462524 2.06053 2.35627 0.0430298 4.51477 0.0430298C6.23227 0.0430298 7.38727 1.22803 7.99927 2.09053C8.60977 1.22953 9.76477 0.0430298 11.483 0.0430298C13.643 0.0430298 15.536 2.06053 15.536 4.35928C15.536 9.14128 9.94553 14.1918 8.00828 14.227H8.00003V14.2285Z" fill="#F4245E"/>
  </svg>`,
    action:'like',
    count:6.2
  },
  {
    svgCode:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12.1475 4.6025L8.39751 0.852496C8.17776 0.632746 7.82151 0.632746 7.60251 0.852496L3.85251 4.6025C3.63201 4.82225 3.63201 5.17849 3.85251 5.3975C4.07301 5.6165 4.42776 5.618 4.64751 5.3975L7.43751 2.6075V10.25C7.43751 10.5605 7.68951 10.8125 8.00001 10.8125C8.31051 10.8125 8.56251 10.5605 8.56251 10.25V2.6075L11.3525 5.3975C11.462 5.50775 11.606 5.5625 11.75 5.5625C11.894 5.5625 12.038 5.5085 12.1475 5.3975C12.3673 5.17775 12.3673 4.82225 12.1475 4.6025Z" fill="#5B7083"/>
    <path d="M13.781 15.458H2.219C1.271 15.458 0.5 14.687 0.5 13.739V9.5C0.5 9.1895 0.752 8.9375 1.0625 8.9375C1.373 8.9375 1.625 9.1895 1.625 9.5V13.739C1.625 14.0668 1.89125 14.333 2.219 14.333H13.781C14.1088 14.333 14.375 14.0668 14.375 13.739V9.5C14.375 9.1895 14.627 8.9375 14.9375 8.9375C15.248 8.9375 15.5 9.1895 15.5 9.5V13.739C15.5 14.687 14.729 15.458 13.781 15.458Z" fill="#5B7083"/>
  </svg>`,
    action:'share',
    count:61
  },
]