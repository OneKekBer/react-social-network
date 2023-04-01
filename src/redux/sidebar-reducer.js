let initialState = {
    FriendsData: [
        {
            id: 1,
            name: 'vita',
            avatar: 'https://th.bing.com/th/id/R.ac0b554bc1a6fce8698aa28e5ac1604e?rik=rBd2D0QVcqLYWA&riu=http%3a%2f%2fhypeava.ru%2fuploads%2fposts%2f2018-03%2f1522076711_9.jpg&ehk=nTcrZ7a6T2gV0a%2fVrCpXJ7SnZwAYEHzZEYm3Y2wC5tY%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 2,
            name: 'misha',
            avatar: 'https://th.bing.com/th/id/R.e798e74d42bbebad1a7960b87cd94135?rik=tOrhQzHKkVxDVg&riu=http%3a%2f%2fandroid-obzor.com%2fwp-content%2fuploads%2f2022%2f03%2f2-10.jpg&ehk=mQt9CSH5hrYL2iBtEN0miswG04ak%2bySo7hrB25VWlWY%3d&risl=&pid=ImgRaw&r=0'
        },
        {
            id: 3,
            name: 'ela',
            avatar: 'https://th.bing.com/th/id/R.9ffc879cf55326f4d7267f8d0197fcbf?rik=KM672Wyq8Pth3g&riu=http%3a%2f%2fhypeava.ru%2fuploads%2fposts%2f2018-03%2f1522076717_2.jpg&ehk=XBVG7oHV3AC4Iwer%2fCcfRU%2btxquv6P%2fAbumnYw9DZo4%3d&risl=&pid=ImgRaw&r=0'
        }
    ]
}

export const sidebarReducer = (state = initialState, action) =>{

    return state
}
export default sidebarReducer;