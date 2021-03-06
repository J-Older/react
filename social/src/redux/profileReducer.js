import {ProfileApi} from "./api";

// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initialState = {

    profileData: {
        'aboutMe': null,
        'contacts': {
            'facebook': null,
            'website': null,
            'vk': null,
            'twitter': null,
            'instagram': null,
            'youtube': null,
            'github': null,
            'mainLink': null
        },
        'lookingForAJob': null,
        'lookingForAJobDescription': null,
        'fullName': '',
        'userId': null,
        'photos': {
            'small': null,
            'large': 'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'
        }
    },

    status: '',

    postData: [
        {
            id: '0',
            name: 'Ivan Starchykov',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
            likeCount: '12'
        },
        {
            id: '1',
            name: 'Ivan Starchykov',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
            likeCount: '0'
        },
    ]
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postData.length,
                name: 'Ivan Starchykov',
                text: action.postText,
                likeCount: '6'
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };


        // case UPDATE_NEW_POST_TEXT:
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };

        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            };

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };


        default:
            return state
    }
};


export let addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    }
};


export let setUserProfile = (profileData) => {
    return {
        type: SET_USER_PROFILE,
        profileData: profileData
    }
};

export let setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
};


export const setProfileInfo = (id) => (dispatch) => {
    ProfileApi.getProfile(id).then(data => {
        dispatch(setUserProfile(data))
    });
    ProfileApi.getStatus(id).then(response => {
        response.status === 200 && dispatch(setUserStatus(response.data))
    })
};

// export const setStatus = (id) => (dispatch) => {
//     ProfileApi.getStatus(id).then(response => {
//         response.status === 200 && dispatch(setUserStatus(response.data))
//     })
// };

export const updateStatus = (status) => (dispatch) => {
    ProfileApi.updateStatus(status).then(data => data.resultCode === 0 && dispatch(setUserStatus(status)))
};

export default profileReducer;