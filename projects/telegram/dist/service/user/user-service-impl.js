export class UserServiceImpl {
    users;
    id = 0;
    create(user) {
        user.setId(this.id++);
        this.users.push(user);
        return 1;
    }
    getById(id) {
        for (let user of this.users) {
            if (user.getId() === id) {
                return user;
            }
        }
        return null;
    }
    updateById(update) {
        for (let idx in this.users) {
            const user = this.users[idx];
            if (user.getId() === update.getId()) {
                this.users[idx] = update;
                return update;
            }
        }
        return null;
    }
    deleteById(id) {
        for (let idx in this.users) {
            const user = this.users[idx];
            if (user.getId() === id) {
                this.users.splice(+idx, 1);
                return 1;
            }
        }
        return 0;
    }
    setSMSCode(smsCode, phoneNumber) {
        for (let user of this.users) {
            if (user.phoneNumber === phoneNumber) {
                user.smsCode = smsCode;
                return 1;
            }
        }
        return 0;
    }
    signIn(phoneNumber, smsCode) {
        for (let user of this.users) {
            if (user.phoneNumber === phoneNumber) {
                if (user.smsCode === smsCode)
                    return user;
                else
                    throw new Error("Wrong smsCode");
            }
        }
        throw new Error("Wrong phone number or sms code");
    }
    searchByName(name) {
        const foundUsers = [];
        for (let user of this.users) {
            if (user.fullName?.toLowerCase().includes(name.toLowerCase()))
                foundUsers.push(user);
        }
        return foundUsers;
    }
    getUsersByIds(ids) {
        const users = [];
        for (let user of this.users) {
            if (ids.includes(user.getId()))
                users.push(user);
        }
        return users;
    }
}
