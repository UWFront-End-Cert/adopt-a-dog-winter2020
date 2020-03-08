const dogs = [
  {
    dogName: 'Murphy',
    dogBreed: 'saint bernard',
    dogImageLink: 'images/murphy-card.jpg',
    dogAltTag: 'dog with cream colored fur',
    adoptFee: 101.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Poppy',
    dogBreed: 'schnauzer terrier',
    dogImageLink: 'images/poppy-card.jpg',
    dogAltTag: 'dog with very light colored fur',
    adoptFee: 102.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Jack',
    dogBreed: 'cocker spaniel',
    dogImageLink: 'images/jack-card.jpg',
    dogAltTag: 'dog with cream and white colored fur',
    adoptFee: 103.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Duffy',
    dogBreed: 'white terrier',
    dogImageLink: 'images/duffy-card.jpg',
    dogAltTag: 'dog with cream and white colored fur in the body and white colored fur in the face',
    adoptFee: 104.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Lucas',
    dogBreed: 'german shepherd dog',
    dogImageLink: 'images/lucas-card.jpg',
    dogAltTag: 'dog with black colored fur',
    adoptFee: 105.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Jake',
    dogBreed: 'labrador retriever',
    dogImageLink: 'images/jake-card.jpg',
    dogAltTag: 'dog with very light colored fur but cream colored ears',
    adoptFee: 106.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Angus',
    dogBreed: 'pug',
    dogImageLink: 'images/angus-card.jpg',
    dogAltTag: 'dog with cream colored fur but black fur in the nose',
    adoptFee: 107.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Violet',
    dogBreed: 'labrador retriever',
    dogImageLink: 'images/violet-card.jpg',
    dogAltTag: 'dog with dark chocolate colored fur',
    adoptFee: 108.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Piper',
    dogBreed: 'gold retriever',
    dogImageLink: 'images/piper-card.jpg',
    dogAltTag: 'dog with light chocolate colored fur',
    adoptFee: 109.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Maximus',
    dogBreed: 'labrador retriever',
    dogImageLink: 'images/maximus-card.jpg',
    dogAltTag: 'dog with black colored fur but white fur in the nose and eyebrow',
    adoptFee: 110.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Luna',
    dogBreed: 'gold retriever',
    dogImageLink: 'images/luna-card.jpg',
    dogAltTag: 'dog with very light colored fur and a big smile',
    adoptFee: 111.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    dogName: 'Stella',
    dogBreed: 'retriever',
    dogImageLink: 'images/stella-card.jpg',
    dogAltTag: 'dog with cream colored fur but white fur in the nose',
    adoptFee: 112.45,
    dogDescribe: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
];

 let dogsMap = new Map(dogs.map(dog => [dog.dogName, dog]));
