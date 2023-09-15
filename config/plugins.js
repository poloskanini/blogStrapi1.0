module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },

  //* ESSAI pour essayer d'enregistrer les datas sur ma BDD PostGresql de RENDER si la config ci-dessous ne le fait pas

  // upload: {
  //   config: {
  //     providerOptions: {
  //       localServer: {
  //         maxage: 300000
  //       },
  //     },
  //   },
  // },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  ckeditor5: {
    enabled: true,
    // resolve: "./src/plugins/strapi-plugin-ckeditor"
  },
  // ...
  // ...
});