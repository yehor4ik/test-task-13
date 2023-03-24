export const getMockResponse = <Response>(
  response: Response,
  duration = 2000,
): Promise<Response> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, duration);
  });
};
