// const { productsMock } = require('../utils/mocks');
const MongoLib  = require('../lib/mongo');


class ProductService {
  constructor( ) {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }
  async getProducts() {
    const query = {};
    const products = await this.mongoDB.getProducts(this.collection,query);
    return products || [];
  }
  
  async createProducts() {
    const query = {};
    const products = await this.mongoDB.getProducts(this.collection,query);
    return products || [];
  }
}

module.exports = ProductService;
