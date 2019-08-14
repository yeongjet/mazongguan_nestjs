"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const _ = require("lodash");
const dataSet = [
    {
        user_id: 3,
        username: 'joke',
        password: 'abc123',
        email: '625436194@163.com',
        cellphone: '153254785',
        avatar_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
        role: [1],
        created_at: '2019-01-05 16:23:12',
        updated_at: '2019-03-11 08:13:34',
        last_login_time: '2019-05-03 11:45:32',
        last_login_ip: '113.66.104.131'
    },
    {
        user_id: 5,
        username: 'nero',
        password: '34dg345',
        email: '1423440749@163.com',
        cellphone: '13598487456',
        avatar_url: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3001292911,2962166647&fm=58',
        role: [1],
        created_at: '2019-01-05 16:23:12',
        updated_at: '2019-03-11 08:13:34',
        last_login_time: '2019-05-03 11:45:32',
        last_login_ip: '113.66.104.131'
    }
];
let AccountService = class AccountService {
    async findAll() {
        return dataSet;
    }
    async findOne(id) {
        let result = _.find(dataSet, o => o.user_id === id);
        common_1.Logger.verbose(`result: ${JSON.stringify(result)}`);
        return result;
    }
    async signUp(dto) {
        return 1;
    }
    async updateProfile() { }
};
AccountService = __decorate([
    common_1.Injectable()
], AccountService);
exports.AccountService = AccountService;
