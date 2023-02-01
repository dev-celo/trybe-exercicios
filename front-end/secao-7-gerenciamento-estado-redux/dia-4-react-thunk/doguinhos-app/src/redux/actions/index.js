export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({
  type: REQUEST_STARTED,
})

const requestSuccessful = (imgURL) => ({
  type: REQUEST_SUCCESSFUL,
  payload: imgURL,
});

const requestFailed = (error) => ({
  type: REQUEST_SUCCESSFUL,
  payload: error,
});

export const fetchDogImage = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => dispatch(requestSuccessful(data.message)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}
