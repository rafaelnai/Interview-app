import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Grid, TextField, Paper, Button, withStyles, Typography } from '@material-ui/core';

const styles = {
  paper: {
    padding: 40
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  avatar: {
    width: 150,
    height: '100%'
  },
  root: {
    minHeight: '100vh',
    maxWidth: '100%',
    margin: 0,
    backgroundColor: '#2980b9'
  },
  btn: {
    marginTop: 20
  },
  text: {
    marginBottom: 10,
    marginTop: 25,
    color: '#fff'
  },
  textColor: {
    color: '#fff'
  }
}

class RegisterForm extends Component {

  constructor() {
    super()
    this.state = {
      name: null,
      email: null,
      disabled: true
    }
  }

  handleInputChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={24} justify="center" alignItems="center" className={classes.root}>
        <Grid item sm={12} md={4} className={classes.dialog}>
          <Typography variant="subheading" className={classes.text}>
            Público-alvo
          </Typography>
          <Typography variant="body1" className={classes.textColor}>
            Profissionais de UX e de áreas como Jornalismo, Marketing, Publicidade, 
            Ciências Sociais e outras áreas que utilizem a conversa como uma de suas 
            ferramentas do dia a dia.
          </Typography>
          <Typography variant="subheading" className={classes.text}>
            Objetivo
          </Typography>
          <Typography variant="body1" className={classes.textColor}>
            Criar/evoluir a capacidade de entrevistar, interagir e obter informações de 
            maneira verbal.
          </Typography>
          <Typography variant="subheading" className={classes.text}>
            Como funciona
          </Typography>
          <Typography variant="body1" className={classes.textColor}>
            Com o simulador você terá de escolher qual a melhor pergunta a se fazer naquele 
            momento para aquela pessoa. Existem perguntas perfeitas para aquele momento, outras 
            que não contribuem tanto, e aquelas que não se deve fazer, pois pode deixar o 
            entrevistado envergonhado, triste, bravo ou no mínimo descontente.
          </Typography>
          <Typography variant="subheading" className={classes.text}>
            Como jogar
          </Typography>
          <Typography variant="body1" className={classes.textColor}>
            Escolha o cenário, leia o contexto, entreviste quantas personas quiser e no final 
            veja quantos pontos fez. Além disso você poderá enviar qual solução gostaria de propor 
            para o problema do cenário em questão
          </Typography>
        </Grid>


        <Grid item sm={12} md={4}>
          <Paper className={classes.paper}>

            <Grid container justify="center" alignItems="center">
              <Avatar
                alt="Logo Interview-app"
                src="./images/logo.svg"
                className={classes.avatar}
              />

              <Typography variant="subtitle1">
                Que bom que está aqui! Desejamos boas-vindas a você e esperamos que aproveite
                ao máximo o nosso simulador de entrevistas.
              </Typography>
            </Grid>

            <TextField
              name="name"
              label="Nome"
              margin="normal"
              fullWidth
              onChange={e => this.handleInputChange(e)}
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              margin="normal"
              fullWidth
              onChange={e => this.handleInputChange(e)}
            />

          

            <Grid container justify="flex-end">
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                disabled={!(this.state.name && this.state.email)}>

                <Link
                  className={classes.link}
                  to={{
                    pathname: "/persons",
                    userInfo: {
                      userName: this.state.name,
                      userEmail: this.state.email
                    }
                  }}>
                    Começar Entrevistas
                </Link>

              </Button>
            </Grid>

          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(RegisterForm)