import { expect, test } from "playwright/test";
import bookingData = require('../../test-data/booking.json');

//test("Get BookingIds", async ({ request, baseURL }) => {
//    const response = await request.get(`${baseURL}/booking`);
//    expect(response.status()).toBe(200);
//    expect(response.ok()).toBeTruthy();
//});

test("Get Booking By Lastname @get", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/booking`, {
        params: {
            lastname: "Brown"
        }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
    expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
    expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
    expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);
});

test("Get Booking By Firstname @get", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/booking`, {
        params: {
            firstname: "Sally"
        }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
    expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
    expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
    expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);
});

test("Get Booking By Checkin Date @get", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/booking`, {
        params: {
            checkin: "2013-02-23"
        }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
    expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
    expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
    expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);
});

test("Get Booking By Checkout Date @get", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/booking`, {
        params: {
            checkout: "2014-10-23"
        }
    });
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
    expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
    expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
    expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);
});

test("Get Booking By ID @get", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/booking/${process.env.ID}`, {});
    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
    expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
    expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
    expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);
})