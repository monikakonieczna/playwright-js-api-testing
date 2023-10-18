import { expect, test } from "playwright/test";


test("Update Booking", async ({ request, baseURL }) => {
    const _response = await request.patch(`${baseURL}/booking/1`, {
        headers: {
        'Cookie': `token=${process.env.TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        data: {
            "firstname": "Sally",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2013-02-23",
                "checkout": "2014-10-23"
            },
            "additionalneeds": "Breakfast"
        }
    });
})