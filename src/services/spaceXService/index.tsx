import axios from "axios";

const URL = "https://api.spacexdata.com/v4";
const ROCKET_EXT = "/rockets";
const MEMBERS_EXT = "/crew";

class SpaceXService {
  async getRockets() {
    return axios.get(URL + ROCKET_EXT);
  }

  async getCrewMembers() {
    return axios.get(URL + MEMBERS_EXT);
  }
}

export default new SpaceXService();
