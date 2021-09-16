import Client from "../client/client";

function user() {
  return {
    getUserInfo: ({ params, payload }) => {
      const url = "api/v1/Users/GetUserByUserName";
      return Client.post(url, payload, {});
    },
  };
}

export default user();
