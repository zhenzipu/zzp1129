import Cookies from 'js-cookie';
import API from '@/libs/API';
import axios from '../../axios/index';
import { Message } from 'iview';

const user = {
    state: {
        username: ''
    },
    mutations: {
        // getUserInfo(state, data) {
        //     state.username = data.username;
        // }
    },
    actions: {
        // 获取用户信息
        // checkLogin(state) {
        //     axios
        //         .get('http://123.56.14.124:918/post/?format=json')
        //         .then(res => {
        //             console.log(11,res)
        //             // let objData = res.data;
        //             // if (objData.status_code == 1000) {
        //             //     state.commit('getUserInfo', objData.data);
        //             // } else if (objData.status_code == 401) {
        //             //     Message.error('无权访问！');
        //             //     location.href = location.origin + '/limit.html';
        //             // } else {
        //             //     Message.error(objData.message);
        //             // }
        //         })
        // },

        // 登出
        // userLoginout(state) {
        // }
    }
};

export default user;
