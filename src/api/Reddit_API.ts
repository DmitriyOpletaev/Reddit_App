import axios from "axios";

export const credentialsReddit = {
    redirectUri: 'http://localhost:3000/',
    clientId: 'jDEF3w1WZcaiZYQO2cJDNw',
    clientSecret: 'MSQzHcTxGUPWYDNwv3ylcIyx29KsFg'
}

export const instanceAuthReddit=axios.create({
    baseURL:'https://www.reddit.com/api/v1/',
    headers:{
        'Authorization': 'Basic ' + btoa(credentialsReddit.clientId + ':' + credentialsReddit.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

export function instanceReddit(access_token: string | null) {
    return axios.create({
        baseURL: 'https://oauth.reddit.com/',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': "Bearer " + access_token,
        },
    })
}


