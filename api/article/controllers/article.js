const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const article = await strapi.services.article.findOne({ slug });

    const categoryToSuggestId = article.categories[0].id;
    const suggestions = await strapi.services.article.find({_limit:2, 'categories.id': categoryToSuggestId});

    const newArticle = {
      toto: article,
      suggestions: suggestions
    }


    return sanitizeEntity(newArticle, { model: strapi.models.article });
  },

  async findArticlesByCategory(ctx) {
    const { category } = ctx.params;
    const articles = await strapi.services.article.find({'categories.name': category});
    return sanitizeEntity(articles, { model: strapi.models.article });
  },

  async findArticlesByAuthor(ctx) {
    const { author } = ctx.params;
    const articles = await strapi.services.article.find({'author.name': author});
    return sanitizeEntity(articles, { model: strapi.models.article });
  },
};
