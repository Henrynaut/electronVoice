// Helper function for displaying error messages
function handleError(commit, error) {
    const message = error.message || error.info.error_description;
    commit('setError', message);
  }
  
  export default {
    async login({ commit, state }, userId) {
      try {
        commit('setError', '');
        commit('setLoading', true);
        // Plug in a default userId (need to plug in the Vivox ID)
        const currentUser = userId;
        commit('setUser', {
          username: currentUser.id,
          name: currentUser.name
        });
        commit('setReconnect', false);
  
        // Test state.user
        console.log(state.user);
      } catch (error) {
        handleError(commit, error)
      } finally {
        commit('setLoading', false);
      }
    }
  }