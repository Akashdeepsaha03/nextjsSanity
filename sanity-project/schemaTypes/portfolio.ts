// // schemas/pet.js
// export default {
//     name: 'portfolio',
//     type: 'document',
//     title: 'Portfolio',
//     fields: [
//       {
//         name: 'title',
//         type: 'string',
//         title: 'Title'
//       },
//       {
//         name: 'description',
//         type: 'array',
//         title: 'Description',
//         of: [
//             {
//                 type: 'block',
//             },
//         ],
//       },
//     ],
//   }
export default {
    title: 'Feedback',
    name: 'feedback',
    type: 'document',
    fields: [
      {
        title: 'Rating',
        name: 'rating',
        type: 'number',
      },
      {
        title: 'Article',
        name: 'article',
        type: 'string',
        weak: true,
        // to: [{type: 'article'}, {type: 'schemaType'}, {type: 'helpArticle'}]
      },
      {
        title: 'Comment',
        name: 'comment',
        type: 'text',
        description: 'Comment submitted from sanity.io'
      },
      {
        name: 'done',
        type: 'boolean',
        title: 'Is this feedback dealt with?'
      },
      {
        name: 'notes',
        type: 'text',
        title: 'Internal notes',
        description: 'What did we do with this feedback?'
      }
    ]
  }