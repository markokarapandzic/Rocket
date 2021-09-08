import { useContext } from "react";
import { actions, Context } from "./index";
import SpaceXService from "../services/spaceXService";
import { handleError } from "../lib/errorHandling";

function useSpaceXContext() {
  const value = useContext(Context);

  async function fetchRockets() {
    try {
      value.dispatch({ type: actions.setRockets });
      const { data } = await SpaceXService.getRockets();
      value.dispatch({ type: actions.setRocketsSuccess, payload: data });
    } catch (e) {
      handleError(e);
    }
  }

  async function fetchMembers() {
    try {
      value.dispatch({ type: actions.setMembers });
      const { data } = await SpaceXService.getCrewMembers();
      value.dispatch({ type: actions.setMembersSuccess, payload: data });
    } catch (e) {
      handleError(e);
    }
  }

  async function fetchMember(id) {
    const payload = value.state.members.filter((item) => item.id === id);
    value.dispatch({ type: actions.setMember, payload: payload[0] });
  }

  return {
    state: value.state,
    fetchRockets,
    fetchMembers,
    fetchMember,
  };
}

export default useSpaceXContext;
