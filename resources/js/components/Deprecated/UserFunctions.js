import axios from 'axios/index'

/**
 * these functions are all not used, serve as reference
 * deprecated
 * @param newUser
 */
export const register = newUser => {
    return axios
        .post('api/register', newUser, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
                console.log(res);
                if (res.status === 200) {
                    localStorage.setItem('usertoken', res.data.token)
                }
            })
        .catch(err => {
            console.log(err)
        })
};
/*
email: user.email,
            password: user.password
        },
 */
export const login = user => {
    return axios
        .post('api/login', user,{

            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem('usertoken', response.data.token)
            }
            else {
                console.log("bad login")
            }
        })
        .catch(err => {
            console.log(err)
        })
};

export const login2 = user => {
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}



/*
export const getProfile = () => {
    return axios
        .get('api/profile', {
            headers: { Authorization: Bearer ${localStorage.usertoken} }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

 */

export const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];


    if(typeof header != 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    }
    else {
        res.sendStatus(403);
    }
};


export function logout() {
    localStorage.removeItem('usertoken');
    currentUserSubject.next(null);
}


