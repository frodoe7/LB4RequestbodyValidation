import {DefaultCrudRepository} from '@loopback/repository';
import {Test} from '../models';
import {TestDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.id
> {
  constructor(
    @inject('datasources.test') dataSource: TestDataSource,
  ) {
    super(Test, dataSource);
  }
}
