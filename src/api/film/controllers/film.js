// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::film.film');


"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::film.film", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const film = await strapi.entityService.findMany("api::film.film", query);

    const sanitizedEntity = await this.sanitizeOutput(film);

    console.log(sanitizedEntity);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));