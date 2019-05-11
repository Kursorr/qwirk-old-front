export const messages = (state) => {
    return JSON.parse(JSON.stringify(state.tchat.messages));
};
