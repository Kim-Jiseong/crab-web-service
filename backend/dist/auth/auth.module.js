"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/entity/users.entity");
const authority_entity_1 = require("./entity/authority.entity");
const passport_interface_1 = require("./security/passport.interface");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.User, authority_entity_1.Authority]),
            jwt_1.JwtModule.register({
                secret: 'SECRET_KEY',
                signOptions: { expiresIn: '300s' },
            }),
            passport_1.PassportModule,
        ],
        exports: [typeorm_1.TypeOrmModule],
        providers: [auth_service_1.AuthService, passport_interface_1.JwtStrategy],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map