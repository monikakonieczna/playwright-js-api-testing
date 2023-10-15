import { expect, test } from "playwright/test";

test("Update Booking", async ({ request, baseURL }) => {
    const _response = await request.put(`${baseURL}/booking`, {
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
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})
