export const messages = (state: any) => {
    return JSON.parse(JSON.stringify(state.tchat.messages))
}
