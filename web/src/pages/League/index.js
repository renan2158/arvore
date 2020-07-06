import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

import './styles.css';

import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

import next from '../../assets/next.png';
import search from '../../assets/search.png';
import graphic from '../../assets/graphic.png';
import topInfo from '../../assets/top-info.png';
import previous from '../../assets/previous.png';
import position1 from '../../assets/position-1.png';
import position2 from '../../assets/position-2.png';
import position3 from '../../assets/position-3.png';
import processing from '../../assets/processing.png';
import birdTopPhoto from '../../assets/bird-top-photo.png';
import noParticipant from '../../assets/no-participant.png';
import shareFavoriteBooks from '../../assets/share-favorite-books.png';

export default function League() {
  const [opened, setOpened] = useState(false);
  const [mutedSound, setMutedSound] = useState(true);

  function toggleMutedSound() {
    setMutedSound(!mutedSound);
  }

  function toggleOpened() {
    setOpened(!opened);
  }

  function handleSearch(e) {
    e.preventDefault();
  }

  return (
    <div className="feed-container">
      <header>
        <Header />
      </header>

      <div className="feed-content">
        <div className="top-area">
          <button
            className="toggle-mute"
            type="button"
            onClick={toggleMutedSound}
          >
            {mutedSound ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <div className="center-area">
            <form className="search-box" onSubmit={handleSearch}>
              <input
                placeholder="Pesquise pelo título, autor, categoria e etc."
                type="text"
              />

              <button type="submit">
                <img src={search} alt="Pesquisar" />
              </button>
            </form>

            <button className="share-books" type="button">
              <img
                src={shareFavoriteBooks}
                alt="Compartilhar livros preferidos"
              />
            </button>
          </div>

          <div className="top-info">
            <button type="button" onClick={toggleOpened}>
              <img src={topInfo} alt="Mensagem da Arara Jô" />
            </button>

            <img src={birdTopPhoto} alt="Arara Jô" />
          </div>
        </div>

        <div className="info-area">
          <div className="left-area">
            <div className="title">
              <div className="highlight-points">
                <h2>Seus Pontos</h2>
              </div>
            </div>

            <div className="points">
              <div className="number-of-points">
                <h1>0</h1>

                <h2>pts</h2>
              </div>

              <div className="points-info">
                <h2>
                  Você entrará no ranking da Liga deste mês quando atingir 80
                  pontos!
                </h2>
              </div>
            </div>

            <div className="title">
              <div className="highlight-history">
                <h2>Seu histórico</h2>
              </div>
            </div>

            <div className="history">
              <button className="next" type="button">
                <img src={previous} alt="Voltar" />
              </button>

              <div className="history-area">
                <div className="history-month">
                  <img src={noParticipant} alt="Mês" />

                  <h2>Abril</h2>
                </div>

                <div className="history-month">
                  <img src={noParticipant} alt="Mês" />

                  <h2>Maio</h2>
                </div>

                <div className="history-month">
                  <img src={noParticipant} alt="Mês" />

                  <h2>Junho</h2>
                </div>

                <div className="history-month">
                  <img src={processing} alt="Mês" />

                  <h2>Julho</h2>
                </div>
              </div>

              <button className="next" type="button">
                <img src={next} alt="Avançar" />
              </button>
            </div>
          </div>

          <div className="right-area">
            <div className="title">
              <div className="highlight-evolution">
                <h2>Sua evolução</h2>
              </div>
            </div>

            <div className="graphic">
              <img src={graphic} alt="Gráfico de evolução" />
            </div>

            <div className="title">
              <div className="highlight-history">
                <h2>Ranking Geral</h2>
              </div>
            </div>

            <div className="ranking">
              <button className="next" type="button">
                <img src={previous} alt="Voltar" />
              </button>

              <div className="ranking-area">
                <div className="ranking-position">
                  <h2 className="position">1º</h2>

                  <img src={position1} alt="Mês" />

                  <h2>
                    Manu <br />
                    Luz
                  </h2>
                </div>

                <div className="ranking-position">
                  <h2 className="position">2º</h2>

                  <img src={position2} alt="Mês" />

                  <h2>
                    Pedro
                    <br />
                    Henrique
                  </h2>
                </div>

                <div className="ranking-position">
                  <h2 className="position">3º</h2>

                  <img src={position3} alt="Mês" />

                  <h2>
                    Yasmin
                    <br />
                    Oliveira
                  </h2>
                </div>
              </div>

              <button className="next" type="button">
                <img src={next} alt="Avançar" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <audio autoPlay loop muted={mutedSound}>
        <source
          src="https://fruto-server.herokuapp.com/uploads/background-song.mp3"
          type="audio/mpeg"
        />

        <track default kind="captions" srcLang="pt-BR" src="" />
      </audio>

      <Chatbot opened={opened} toggle={toggleOpened} />
    </div>
  );
}
