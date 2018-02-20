import React from "react";
import { shallow } from "enzyme";
// import { SocketIO, Server } from "mock-socket";
import ListItemUsers from "./ListItemUsers";

jest.useFakeTimers();

describe("List Item tests", () => {
  // let mockSocketServer, mockSocket;

  // beforeEach(() => {
  //   mockSocketServer = new Server("http://localhost:8080");

  //   mockSocketServer.on("connection", socket => {
  //     socket.on("msg", message => {
  //       socket.emit("msg", message);
  //     });
  //   });

  //   mockSocket = SocketIO.connect("http://localhost:8080");

  //   jest.runOnlyPendingTimers();
  // });

  it("should be 12", () => {
    const component = shallow(<ListItemUsers />, {});

    expect(12).toBe(12);
  });

  it("Value from state should be false", () => {
    const component = shallow(<ListItemUsers />, {});

    expect(component.state().seesOptions).toEqual(false);
  });

  it("Trying to make the value from state be true", () => {
    const component = shallow(<ListItemUsers />, {});
    component.state().seesOptions = true;
    component.isAdminOfChatrrom = true;
    // component.props.name = 'Stulli';
    // component.props.currentUser = 'Darrína';
    // component.find('#banIcon').simulate('click');
    

    expect(component.state().seesOptions).toEqual(true);
    expect(component.isAdminOfChatrrom).toEqual(true);
  });

  // afterEach(() => {
  //   mockSocketServer.stop();
  //   mockSocket.close();
  // });
});
