import { test } from '@playwright/test';
export const beforeAll = test.extend({
    const: any response = await request.post(`${baseURL}/booking`, {
          data: bookingData
          });
          const responseBody = await response.json();
          process.env.ID = responseBody.bookingid;
          console.log(process.env.ID)
          expect(response.ok()).toBeTruthy();
          expect(response.status()).toBe(200);
          expect(responseBody.booking).toHaveProperty("firstname", bookingData.firstname);
          expect(responseBody.booking).toHaveProperty("lastname", bookingData.lastname);
          expect(responseBody.booking).toHaveProperty("totalprice", bookingData.totalprice);
          expect(responseBody.booking).toHaveProperty("depositpaid", bookingData.depositpaid);

})
const _newTest = newTest;
export { _newTest as newTest };
export const expect = newTest.expect