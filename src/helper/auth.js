import Client from "../client/client";

function user() {
  return {
    login: ({ params, payload }) => {
      const url = "api/v1/Users/Token";
      return Client.post(url, payload, {});
    },
  };
}

export default user();
