import { PlaywrightTestConfig, request } from '@playwright/test';

async function globalSetup(config: PlaywrightTestConfig) {
    const url = 'https://restful-booker.herokuapp.com/auth';


    console.log(`${process.env.USERNAME_ADMIN}`);
    console.log(`${process.env.USER_ADMIN_PASSWORD}`);
    const requestContext = await request.newContext();
    const response = await requestContext.post(`${url}`, {
            data: {
            'username': `${process.env.USERNAME_ADMIN}`,
            'password': `${process.env.USER_ADMIN_PASSWORD}`
            },
        });

    const body = await response.json();
    console.log(body);
    process.env.TOKEN = body.token;
    console.log(`${process.env.TOKEN}`);
    
}

export default globalSetup;