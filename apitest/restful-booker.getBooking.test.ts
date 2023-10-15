import { expect, test } from "playwright/test";

test("Get BookingIds", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`);
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
});

test("Get Booking By Lastname", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`, {
        params: {
            lastname: "jones"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
});

test("Get Booking By Firstname", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`, {
        params: {
            firstname: "sally"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
});

test("Get Booking By Checkin Date", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`, {
        params: {
            checkin: "2014-03-13"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
});

test.only("Get Booking By Checkout Date", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`, {
        params: {
            checkout: "2014-05-21"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
});

test.only("Get Booking By ID", async ({ request, baseURL }) => {
    const _response = await request.get(`${baseURL}/booking`, {
        params: {
            checkout: "2014-05-21"
        }
    });
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
})