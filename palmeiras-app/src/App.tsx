// Importações das bibliotecas necessárias
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importe seu arquivo CSS aqui

// URL da API fictícia (substitua pela sua URL real)
const API_BASE_URL = 'https://api.palmeiras.com.br/players';

// Interface para definir a estrutura de dados do jogador
interface Player {
  id: number;
  name: string;
  position: string;
  skill: string; // Adicionando a habilidade (skill)
}

// Componente principal do aplicativo React
const App: React.FC = () => {
  // Estado para armazenar a lista de jogadores
  const [players, setPlayers] = useState<Player[]>([]);

  // Estado para armazenar os dados do novo jogador a ser adicionado
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', skill: '' });

  // Estado para armazenar o jogador selecionado para edição
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  // Efeito para buscar a lista de jogadores ao carregar o componente
  useEffect(() => {
    fetchPlayers();
  }, []);

  // Função para buscar a lista de jogadores da API
  const fetchPlayers = async () => {
    try {
      const response = await axios.get<Player[]>(API_BASE_URL);
      setPlayers(response.data);
    } catch (error) {
      console.error('Erro ao buscar jogadores:', error);
    }
  };

  // Função para criar um novo jogador na API
  const createPlayer = async () => {
    try {
      await axios.post(API_BASE_URL, newPlayer);
      fetchPlayers();
      setNewPlayer({ name: '', position: '', skill: '' });
    } catch (error) {
      console.error('Erro ao criar jogador:', error);
    }
  };

  // Função para excluir um jogador da API
  const deletePlayer = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      fetchPlayers();
      setSelectedPlayer(null);
    } catch (error) {
      console.error('Erro ao excluir jogador:', error);
    }
  };

  // Função para atualizar um jogador na API
  const updatePlayer = async () => {
    if (selectedPlayer) {
      try {
        await axios.put(`${API_BASE_URL}/${selectedPlayer.id}`, selectedPlayer);
        fetchPlayers();
        setSelectedPlayer(null);
      } catch (error) {
        console.error('Erro ao atualizar jogador:', error);
      }
    }
  };

  return (
    <div >
      <h1 className="centered-content">Jogadores do Palmeiras</h1>

      {/* Lista de jogadores */}
      <h2 className="centered-content">Lista de Jogadores</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position} - Habilidade: {player.skill}
            <button onClick={() => setSelectedPlayer(player)}>Editar</button>
            <button onClick={() => deletePlayer(player.id)}>Excluir</button>
          </li>
        ))}
      </ul>
<br></br>
      {/* Formulário para adicionar novo jogador */}
      <h3>Adicionar Novo Jogador</h3>
      <div >
        <input 
          type="text"
          placeholder="Nome"
          value={newPlayer.name}
          onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Posição"
          value={newPlayer.position}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, position: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Habilidade"
          value={newPlayer.skill}
          onChange={(e) =>
            setNewPlayer({ ...newPlayer, skill: e.target.value })
          }
        />
        <button className="centered-content" onClick={createPlayer}>Adicionar Jogador</button>
      </div>

      {/* Formulário para editar jogador selecionado */}
      {selectedPlayer && (
        <div  className="centered-content">
          <h2>Editar Jogador</h2>
          <input
            type="text"
            placeholder="Nome"
            value={selectedPlayer.name}
            onChange={(e) =>
              setSelectedPlayer({ ...selectedPlayer, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Posição"
            value={selectedPlayer.position}
            onChange={(e) =>
              setSelectedPlayer({ ...selectedPlayer, position: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Habilidade"
            value={selectedPlayer.skill}
            onChange={(e) =>
              setSelectedPlayer({ ...selectedPlayer, skill: e.target.value })
            }
          />
          <button onClick={updatePlayer}>Salvar Edições</button>
        </div>
      )}
    </div>
  );
};

export default App;