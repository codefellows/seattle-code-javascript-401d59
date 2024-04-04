'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async read(id) {
    try {
      if (id) {
        return this.model.findOne({where: {id: id}});
      } else {
        return this.model.findAll();
      }
    } catch (e) {
      console.log("ERROR ON READ FOR", this.model.name);
      throw new Error(e);
    }
  }
  async create(json) {
    try {
      return this.model.create(json);
    } catch(e) {
      console.log('ERROR ON CREATE FOR', this.model.name);
      throw new Error(e);
    }
  }
  async update(id, json) {
    try {
      let record = await this.model.findByPk(id);
      let updatedRecord = await record.update(json);
      return updatedRecord;
    } catch(e) {
      console.log('ERROR ON UPDATE FOR', this.model.name);
      throw new Error(e);
    }
  }

  async delete(id) {
    try {
      return this.model.destroy({ where: {id: id }});
    } catch(e) {
      console.log('ERROR ON UPDATE FOR', this.model.name);
      throw new Error(e);
    }
  }
}

module.exports = Collection;
