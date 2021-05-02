import App from "./App";

// Telling jest to use the mock unsplash module instead of the actual module, it looks for the mock module in __mocks__ folder
jest.mock("../services/unsplash");

it("fetches images from unsplash and renders them on mount", done => {
  const wrapper = shallow(<App />);
  
  // Waiting for the async function to complete in the next tick
  setTimeout(() => {
    // Requesting a component re-render
    wrapper.update();
    
    // Extracting the current state of the component
    const state = wrapper.instance().state;
    
    expect(state.term).toEqual("Mountains");
    expect(state.status).toEqual("done");
    expect(state.images.length).toEqual(1);

    expect(wrapper.find("Image").length).toEqual(1);

    done();
  });
});
