const request = require("supertest");
const app = require("../src/server/app.js");

describe("Test the get paths", () => {
test("users path with not defined url, it should response with an 404 status, not found", () => {
  return request(app)
    .get("/users/aja.com")
    .expect(404);
  });

test("users path with defined url, it should response with an 200 status, ok", () => {
  return request(app)
    .get("/users/google.com")
    .expect(200);
  });

test("Main path, it should response with an 200 status, ok", () => {
  return request(app)
    .get("/")
    .expect(200);
  });

test("about path with not defined id, it should response with an 404 status, not found", () => {
  return request(app)
    .get("/about/32")
    .expect(404);
  });

test("about path with a defined id, it should response with an 200 status, ok", () => {
  return request(app)
    .get("/about/1")
    .expect(200);
    
  });
});