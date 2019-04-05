exports.seed = knex =>
  knex('jokes').insert([
    { joke: 'Did you hear about the restaurant on the moon? Great food, no atmosphere.' },
    { joke: 'What do you call a fake noodle? An Impasta.' },
    { joke: 'How many apples grow on a tree? All of them.' },
    { joke: 'Want to hear a joke about paper? Nevermind it\'s tearable.' },
    { joke: 'I just watched a program about beavers. It was the best dam program I\'ve ever seen.' },
    { joke: 'Why did the coffee file a police report? It got mugged.' },
    { joke: 'How does a penguin build it\'s house? Igloos it together.' },
    { joke: 'Why don\'t skeletons ever go trick or treating? Because they have no body to go with.' },
    { joke: 'What do you call a Mexican who has lost his car? Carlos.' },
    { joke: 'Dad, can you put my shoes on? No, I don\'t think they\'ll fit me.' }
  ])
