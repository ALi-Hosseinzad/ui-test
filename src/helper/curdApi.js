import Client from "../client/client";

function user() {
  return {
    getProvinces: ({ params, payload }) => {
      const url = "api/v1/Provinces";
      return Client.get(url, payload, {});
    },
    getCities: ({ params, payload }) => {
      const url = "api/v1/Cities";
      return Client.get(url, payload, {});
    },
    update: ({ params, payload }) => {
      const url = "api/v1/Cities";
      return Client.put(url, payload, {});
    },
    search: ({ params, payload, pageNumber, recordsNumber }) => {
      // const url = `api/v1/Provinces/Search?pageNumber=${pageNumber}&recordsNumber=${recordsNumber}`;
      const url = "/api/v1/Provinces/Search";
      return Client.get(url, payload, {});
    },
    delete: ({ params, payload, id }) => {
      const url = `api/v1/Cities/${id}`;
      return Client.delete(url, payload, {});
    },
    getAdd: ({ params, payload }) => {
      const url = "api/v1/Cities";
      return Client.post(url, payload, {});
    },
    getId: ({ params, payload, id }) => {
      const url = `api/v1/Cities/${id}`;
      return Client.get(url, payload, {});
    },
  };
}

export default user();
