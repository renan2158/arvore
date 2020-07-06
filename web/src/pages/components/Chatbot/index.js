import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import avatarPhoto from '../../../assets/bird-photo.png';

const theme = {
  background: '#F5F5F5',
  fontFamily: 'Comfortaa',
  headerBgColor: '#FFDB6B',
  headerFontColor: '#fff',
  headerFontSize: '17px',
  botBubbleColor: '#22BADD',
  botFontColor: '#FFF',
  userBubbleColor: '#22BADDDD',
  userFontColor: '#FFF',
};

const steps = [
  {
    id: '1',
    message: 'Oi, eu sou a Jô. Qual é o seu nome?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Olá {previousValue}, em que posso ajudar?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Indicação de Livros', trigger: '5' },
      { value: 2, label: 'FAQ', trigger: '11' },
      { value: 3, label: 'Contatar o Suporte', trigger: '17' },
    ],
  },
  {
    id: '5',
    message:
      'Que tal começarmos com um bom livro agora, hein? Quais tipos de livros você gosta?',
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 1, label: 'Educação', trigger: '7' },
      { value: 2, label: 'Tecnologia e Engenharia', trigger: '8' },
      { value: 3, label: 'Lendas e Mitos', trigger: '9' },
      { value: 5, label: 'História em Quadrinhos', trigger: '10' },
    ],
  },
  {
    id: '7',
    message:
      'Que tal dar uma olhada nesse aqui? Aposto que você quer saber mais sobre "O nariz da Vóvó"!',
    trigger: '27',
  },
  {
    id: '8',
    message:
      'Tenho certeza que você já ouviu falar sobre Steve Jobs. Que tal aprender um pouco com a história dele no livro "Steve Jobs e a revolução digital"?',
    trigger: '27',
  },
  {
    id: '9',
    message:
      'Que tal conhecer um pouco mais sobre lendas em versos de cordel? O livro "Brasiliana" é uma ótima opção!',
    trigger: '27',
  },
  {
    id: '10',
    message:
      'Você conhece o Snoopy? Tem um livro te esperando cheio de histórias dele. Boa leitura!',
    trigger: '27',
  },
  {
    id: '11',
    message: 'Qual a sua dúvida ou reclamação?',
    trigger: '12',
  },
  {
    id: '12',
    user: true,
    trigger: '13',
  },
  {
    id: '13',
    message:
      'Tá bom, vou só conversar com o pessoal aqui e já continuamos nossa conversa por e-mail, tá?',
    trigger: '14',
  },
  {
    id: '14',
    message: 'Digita pra mim o seu e-mail, por favor.',
    trigger: '15',
  },
  {
    id: '15',
    user: true,
    trigger: '16',
  },
  {
    id: '16',
    message: 'Ok, tudo certo. Até já!',
    trigger: '27',
  },
  {
    id: '17',
    message: 'Eita, o que aconteceu? Conta pra mim que eu preciso saber!',
    trigger: '18',
  },
  {
    id: '18',
    user: true,
    trigger: '19',
  },
  {
    id: '19',
    message: 'Entendi, como você prefere ser atendido?',
    trigger: '20',
  },
  {
    id: '20',
    options: [
      { value: 1, label: 'WhasApp', trigger: '21' },
      { value: 2, label: 'E-mail', trigger: '24' },
    ],
  },
  {
    id: '21',
    message: 'Certo, digita pra mim o seu número, por favor.',
    trigger: '22',
  },
  {
    id: '22',
    user: true,
    trigger: '23',
  },
  {
    id: '23',
    message: 'Já te mando uma mensagem, tá? Muito obrigada!',
    trigger: '27',
  },
  {
    id: '24',
    message: 'Preciso do seu e-mail. Digita pra mim, por favor.',
    trigger: '25',
  },
  {
    id: '25',
    user: true,
    trigger: '26',
  },
  {
    id: '26',
    message:
      'Ok, fica de olho que já vamos entrar em contato com você, tá? Obrigada!',
    trigger: '27',
  },
  {
    id: '27',
    message: 'Precisa de mais alguma coisa? Estou aqui pra te ajudar!',
    trigger: '4',
  },
];

export default function Chatbot(props) {
  const { opened, toggle } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          floating
          steps={steps}
          opened={opened}
          headerTitle="Arara Jô"
          toggleFloating={toggle}
          botAvatar={avatarPhoto}
          floatingIcon={avatarPhoto}
          placeholder="Digite algo pra gente conversar..."
        />
      </ThemeProvider>
    </div>
  );
}
