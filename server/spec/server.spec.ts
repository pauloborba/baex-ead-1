import request = require("request-promise");
import { closeServer } from '../server';

var base_url = "http://localhost:3000/";

describe("Server", () => {
  var server:any;

  beforeAll(() => {server = require('../server')});

  afterAll(() => {server.closeServer()});

  it("starts with no courses registered", () => {
    return request.get(base_url + "course").then(body => expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
  })

  it("register a course", () => {
    var options:any = {method: 'POST', uri: (base_url + "course"), body:{name: "Test Course", price: 100}, json: true};
    return request(options).then(body =>
         expect(body).toEqual({status: "success"})
    ).catch(e =>
         expect(e).toEqual(null)
    )
  });

})
