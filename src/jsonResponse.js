const jsonResponse = [
  {
    idPerson: 1,
    person: 'Maria',
    image: 'http://2vi0v53jm68z12i7xp24npre1aqy-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/idosa.jpg',
    description: '75 anos\nCasada\nMãe de 3 filhos e vó de 4 netos\n',
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Bom dia Senhora? Tudo bem?',
            response: 'Oi, tudo sim!',
            score: 0
          },
          {
            question: 'Olá Senhora tudo bem? Gostaria de pedir alguns minutos da sua atenção para nos responder algumas perguntas, poderia nos ajudar?',
            response: 'Olá, sim claro posso',
            score: 10
          },
          {
            question: 'Boa Tarde, Tudo bem? A senhora, costuma ir muito ao médico?',
            response: 'Oi, Como assim?',
            score: 0
          },
          {
            question: 'Bom dia senhora Maria, tudo bem?',
            response: 'Bom dia meu filho, tudo sim e você?',
            score: 0
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'Senhora Maria, quando precisa ir ao médico, como você faz?',
            response: 'Chaom meu marido',
            score: 0
          },
          {
            question: 'A senhora costuma pedir ajudar para ir até ao médico?',
            response: 'Sim, as vezes',
            score: 0
          },
          {
            question: 'A senhora faz algum tratamento continuo que exija que vá ao médico semanalmente?',
            response: 'Não, enfim preciso ir',
            score: -20
          },
          {
            question: 'Senhora Maria, quando precisar ir ao médico qual o hospital mais próximo que costuma ir?',
            response: 'Costumo ir ao Hospital da Luz próximo ao shopping Ibirapuera',
            score: 10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Legal, bom já que próximo, normalmente como você faz para chegar ao hospital?',
            response: 'As vezes meu marido me leva, outras vou de táxi.',
            score: 10
          },
          {
            question: 'Da última vez que precisou ir ao médico como a senhora se locomoveu?',
            response: 'Não me lembro',
            score: 0
          },
          {
            question: 'Senhora ou seu marido possui carro?',
            response: 'Sim',
            score: 0
          },
          {
            question: 'Senhora Maria, pensando em situações alternativas de deslocamento, quais a senhora faz ou faria uso?',
            response: 'Carro/Táxi ou chamo um dos meus filhos',
            score: 0
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'Certo, pensando na opção do taxi, como a senhora costuma chamar o taxi?',
            response: 'Eu tenho um cartão de um contato e sempre chamo o mesmo taxista.',
            score: 10
          },
          {
            question: 'A senhora faz uso de transporte público?',
            response: 'Não',
            score: 0
          },
          {
            question: 'A senhora conhece alguma outra opção a não ser o taxi?',
            response: 'Não',
            score: 0
          },
          {
            question: 'a senhora faz uso de algum aplicativo de celular para chamar o taxi?',
            response: 'Não sei o que é isso',
            score: 0
          }
        ]
      }
    ]
  },
  {
    idPerson: 2,
    person: 'Ana Paula',
    image: 'https://blogonofre.files.wordpress.com/2013/11/homem-ch-1.jpg',
    description: '32 anos\nSolteira\nMora sozinha e passa muito tempo trabalhando e estudando',
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Bom dia Senhora? Tudo bem?',
            response: 'Não precisa me chamar de senhora',
            score: -20
          },
          {
            question: '. Olá tudo bem? Poderia nos reservar alguns minutos para responder nossa pesquisa?',
            response: 'Olá, tudo sim, claro posso sim',
            score: 10
          },
          {
            question: 'Boa Tarde, a senhora costuma ir ao mercado?',
            response: 'Olá, sim costumo',
            score: 0
          },
          {
            question: 'Bom dia, a senhora gosta de fazer compras no supermercado',
            response: 'Não gosto',
            score: 0
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'Ana como você faz quando precisa fazer compras?',
            response: 'Vou ao mercado mais próximo',
            score: 0
          },
          {
            question: 'Paula, você faz compras com muita frequência',
            response: 'Não',
            score: 0
          },
          {
            question: 'A senhora costuma gastar muito com o supermercado?',
            response: 'Não, enfim preciso ir',
            score: -20
          },
          {
            question: 'Ana quando você costuma ir com muita frequência ao supermercado',
            response: 'Não, normalmente uma vez por semana faço compras no supermercado.',
            score: 10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Ana aproximadamente quanto tempo você gasta quando vai ao supermercado?',
            response: 'Em torno de 1h a 1h30m',
            score: 10
          },
          {
            question: 'Ana você costuma comprar produtos em pequenas quantidades?',
            response: 'Sim',
            score: 0
          },
          {
            question: 'O que mais lhe chama atenção ao comprar seus produtos são as promoções?',
            response: 'As vezes sim',
            score: 0
          },
          {
            question: 'Você costuma fazer compras parceladas?',
            response: 'Não',
            score: 0
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'Qual o momento que mais lhe incomoda durante a suas compras no supermercado?',
            response: 'Sempre as filas dos caixas, é onde perco mais tempo esperando para passar minhas compras.',
            score: 10
          },
          {
            question: '??????????????????????????????',
            response: 'Não',
            score: 0
          },
          {
            question: 'Se você percebe que o mercado está muito cheio costumar desistir de fazer suas compras?',
            response: 'Sim, odeio filas',
            score: 0
          },
          {
            question: 'você acha que realizar as compras usando a internet seria uma solução?',
            response: 'Acredito que sim',
            score: 0
          }
        ]
      }
    ]
  },
  {
    idPerson: 3,
    person: 'Thamires',
    image: 'https://blogonofre.files.wordpress.com/2013/11/homem-ch-1.jpg',
    description: '46 anos\nCasada\nMãe de 1 filho',
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'bom dia, tudo bem? Primeiramente obrigador por dedicar um tempo para na nossa pesquisa.',
            response: 'Bom dia, é um prazer poder ajuda-lo',
            score: 10
          },
          {
            question: 'A senhora utiliza o SUS?',
            response: 'Não porque tenho convênio particular pela empresa em qual trabalho!',
            score: 0
          },
          {
            question: 'O que você acha do atendimento do SUS?',
            response: 'Não gosto acho um desrespeito aos usuários do serviço!',
            score: 0
          },
          {
            question: 'A senhora já utilizou alguma vez a rede pública de saúde para marca exames?',
            response: 'Não, apenas consultas pelo convênio da empresa.',
            score: 0
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'A senhora possui algum problema de saúde?',
            response: 'Obviamente não!',
            score: -20
          },
          {
            question: 'Thamires, com qual frequência você costuma fazer exames?',
            response: 'Bom, normalmente costumo fazer meus exames de rotina a cada 3 meses.',
            score: 10
          },
          {
            question: 'Thamires, como toda mulher, se preocupar com a saúde é um fator fundamental, visto isso qual foi a última vez que realizou algum tipo de exame? ',
            response: 'Bem, o último exame que realizei foi mês passado.',
            score: 0
          },
          {
            question: 'Thamires, quanto tempo você tem se dedicado para cuidar de sua saúde?',
            response: 'Costumo dedicar pouco tempo, devido a correria as tarefas de casa e do trabalho. ',
            score: 0
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Bom e como você faz para agendar suas consultar, visto que nesta sua rotina tempo é algo muito precioso?',
            response: 'Normalmente eu ligo na central do convênio e faço todo o processo junto com a atendente. ',
            score: 0
          },
          {
            question: 'Bom, e neste último mês como você agendou suas consultas e exames?',
            response: 'Eu costumo utilizar o manual do convênio para buscar o número das clinicas e assim entrar em contato para realizar o agendamento.',
            score: 0
          },
          {
            question: 'Legal, percebi que você tem como prioridade cuidar da saúde também, hoje como você marca suas consultas?',
            response: 'Eu costumo agendar tanto por telefone como pelo site do convênio.',
            score: 10
          },
          {
            question: 'Sabemos o quanto é complicado cuidar das rotinas da casa e do trabalho. Administrar o tempo é essencial e por isso gostaríamos saber como você agenda suas consultas?',
            response: 'Faço diretamente pelo site, durante os minutos de pausa no trabalho.',
            score: 0
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'E você acha eficiente?',
            response: 'Acho um pouco, visto que passo pelo menos uns 20 min para conseguir concluir o agendamento.',
            score: 0
          },
          {
            question: 'Durante o agendamento você fica muito tempo aguardando o processo de agendamento?',
            response: 'Sim, pois tem todo um processo de consulta e pesquisa que o atendente faz e isso leva tempo até concluir.',
            score: 10
          },
          {
            question: 'Entre as duas opções mencionadas qual você costuma usar com mais frequência?',
            response: 'Uso mais o site, pois acho mais rápido e prático.',
            score: 0
          },
          {
            question: 'Você não perde muito tempo no site para conseguir agendar a consulta?',
            response: 'Não! Eu sei acessar o site!',
            score: -20
          }
        ]
      }
    ]
  },
  {
    idPerson: 4,
    person: 'Brendo',
    image: 'https://blogonofre.files.wordpress.com/2013/11/homem-ch-1.jpg',
    description: '25 anos\n Solteiro\n Programador Web',
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Bom dia Senhor? Tudo bem?',
            response: 'Oi, tudo sim!',
            score: 0
          },
          {
            question: 'Olá Senhor tudo bem? Gostaria de pedir alguns minutos da sua atenção para nos responder algumas perguntas, poderia nos ajudar?',
            response: 'Olá, sim claro posso',
            score: 10
          },
          {
            question: 'Boa Tarde, Tudo bem? Senhor faz uso de medicamento controlado?',
            response: 'Oi, como assim?',
            score: 0
          },
          {
            question: 'Bom dia senhor, tudo bem, pelo que estou vendo, está se exercitando',
            response: 'Bom dia, sim não pode parar né',
            score: 0
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'O senhor faz uso de algum tipo de medicamento?',
            response: 'Não',
            score: 0
          },
          {
            question: 'O senhor costuma ir a farmácia para comprar remédios?',
            response: 'Sim, as vezes',
            score: 0
          },
          {
            question: 'O senhor possui alguma doença crônica que faça uso de medicamentos contínuos?',
            response: 'Não, enfim preciso ir',
            score: -20
          },
          {
            question: 'Bom vejo que senhor busca se exercitar para manter uma vida mais saudável, gostaríamos de saber com qual frequência o senhor costuma ir ao médico?',
            response: 'Bom eu costumo fazer meu acompanhamento médico de forma mensal, até mesmo por causa da minha idade',
            score: 10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'O senhor pede ajuda do seu filho para ir à farmácia?',
            response: 'Sim, as vezes',
            score: 0
          },
          {
            question: 'E que tipos de remédios normalmente o senhor faz uso?',
            response: 'Não lembro',
            score: 0
          },
          {
            question: 'Quando o senhor precisa comprar algum remédio, o senhor costuma ir a farmácia sozinho ou acompanhado.',
            response: 'Acompanhado',
            score: 0
          },
          {
            question: 'Legal senhor Ronaldo, vejo que a saúde é uma de suas prioridades, por isso gostaríamos de saber quando precisa tomar algum medicamento, como o senhor faz para',
            response: 'Normalmente meu filho me leva na farmácia para comprar os medicamentos',
            score: 10
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'O senhor costuma olhar quais medicamentos foram solicitados pelo médico antes de ir à farmácia',
            response: 'Normalmente não',
            score: 0
          },
          {
            question: 'O senhor já teve problemas para comprar algum remédio na farmácia',
            response: 'Sim, algumas vezes',
            score: 10
          },
          {
            question: 'O senhor costuma usar o caixa preferencial quando vai a farmácia?',
            response: 'Sim',
            score: 0
          },
          {
            question: 'Seu filho que faz a compra dos medicamentos? ',
            response: 'Sim',
            score: 10
          }
        ]
      }
    ]
  }
]

export default jsonResponse