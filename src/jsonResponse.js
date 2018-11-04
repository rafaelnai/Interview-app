const jsonResponse = [
  {
    person: 'Dona Josefa',
    image: 'http://2vi0v53jm68z12i7xp24npre1aqy-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/idosa.jpg',
    description: '75 anos\nCasada\nMãe de 5 filhos e vó de 4\nCasada',
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Possui Convênio?',
            response: 'Sim',
            score: 0
          },
          {
            question: 'Qual foi a última vez que passou no médico?',
            response: 'Não Lembro',
            score: 0
          },
          {
            question: 'Como vê a Saúde no Brasil',
            response: 'Como assim?',
            score: 0
          },
          {
            question: 'Boa tarde, como vai a senhora?',
            response: 'Vou levando meu filho',
            score: 10
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'A senhora realiza algum tratamento médico?',
            response: 'Faço fisioterapia pois tenho problema nas juntas',
            score: 10
          },
          {
            question: 'Tem alguma doença contagiosa?',
            response: 'Não Lembro',
            score: 0
          },
          {
            question: 'A senhor compra remédios sem necessidade?',
            response: 'De jeito nenhum, tenho pouco dinheiro',
            score: 0
          },
          {
            question: 'Já tomou mais remédio do que precisava?',
            response: 'Nunca, sempre o correto',
            score: 0
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'A senhora realiza algum tratamento médico?',
            response: 'Faço fisioterapia pois tenho problema nas juntas',
            score: 0
          },
          {
            question: 'A senhor possui alguém para separar a dose do remédio e lembrar a hora de tomar?',
            response: 'Minha filha',
            score: 10
          },
          {
            question: 'A senhora possui algum conhecido que forneça remédios sem receita?',
            response: 'De jeito nenhum, tenho pouco dinheiro',
            score: -20
          },
          {
            question: 'Já tomou mais remédio do que precisava?',
            response: 'Nunca, sempre o correto',
            score: 0
          }
        ]
      }
    ]
  }
]

export default jsonResponse