import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

import './styles.css';

import api from '../../services/api';
import Header from '../components/Header';
import Chatbot from '../components/Chatbot';

import next from '../../assets/next.png';
import search from '../../assets/search.png';
import topInfo from '../../assets/top-info.png';
import previous from '../../assets/previous.png';
import birdTopPhoto from '../../assets/bird-top-photo.png';
import birdBottomInfo from '../../assets/bird-bottom-info.png';
import shareFavoriteBooks from '../../assets/share-favorite-books.png';

export default function Feed() {
  const [opened, setOpened] = useState(false);
  const [mutedSound, setMutedSound] = useState(true);

  const [spotlights, setSpotlights] = useState([]);
  const [collections, setCollections] = useState([]);
  const [trails, setTrails] = useState([]);

  const [lectureProjects, setLectureProjects] = useState([]);
  const [antiRacistLecture, setAntiRacistLecture] = useState([]);
  const [monthReleases, setMonthReleases] = useState([]);

  const [authorMonth, setAuthorMonth] = useState([]);
  const [teachersFamilyQuarantine, setTeachersFamilyQuarantine] = useState([]);
  const [bookReadQuarantine, setBookReadQuarantine] = useState([]);

  const [discover, setDiscover] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [readDevelop, setReadDevelop] = useState([]);

  const [readTravel, setReadTravel] = useState([]);
  const [readLearn, setReadLearn] = useState([]);

  function toggleMutedSound() {
    setMutedSound(!mutedSound);
  }

  useEffect(() => {
    axios
      .all([
        api.get('books', {
          params: {
            category: 'spotlights',
            limit: 8,
          },
        }),

        api.get('collections', {
          limit: 6,
        }),

        api.get('books', {
          params: {
            category: 'trails',
            limit: 8,
          },
        }),

        api.get('books', {
          params: {
            category: 'lecture projects',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'anti-racist lecture',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'month releases',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'author of the month',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'teachers and family in quarantine',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'books to read in the quarantine',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'discover',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'popular books',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'to read and develop',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'to read and travel',
            limit: 3,
          },
        }),

        api.get('books', {
          params: {
            category: 'to read and learn',
            limit: 3,
          },
        }),
      ])
      .then(
        axios.spread((...responses) => {
          setSpotlights(responses[0].data);
          setCollections(responses[1].data);
          setTrails(responses[2].data);
          setLectureProjects(responses[3].data);
          setAntiRacistLecture(responses[4].data);
          setMonthReleases(responses[5].data);
          setAuthorMonth(responses[6].data);
          setTeachersFamilyQuarantine(responses[7].data);
          setBookReadQuarantine(responses[8].data);
          setDiscover(responses[9].data);
          setPopularBooks(responses[10].data);
          setReadDevelop(responses[11].data);
          setReadTravel(responses[12].data);
          setReadLearn(responses[13].data);
        })
      );
  }, []);

  function toggleOpened() {
    setOpened(!opened);
  }

  function handleSearch(e) {
    e.preventDefault();
  }

  function handleNextScrollSpotlightsList(e) {
    e.preventDefault();

    document.querySelector('#scroll-list').scrollBy({
      top: 0,
      left: 450,
      behavior: 'smooth',
    });
  }

  function handlePreviousScrollSpotlightsList(e) {
    e.preventDefault();

    document.querySelector('#scroll-list').scrollBy({
      top: 0,
      left: -450,
      behavior: 'smooth',
    });
  }

  function handleNextScrollTrailsList(e) {
    e.preventDefault();

    document.querySelector('#scroll-list-trails').scrollBy({
      top: 0,
      left: 450,
      behavior: 'smooth',
    });
  }

  function handlePreviousScrollTrailsList(e) {
    e.preventDefault();

    document.querySelector('#scroll-list-trails').scrollBy({
      top: 0,
      left: -450,
      behavior: 'smooth',
    });
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

        <div className="title">
          <div className="highlight-spotlight">
            <h2>Destaques</h2>
          </div>
        </div>

        <div className="carousel">
          <button
            className="next"
            type="button"
            onClick={handlePreviousScrollSpotlightsList}
          >
            <img src={previous} alt="Voltar" />
          </button>

          <ul id="scroll-list">
            {spotlights.map((item) => (
              <li key={item.id} className="spotlight-item">
                <img src={item.image_url} alt="Livro Destaque" />
              </li>
            ))}
          </ul>

          <button
            className="next"
            type="button"
            onClick={handleNextScrollSpotlightsList}
          >
            <img src={next} alt="Avançar" />
          </button>
        </div>

        <div className="title">
          <div className="highlight-collections">
            <h2>Coleções Árvore</h2>
          </div>
        </div>

        <div className="carousel">
          <ul className="scroll-collections-list">
            {collections.map((collection) => (
              <div key={collection.id} className="collections-item-area">
                <li className="collections-item">
                  <img src={collection.image_url} alt="Voltar" />
                </li>

                <h3>{collection.name}</h3>
              </div>
            ))}
          </ul>
        </div>

        <div className="title">
          <div className="highlight-trails">
            <h2>Trilhas de Leituras da Árvore</h2>
          </div>
        </div>

        <div className="carousel">
          <button
            className="next"
            type="button"
            onClick={handlePreviousScrollTrailsList}
          >
            <img src={previous} alt="Voltar" />
          </button>

          <ul id="scroll-list-trails">
            {trails.map((item) => (
              <li key={item.id} className="trails-item">
                <img src={item.image_url} alt="Trilhas" />
              </li>
            ))}
          </ul>

          <button
            className="next"
            type="button"
            onClick={handleNextScrollTrailsList}
          >
            <img src={next} alt="Avançar" />
          </button>
        </div>

        <div className="category-groups">
          <div className="group-area">
            <div className="highlight-category-group-1">
              <h2>Projetos de Leitura</h2>
            </div>

            <div className="category-group-item">
              {lectureProjects.map((item) => {
                let book;

                if (lectureProjects.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                } else if (lectureProjects.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                } else if (lectureProjects.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <div className="highlight-category-group-2">
              <h2>Leitura antirracista</h2>
            </div>

            <div className="category-group-item">
              {antiRacistLecture.map((item) => {
                let book;

                if (antiRacistLecture.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                } else if (antiRacistLecture.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                } else if (antiRacistLecture.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <div className="highlight-category-group-3">
              <h2>Lançamentos do mês</h2>
            </div>

            <div className="category-group-item">
              {monthReleases.map((item) => {
                let book;

                if (monthReleases.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                } else if (monthReleases.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                } else if (monthReleases.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>
        </div>

        <div className="category-groups-2">
          <div className="group-area">
            <div className="highlight-category-group-4">
              <h2>Autor do mês</h2>
            </div>

            <div className="category-group-item">
              {authorMonth.map((item) => {
                let book;

                if (authorMonth.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                } else if (authorMonth.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                } else if (authorMonth.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Projeto de Leitura" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area-2">
            <div className="highlight-category-group-5">
              <h2>Professores e família{'\n'}em quarentena</h2>
            </div>

            <div className="category-group-item">
              {teachersFamilyQuarantine.map((item) => {
                let book;

                if (teachersFamilyQuarantine.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                } else if (teachersFamilyQuarantine.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                } else if (teachersFamilyQuarantine.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Leitura antirracista" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area-2">
            <div className="highlight-category-group-6">
              <h2>Livros para ler na{'\n'}quarentena</h2>
            </div>

            <div className="category-group-item">
              {bookReadQuarantine.map((item) => {
                let book;

                if (bookReadQuarantine.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                } else if (bookReadQuarantine.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                } else if (bookReadQuarantine.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Lançamentos do mês" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>
        </div>

        <div className="category-groups">
          <div className="group-area">
            <div className="highlight-category-group-7">
              <h2>Descubra</h2>
            </div>

            <div className="category-group-item">
              {discover.map((item) => {
                let book;

                if (discover.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Descubra" />
                    </div>
                  );
                } else if (discover.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Descubra" />
                    </div>
                  );
                } else if (discover.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Descubra" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <div className="highlight-category-group-8">
              <h2>Livros Populares</h2>
            </div>

            <div className="category-group-item">
              {popularBooks.map((item) => {
                let book;

                if (popularBooks.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Livros Populares" />
                    </div>
                  );
                } else if (popularBooks.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Livros Populares" />
                    </div>
                  );
                } else if (popularBooks.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Livros Populares" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <div className="highlight-category-group-9">
              <h2>Para ler e desenvolver</h2>
            </div>

            <div className="category-group-item">
              {readDevelop.map((item) => {
                let book;

                if (readDevelop.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Para ler e desenvolver" />
                    </div>
                  );
                } else if (readDevelop.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Para ler e desenvolver" />
                    </div>
                  );
                } else if (readDevelop.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Para ler e desenvolver" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>
        </div>

        <div className="category-groups">
          <div className="group-area">
            <div className="highlight-category-group-10">
              <h2>Para ler e viajar</h2>
            </div>

            <div className="category-group-item">
              {readTravel.map((item) => {
                let book;

                if (readTravel.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Para ler e viajar" />
                    </div>
                  );
                } else if (readTravel.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Para ler e viajar" />
                    </div>
                  );
                } else if (readTravel.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Para ler e viajar" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <div className="highlight-category-group-11">
              <h2>Para ler e aprender</h2>
            </div>

            <div className="category-group-item">
              {readLearn.map((item) => {
                let book;

                if (readLearn.indexOf(item) === 0) {
                  book = (
                    <div key={item.id} className="left-group-item">
                      <img src={item.image_url} alt="Para ler e aprender" />
                    </div>
                  );
                } else if (readLearn.indexOf(item) === 1) {
                  book = (
                    <div key={item.id} className="mid-group-item">
                      <img src={item.image_url} alt="Para ler e aprender" />
                    </div>
                  );
                } else if (readLearn.indexOf(item) === 2) {
                  book = (
                    <div key={item.id} className="right-group-item">
                      <img src={item.image_url} alt="Para ler e aprender" />
                    </div>
                  );
                }

                return book;
              })}
            </div>
          </div>

          <div className="group-area">
            <img src={birdBottomInfo} alt="Arara Jô" />
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
