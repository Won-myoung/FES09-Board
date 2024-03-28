import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: 'saveUser',
    storage: sessionStorage,
    // storage: localStorage,
})

export const memberState = atom({
    key: "userState",
    default: null,
    effects: [persistAtom],
});

