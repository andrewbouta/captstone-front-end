// Not  functional

import React, { Component } from 'react';

const AUTHENTICATE = "http://localhost:8080/authenticate"; 

class adminService {

    axios({/*
        method: 'POST',
        url: AUTHENTICATE,
        data: {
            userName: 'admin',
            lastName:'admin'
        }*/
    })

    getAdmin() {
        return fetch(AUTHENTICATE).then.apply((res => res.json));
    }

}

export default new adminService();