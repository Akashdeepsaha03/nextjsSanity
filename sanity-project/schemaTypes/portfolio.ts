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
    name: 'feedbackform',
    type: 'document',
    fields: [
      {
        title: 'Topic Name',
        name: 'article',
        type: 'string',
        weak: true,
       
      },
      {
        title: 'Which game package are you providing feedback on?',
        name: 'ques1',
        type: 'string',
        weak: true,
        
      },
      {
        title: 'What version of the game are you playing?',
        name: 'ques2',
        type: 'string',
        
      },
     
      {
        title: ' General thoughts and how we can improve.',
        name: 'ques3',
        type: 'string',
        
      },
      {
        title: 'Any technical issues or bugs encountered?',
        name: 'ques4',
        type: 'string',
        
      },
      {
        title: 'Any innovative features or content you would like to suggest?',
        name: 'ques5',
        type: 'string',
        weak: true,
        
      },
      {
        title: 'What elements of the game did you enjoy the most?',
        name: 'ques6',
        type: 'string',
        
      },
     
      {
        title: 'What did not work for you in the game?',
        name: 'cques7',
        type: 'string',
        
      },
      {
        title: 'Your social media handle or best contact method.',
        name: 'ques8',
        type: 'string',
        
      },
      {
        title: 'Are you a current holder of our ORC Nation NFT?',
        name: 'ques9',
        type: 'string',
        
      }
    ]
  }