import 'reflect-metadata';
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const express = require('express');
import * as passport from 'passport';
const request = require('supertest');
import * as bodyParser from 'body-parser';
// import * as faker from 'faker';
// import * as config from 'config';
const config = require('config');
import { Test } from '@nestjs/testing';
import { INestApplication, HttpStatus } from '@nestjs/common';
import {
    getManager,
    createConnection,
    getRepository,
    getConnection,
} from 'typeorm';
import { AppModule } from '../app.module';
import { AuthModule } from './auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from '../member/member.entity';
import { CustomValidationPipe } from '../../common/pipes/custom-validation.pipe';
import { ErrorCode } from '../../common/constants/error-code';

const server = express();
server.use(bodyParser.json());

describe('AuthController', () => {
    const account = 'omonjs@gmail.com';
    const password = '@1234567890';
    const cache = [];
    const apiBasePath = config.get<string>('apiBasePath');
    // 所有测试开始前清除user表数据
    beforeAll(async () => {
        // TODO: 将app初始化过程放在单独函数里，供其他测试代码共用
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        const app = module.createNestApplication(server);
        app.setGlobalPrefix(apiBasePath);
        app.useGlobalPipes(new CustomValidationPipe());
        // 配置最高压缩级别
        app.use(compression(9));
        // Add various HTTP headers to secure the app
        app.use(helmet());
        // Enable CORS
        app.use(cors());
        app.use(morgan('dev'));
        await app.init();
    });

    // 所有测试完成之后
    afterAll(async () => {
        if (cache.length) {
            await getConnection()
                .createQueryRunner()
                .query(
                    `DELETE FROM "base_member" where 'id' in (${cache.join(
                        ',',
                    )})`,
                );
        }
    });

    it('POST /api/auth/login 404 登陆失败，用户不存在', async () => {
        const res = await request(server)
            .post(`/${apiBasePath}/auth/login`)
            .send({ account, password })
            .expect(HttpStatus.BAD_REQUEST);
        expect(res.body.message).toBe(ErrorCode.AUTH_MEMBER_NOT_FOUND_ERROR);
    });

    it('POST /api/auth/register 201 注册成功', async () => {
        const res = await request(server).post('');
    });
});
