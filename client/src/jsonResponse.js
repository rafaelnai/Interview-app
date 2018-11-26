const jsonResponse = [
  {
    idPerson: 1,
    theme: 'Medicacao de Idosos',
    person: 'Maria',
    image: 'http://2vi0v53jm68z12i7xp24npre1aqy-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/idosa.jpg',
    description: ['75 anos', 'Casada', 'Mãe de 3 filhos e vó de 4 netos',''],
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
            question: 'Olá Senhora Maria tudo bem? Gostaríamos de agradecer a ajuda da senhora. Fique tranquila pois são apenas algumas perguntas?',
            response: 'De nada meu filho(a).',
            score: 10
          },
          {
            question: 'Olá! Sente-se por favor.',
            response: 'Oi, Como assim?',
            score: 0
          },
          {
            question: 'Você vai sempre ao médico',
            response: 'Oi? Já começou?',
            score: -10
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'Senhora Maria, quando precisa ir ao médico, como a senhora faz?',
            response: 'Vou com minha filha na maioria das vezes',
            score: 10
          },
          {
            question: 'A senhora costuma pedir ajudar para ir até ao médico?',
            response: 'Sim, nunca vou sozinha',
            score: 0
          },
          {
            question: 'A senhora não acha melhor ter sempre alguém para lhe acompanhar na ida ao médico?',
            response: 'Sim, acho melhor',
            score: -10
          },
          {
            question: 'Imagino que devido a idade da senhora, seus filhos façam questão de levar a senhora ao médico. Todos querendo levar a senhora, afinal é o que um bom filho faria.',
            response: 'É... na verdade só a minha filha mais nova quem me leva, os outros não se importam muito',
            score: -10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Vocês normalmente utilizam qual meio de transporte até o hospital?',
            response: 'Vamos de taxi',
            score: 10
          },
          {
            question: 'Vocês provavelmente vão com o carro da sua filha, certo?',
            response: 'Não, ela não tem carro. Vamos de taxi',
            score: -10
          },
          {
            question: 'Em alguma ocasião a senhora já utilizou Uber',
            response: 'O que é isso?',
            score: -10
          },
          {
            question: 'O onibus demora muito a passar?',
            response: 'Não sei o tempo que leva o onibus. A gente vai de taxi',
            score: -10
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
            question: 'A senhora já andou de ambulância?',
            response: 'Sim, quando desmaiei na rua uma vez',
            score: -10
          },
          {
            question: 'a senhora faz uso de algum aplicativo de celular para chamar o taxi?',
            response: 'Não sei o que é isso',
            score: -10
          }
        ]
      },
      {
        round: 5,
        alternatives: [
          {
            question: 'A senhora segue exatamente o que o médico lhe recomenda?',
            response: 'Eu tento. (risos)',
            score: 0
          },
          {
            question: 'Alguém ajuda a senhora na parte das medicações, como separando as doses, lembrando a senhora de tomar ou algo do tipo?',
            response: 'Minha filha passa na minha casa no final de semana e já deixa todas as doses separadas em saquinhos para que ñão tome remédio ou quantidade errada',
            score: 10
          },
          {
            question: 'A senhora já tomou medicação errada?',
            response: 'Talvez, não me lembro',
            score: 0
          },
          {
            question: 'A senhora gostaria de um modo que facilitasse o meio com que a senhora se medica hoje?',
            response: 'Sim',
            score: -10
          }
        ]
      }
    ]
  },
  {
    idPerson: 2,
    theme: 'Medicacao de Idosos',
    person: 'Ana Paula',
    image: 'https://radikalportal.no/wp-content/uploads/2014/06/independent-woman-1024x683.jpg',
    description: ['32 anos', 'Solteira ', 'Mora sozinha e passa muito tempo trabalhando e estudando  ', 'É administradora de empresas'],
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Olá Ana Paula, como vai?',
            response: 'Vou bem, obrigada!',
            score: 0
          },
          {
            question: 'Como vai Ana Paula? Seja muito bem-vinda! Obrigado(a) por estar partipando.',
            response: 'Imagina, é um prazer',
            score: 10
          },
          {
            question: 'Vamos começar',
            response: 'Ok',
            score: -10
          },
          {
            question: 'Olá Manoela, tudo bem?',
            response: 'Sou Ana Paula, mas vou bem',
            score: -10
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'Você convive com os idosos da sua família?',
            response: 'Sim, vejo meus avós todo final de semana',
            score: 0
          },
          {
            question: 'Você é jovem, qual a idade dos seus pais?',
            response: 'Meu pai tem 60 e minha mãe 55',
            score: 0
          },
          {
            question: 'Você já precisou cuidar de alguém doente, ou que necessita de cuidados constantes como idosos? Como foi?',
            response: 'Sim, costumo ajudar meus pais a cuidar dos meus avós. Comprom medicamentos e ajudo a organizar as doses',
            score: 10
          },
          {
            question: 'Desculpe Ana Paula, é que entrevistei uma Manoela agora pouco, tão bonita quanto você',
            response: 'Entendi (está constrangida)',
            score: -10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Mesmo que esse processo não seja por muito tempo, já que seus avós já são bem idosos, mesmo assim não se sente cansada?',
            response: 'Quem disse que será por pouco tempo? Eles ainda tem muito a viver, vire essa boca pra lá',
            score: -10
          },
          {
            question: 'É fácil organizar os medicamentos?',
            response: 'Sim, hoje sim. Já estou acostumada',
            score: 0
          },
          {
            question: 'Você não se sente cansa de cuidar dos seus avós? Como um fardo para você?',
            response: 'Claro que não. Faço com maior prazer',
            score: -10
          },
          {
            question: 'Como você faz para separar as doses e garantir que serão tomadas na hora certa?',
            response: 'Eu deixo um despertador com os 3 horários programados, saquinhos com as doses separadas e escritos manhã, tarde e noite. Assim quando toca ao despertador, de acordo com a hora do dia que estão é só pegar o saquinho correspondente. Caso eles se esqueçam ou algo do tipo.',
            score: 10
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'Quando você não pode fazer, quem faz essa função?',
            response: 'Até hoje isso não aconteceu. Sinceramente não sei, provavelmente outra pessoa da família',
            score: 0
          },
          {
            question: 'Como faz para saber se estão tomando corretamente?',
            response: 'No começo ligava para lembrar e perguntar se haviam tomado. Além disso, consigo saber se tomaram pois haverão saquinhos sobrando',
            score: 10
          },
          {
            question: 'Como se sente ajudando seus avós?',
            response: 'Muito feliz',
            score: 0
          },
          {
            question: 'Você já esqueceu de dar alguma dose e colocou a culpa neles?',
            response: 'Claro que não. (está desconfortável)',
            score: -10
          }
        ]
      },
      {
        round: 5,
        alternatives: [
          {
            question: 'O que você acharia de ter uma enfermeira cuidando dos seus avós?',
            response: 'Seria muito legal, mas é muito caro',
            score: 0
          },
          {
            question: 'Você compartilha com os amigos essa maneira de organização para que possam fazer nas suas famílias?',
            response: 'Não, ninguém nunca se interesou muito por isso',
            score: 0
          },
          {
            question: 'Antes de chegar a esse modelo de organização que realiza hoje, quais outro tentou?',
            response: 'Deixei por conta deles, não deu certo. Depois tentei ligar na hora do remédio, mas não sabiam qual era, não conseguiam ler, deixavam cair no chão e muitas vezes tomavam errado.',
            score: 10
          },
          {
            question: 'Você gostaria que quando ficasse velha seus netos cuidassem de você ou você não quer dar esse trabalho a eles como fazem com você?',
            response: 'Eu não gostaria de trabalho as pessoas. A não ser que as pessoas se sintam bem fazendo isso, como é o meu caso. (está desconfortável)',
            score: -10
          }
        ]
      }
    ]
  },
  {
    idPerson: 3,
    person: 'Carlos',
    theme: 'Medicacao de Idosos',
    image: 'https://vitaminasbrasil.com/blogs/news/wp-content/uploads/2017/07/homem-meia-idade.jpg',
    description: ['56 anos', 'Casado ', 'Sem filhos ', 'É professor de educação física aposentado', 'Bastante extrovertido e animado'],
    turn: [
      {
        round: 1,
        alternatives: [
          {
            question: 'Bom dia senhor Carlos, tudo bem? Primeiramente obrigado(a) por dedicar um tempo para na nossa pesquisa.',
            response: 'Bom dia, é um prazer poder ajudar',
            score: 10
          },
          {
            question: 'Olá, qual seu nome mesmo?',
            response: 'Carlos',
            score: -10
          },
          {
            question: 'E aí Carlão! Todo fortão hein... Tudo certo?',
            response: '(risos) Tudo bem! (se sentindo mais a vontade)',
            score: 10
          },
          {
            question: 'Olá Carlos! Pronto para começar?',
            response: 'Preparadaço',
            score: 0
          }
        ]
      },
      {
        round: 2,
        alternatives: [
          {
            question: 'Além de anabolizantes, você faz usso de algum outro medicamento?',
            response: 'Isso aqui é exercício amigo(a), trabalho duro. Nada de anabolizantes (está desconfortável)',
            score: -10
          },
          {
            question: 'Carlão, você ou sua esposa fazem uso de medicamentos diariamente?',
            response: 'Eu sim, ela não.',
            score: 10
          },
          {
            question: 'Alguém da sua casa faz uso de medicação todos os dias? ',
            response: 'Eu',
            score: 0
          },
          {
            question: 'Imagino que por se cuidar não tenha problemas de saúde, portanto podemos pular para a próxima pergunta',
            response: 'Você quem manda. (está confuso)',
            score: -10
          }
        ]
      },
      {
        round: 3,
        alternatives: [
          {
            question: 'Você possui alguma médico de confiança?',
            response: 'Não, nenhum em especial. Vou no mais próximo quando preciso',
            score: 0
          },
          {
            question: 'Com que frequência vai ao médico?',
            response: 'Eu costumo utilizar o manual do convênio para buscar o número das clinicas e assim entrar em contato para realizar o agendamento.',
            score: 0
          },
          {
            question: 'Você costuma fazer checkups, consultas periódicas para poder acompanhar como anda sua saúde?',
            response: 'Eu costumo agendar tanto por telefone como pelo site do convênio.',
            score: 10
          },
          {
            question: 'A julgar por sua idade creio que tenha acompanhamento com Geriatra. Estou certo? Conte-me sobre isso',
            response: 'Na verdade ainda estou super bem, não preciso de Geriatras, tenho tudo controlado e em ordem (está desconfortável)',
            score: -10
          }
        ]
      },
      {
        round: 4,
        alternatives: [
          {
            question: 'Como faz para ir ao médico?',
            response: 'Acho um pouco, visto que passo pelo menos uns 20 min para conseguir concluir o agendamento.',
            score: 0
          },
          {
            question: 'Qual o meio de transporte utiliza para ir ao médico? Você um cara todo em forma, não me surpreenderia se dissesse que vai a pé. ',
            response: 'Sim. (risos) Normalmente vou a pé. Faz bem a saúde',
            score: 10
          },
          {
            question: 'Quem te leva ao médico?',
            response: 'Já sou grandinho, posso ir sozinho. (risos)',
            score: 0
          },
          {
            question: 'Qual a maior dificuldade que um idoso como o senhor encontra para ir ao médico?',
            response: 'Nenhuma, tanto que vou sozinho e a pé (está desconfortável)',
            score: -10
          }
        ]
      },
        {
        round: 5,
        alternatives: [
          {
            question: 'Como organiza suas medicações para não perder o horário e nem erras nas doses?',
            response: 'Marco tudo em um lousa, e deixo os remédios todos guardados em um a mesma caixa. Programei meus exercícios para as mesmas horas das doses, assim um lembra o outro. (risos)',
            score: 10
          },
          {
            question: 'Qual a maior dificuldade que um ex-professor de educação física encontra para tomar medicamentos? Além do fato de ficar feio para um profissional que estimular bons hábitos e vida saúdavel ter de assumir problemas de saúde. ',
            response: 'Ta maluco cara! (nervoso) Ta querendo dizer que não sou bom profissional ou que não sei me cuidar? Para mim já deu (fim da entrevista)',
            score: -10
          },
          {
            question: 'Você toma corretamente seus medicamentos?',
            response: 'Sim',
            score: 0
          },
          {
            question: 'sua esposa também organiza os remédios dela da mesma forma?',
            response: 'Como assim? Lhe disse que ela não tomava medicamentos. Esta prestando atenção no que digo? (está desconfortável)',
            score: -10
          }
        ]
      }
    ]
  },
  {
    idPerson: 4,
    theme: 'Medicacao de Idosos',
    person: 'Breno',
    image: 'https://image.freepik.com/fotos-gratis/cansado-e-exausto-jovem-trabalhando-no-computador-em-casa-a-noite_35378-1119.jpg',
    description: ['28 anos', 'Solteiro', 'Programador Web ', 'Mora sozinho, a família é de outra cidade'],
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