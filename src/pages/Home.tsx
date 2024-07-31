import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container justifyContent="center">
        <Grid item md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" className="text-center">
                Bem-vindo ao Sistema de Gerenciamento de Clínica Médica
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Nossa plataforma oferece as melhores soluções para gerenciar sua clínica médica de forma eficiente e prática. 
                  Com nosso sistema, você pode gerenciar o cadastro de médicos, agendamentos de consultas, prontuários de pacientes e muito mais.
                </p>
                <p>
                  Navegue pelos nossos menus para acessar as diferentes funcionalidades do sistema. Caso tenha dúvidas, nossa equipe de suporte está sempre pronta para ajudar.
                </p>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ mt: 4 }}>
        <Grid item md={8}>
          <Card>
            <CardMedia
              component="img"
              alt="Imagem da clínica"
              height="140"
              image="hospital-6827347_640.png"
              className="card-img-top-custom"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <p>
                  <strong>Sobre nós:</strong> Somos uma equipe dedicada a trazer soluções inovadoras para o setor de saúde. Nosso objetivo é simplificar a gestão de clínicas médicas, proporcionando mais tempo para o que realmente importa: o cuidado com os pacientes.
                </p>
                <p>
                  Nossa plataforma é segura, fácil de usar e está em constante evolução para atender as necessidades dos nossos usuários. Venha fazer parte dessa revolução na gestão da saúde!
                </p>
              </Typography>
              <Button variant="contained" color="primary" href="#">
                Saiba mais
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
