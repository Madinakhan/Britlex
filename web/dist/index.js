"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateUserBtn = document.querySelector("#update_user_btn");
const getUsersBtn = document.querySelector("#get_users_btn");
const addUserBtn = document.querySelector("#add_user");
const baseURL = "http://10.10.2.36:8080/api/users";
function delay(time = 1000) {
    return new Promise((res) => {
        setTimeout(() => res(20), time);
    });
}
const mockUser = {
    address: {
        state: "UZB",
        city: "Tashkent",
    },
    username: "arslonbek alimbaev",
    job: "PDP Mentor",
    email: "ars@domain.com",
    age: 10,
    name: "arslonbek",
};
getUsersBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    yield universal(e.target, "Loading Users...", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(baseURL);
        const { data } = yield res.json();
        yield delay();
        console.log("data = ", data);
    }));
}));
updateUserBtn === null || updateUserBtn === void 0 ? void 0 : updateUserBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    yield universal(e.target, "Loading Users...", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(`${baseURL}/1bf73e6e-1a76-4a68-a05a-d2a07b1ab0d6`, {
            method: "PUT",
            body: JSON.stringify(mockUser),
            headers: {
                "content-type": "application/json",
            },
        });
        const { data } = yield res.json();
        yield delay();
        console.log("data = ", data);
    }));
}));
addUserBtn === null || addUserBtn === void 0 ? void 0 : addUserBtn.addEventListener("click", () => { });
function universal(btn, loadingMsg, fetchFn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const defaultText = btn.innerText;
            btn.innerText = loadingMsg;
            btn.disabled = true;
            yield fetchFn();
            btn.innerText = defaultText;
            btn.disabled = false;
        }
        catch (err) {
            console.error(err);
        }
    });
}
