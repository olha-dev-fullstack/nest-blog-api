import { HttpStatus, INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { dropDatabase } from 'test/helpers/drop-database.helper';
import { bootstrapNestApp } from 'test/helpers/bootstrap-nest-app.helper';
import * as request from 'supertest';
import {
  sampleCompleteUser,
  sampleMissingEmailUser,
  sampleMissingFirstNameUser,
  sampleMissingPasswordUser,
} from './users.post.e2e-spec.sample-data';
import { App } from 'supertest/types';

describe('[Users] @Post Endpoints', () => {
  let app: INestApplication;
  let config: ConfigService;
  let httpServer: App;

  beforeEach(async () => {
    app = await bootstrapNestApp();
    config = app.get<ConfigService>(ConfigService);
    httpServer = app.getHttpServer();
  });

  afterEach(async () => {
    await dropDatabase(config);
    await app.close();
  });

  it('/users - Endpoint is public', () => {
    return request(httpServer)
      .post('/users')
      .send({})
      .expect(HttpStatus.BAD_REQUEST);
  });
  it('/users - firstName is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleMissingFirstNameUser)
      .expect(HttpStatus.BAD_REQUEST);
  });
  it('/users - email is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleMissingEmailUser)
      .expect(HttpStatus.BAD_REQUEST);
  });
  it('/users - password is mandatory', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleMissingPasswordUser)
      .expect(HttpStatus.BAD_REQUEST);
  });
  it('/users - Valid request successfully creates user', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleCompleteUser)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        expect(body.data).toBeDefined();
        expect(body.data.firstName).toBe(sampleCompleteUser.firstName);
        expect(body.data.lastName).toBe(sampleCompleteUser.lastName);
        expect(body.data.email).toBe(sampleCompleteUser.email);
      });
  });
  it('/users - password is not returned in response', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleCompleteUser)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        expect(body.data.password).toBeUndefined();
      });
  });
  it('/users - googleId is not returned in response', () => {
    return request(httpServer)
      .post('/users')
      .send(sampleCompleteUser)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        expect(body.data.googleId).toBeUndefined();
      });
  });
});
